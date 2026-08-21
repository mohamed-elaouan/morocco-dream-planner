# RAD Morocco

React, TypeScript, Vite, and Tailwind application for RAD Morocco.

## Local development

Use npm as the only package manager.

```sh
npm install
copy .env.example .env
npm run dev
```

The optional AI assistant requires `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. These are public browser configuration values; do not commit `.env`.

## Verification

```sh
npm run check
```

This runs TypeScript checks, linting, tests, a production build, and installed-package validation.

## cPanel deployment

Run `npm run build`, then upload the contents of `dist/` to the cPanel web root. Vite copies `public/.htaccess` and `public/api/sendEmail.php` into that output, so `/api/sendEmail` continues to route to the PHP mail handler.

`public/api/sendEmail.php` is intentionally preserved as the production mail implementation. Its SMTP configuration is managed separately and is not changed by frontend cleanup work.
