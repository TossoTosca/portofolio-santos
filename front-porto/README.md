# Santoso Nugroho Portfolio

Personal portfolio built with Next.js, TypeScript, React, Framer Motion, and an Apple/iOS-inspired glass design system.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

Run these before every deployment:

```bash
npm run lint
npm run format:check
npm run build
```

The site is prerendered as static content. The current build also generates `/robots.txt` and `/sitemap.xml`.

## Environment

Copy `.env.example` to `.env.local`, then replace the example value with the final production URL:

```env
NEXT_PUBLIC_SITE_URL=https://portofolio-santos.vercel.app
```

On Vercel, add the same variable in Project Settings → Environment Variables. If it is not set, the app can use Vercel's production URL automatically; setting it explicitly is recommended for canonical metadata.

## Vercel deployment

1. Make sure the final assets listed in `docs/assets-needed.md` have been supplied.
2. Confirm `NEXT_PUBLIC_SITE_URL` is set to `https://portofolio-santos.vercel.app`.
3. Run the quality checks above.
4. Push the stable branch to GitHub and merge it into `main`.
5. Import the repository in Vercel. If the repository root is imported, set **Root Directory** to `front-porto`.
6. Keep the default Next.js build command (`npm run build`) and deploy.
7. After deployment, verify `/`, `/robots.txt`, `/sitemap.xml`, project links, social links, and the mobile menu.

No manual server or database setup is required for the current portfolio.
