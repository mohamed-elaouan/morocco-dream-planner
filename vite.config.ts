import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
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
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom', 'react-helmet-async'],
          motion: ['framer-motion'],
          ui: ['lucide-react', 'date-fns', 'react-day-picker']
        }
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
