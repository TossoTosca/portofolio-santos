# Project State

Last updated: 3 July 2026

## Overview

Personal portfolio with an Apple/iOS-inspired product experience: minimal, responsive, glassy, calm, and focused on clear storytelling.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Framer Motion
- Lucide React
- CSS variables and responsive global CSS
- `next/image` for local image optimization

## Current implementation

- Responsive hero, About, Skills, Projects, and Contact sections.
- Floating glass navbar with active section state, smooth anchors, and mobile menu.
- Responsive typography and layouts without fixed-height section wrappers.
- Skills grouped into Frontend, Backend, Database, and Tools.
- Three real project entries with live links: HVZ Mobilindo, its CMS dashboard, and WhatsApp Automation Reply.
- Project carousel with touch scrolling and desktop arrow controls.
- Multi-image project galleries using the supplied website, CMS, and automation screenshots.
- Floating technology badges and full stack details based on the actual project dependencies.
- Accessible project dialog with split layout, previous/next controls, ESC close, outside-click close, and background scroll lock.
- Real email, GitHub, LinkedIn, and WhatsApp links.
- In-site message composer for WhatsApp and email, with review in the destination app before sending.
- ATS-friendly English resume PDF with a View Resume link in Contact.
- Metadata, canonical URL support, robots, and sitemap.
- Reduced-motion support and visible keyboard focus states.
- Hero portrait and code-structure visual using supplied assets and native UI.
- SN favicon package used for both browser identity and navbar branding.
- Scroll rendering optimized by removing per-frame React updates and expensive card-wide blur.
- Static production build verified successfully.

## Verified commands

```text
npm run lint   -> passed
npm run build  -> passed
```

Generated routes:

```text
/
/robots.txt
/sitemap.xml
```

## Configuration before deployment

The canonical production URL is `https://portofolio-santos.vercel.app`. It is used as the fallback by the application and is also documented in `front-porto/.env.example`.

## Assets still awaiting final files

The application works without adding generated placeholders, but some visual assets still need to be supplied by the owner. See `docs/assets-needed.md` for exact sizes and paths.

## Future enhancements

- Dark/light theme toggle
- Analytics
- Contact form with a backend or email provider
- Downloadable CV
- Dedicated project case studies
- Blog or writing section
