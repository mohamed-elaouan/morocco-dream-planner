import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { promises as fs } from "node:fs";
import { promisify } from "node:util";
import { brotliCompress as brotliCompressCallback, constants, gzip as gzipCallback } from "node:zlib";

const gzip = promisify(gzipCallback);
const brotliCompress = promisify(brotliCompressCallback);

const compressibleExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".mjs",
  ".svg",
  ".txt",
  ".wasm",
  ".xml",
]);

const compressionPackage = "vite-plugin-compression";

const loadCompressionPlugins = async (): Promise<PluginOption[]> => {
  try {
    const module = (await import(compressionPackage)) as {
      default: (options: Record<string, unknown>) => PluginOption;
    };

    return [
      module.default({
        algorithm: "brotliCompress",
        ext: ".br",
        threshold: 10240,
        deleteOriginFile: false,
      }),
      module.default({
        algorithm: "gzip",
        ext: ".gz",
        threshold: 10240,
        deleteOriginFile: false,
      }),
    ];
  } catch {
    return [staticCompressionFallback()];
  }
};

const staticCompressionFallback = (): PluginOption => ({
  name: "static-compression-fallback",
  apply: "build",
  async closeBundle() {
    const outDir = path.resolve(__dirname, "dist");

    const collectFiles = async (dir: string): Promise<string[]> => {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      const files = await Promise.all(
        entries.map(async (entry) => {
          const fullPath = path.join(dir, entry.name);
          return entry.isDirectory() ? collectFiles(fullPath) : [fullPath];
        })
      );

      return files.flat();
    };

    const files = await collectFiles(outDir);
    await Promise.all(
      files
        .filter((file) => compressibleExtensions.has(path.extname(file)))
        .map(async (file) => {
          const source = await fs.readFile(file);
          if (source.byteLength < 10240) return;

          const [gzipped, brotlied] = await Promise.all([
            gzip(source, { level: 9 }),
            brotliCompress(source, {
              params: {
                [constants.BROTLI_PARAM_QUALITY]: 11,
              },
            }),
          ]);

          await Promise.all([fs.writeFile(`${file}.gz`, gzipped), fs.writeFile(`${file}.br`, brotlied)]);
        })
    );
  },
});

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(), 
    mode === "development" && componentTagger(),
    ...(await loadCompressionPlugins()),
    // Custom plugin to handle emails during local development (npm run dev)
    {
      name: 'local-email-handler',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/api/sendEmail' && req.method === 'POST') {
            const chunks: any[] = [];
            req.on('data', chunk => chunks.push(chunk));
            req.on('end', async () => {
              try {
                const body = JSON.parse(Buffer.concat(chunks).toString());
                const nodemailer = await import('nodemailer');
                const dotenv = await import('dotenv');
                dotenv.config();

                const transporter = nodemailer.createTransport({
                  host: 'mail.radmorocco.com',
                  port: 465,
                  secure: true,
                  auth: {
                    user: 'contact@radmorocco.com',
                    pass: process.env.ContactEmail,
                  },
                });

                await transporter.sendMail({
                  from: '"RAD Morocco Dev" <contact@radmorocco.com>',
                  to: 'contact@radmorocco.com, info@radmorocco.com',
                  replyTo: body.email,
                  subject: `[DEV] ${body.tour || 'Inquiry'} from ${body.name}`,
                  text: JSON.stringify(body, null, 2),
                });

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, message: 'Local email sent' }));
              } catch (err) {
                console.error('Local Email Error:', err);
                res.statusCode = 500;
                res.end(JSON.stringify({ success: false, error: err.message }));
              }
            });
            return;
          }
          next();
        });
      }
    }
  ].filter(Boolean),
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (/[\\/]node_modules[\\/](react|react-dom|react-router-dom|react-helmet-async|@tanstack[\\/]react-query)[\\/]/.test(id)) {
            return "react-vendor";
          }

          if (/[\\/]node_modules[\\/](@radix-ui|lucide-react|framer-motion|sonner|react-day-picker|date-fns|embla-carousel-react|recharts|cmdk|vaul|react-markdown)[\\/]/.test(id)) {
            return "ui-vendor";
          }

          return "vendor";
        },
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.webp'],
}));
