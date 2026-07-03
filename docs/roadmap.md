# Roadmap

Last updated: 3 July 2026

## Completed

### Foundation and design system

- Next.js, React, and TypeScript project setup
- Apple/iOS-inspired visual direction
- CSS color, radius, shadow, and transition tokens
- Reusable `GlassCard` and reveal animation
- Static production build

### Page experience

- Hero, About, Skills, Projects, and Contact storytelling flow
- Calm motion and ambient background glow
- Responsive typography, grids, cards, and spacing
- Mobile-safe section heights
- Reduced-motion accessibility support

### Navigation

- Floating glass navbar
- Smooth anchor scrolling
- Active section indicator
- Mobile menu with ESC close
- Logo image and hover polish

### Skills

- Frontend, Backend, Database, and Tools tabs
- Responsive skills grid
- Correct fallback for skills without a supplied icon

### Projects

- Three real project entries and live demo links, with HVZ website and CMS shown separately
- Horizontal, touch-friendly carousel
- Multi-image gallery sourced from the supplied project asset folders
- Floating badges for the real React/Vite and Vue/Vite technology stacks
- Responsive detail dialog with image/story split
- Previous/next navigation
- ESC and outside-click close
- Background scroll lock

### Hero and performance polish

- Professional portrait restored to the Hero
- Code/product-stack visual restored as a lightweight native UI card
- Per-pixel scroll state updates removed
- Expensive blur removed from repeated content cards
- SN favicon applied to browser metadata and navbar

### Contact

- Real email and social links
- WhatsApp and email message composers
- Pre-filled message handoff for review before sending
- Responsive contact card and footer

### Deployment preparation

- Final title, description, canonical metadata, and social metadata foundation
- Generated robots and sitemap routes
- Production URL environment configuration
- Deployment checklist and asset requirements documented
- Lint and production build passing

## Required before public launch

- Supply and review final visual assets in `docs/assets-needed.md`.
- Confirm `NEXT_PUBLIC_SITE_URL` is set to `https://portofolio-santos.vercel.app` in Vercel.
- Confirm project descriptions and technology labels with the portfolio owner.
- Perform final visual QA in real desktop and mobile browsers.
- Push stable code, merge to `main`, and deploy manually through Vercel.

## Later enhancements

- Dark/light theme toggle
- Analytics
- Contact form
- Download CV action
- Full project case-study pages
- Blog or writing section
