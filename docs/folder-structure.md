# Folder Structure

## Recommended Structure

```text
portfolio/
│
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── common/
│   │   ├── Container.tsx
│   │   ├── Divider.tsx
│   │   ├── Loading.tsx
│   │   ├── SectionTitle.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── Navbar.tsx
│   │   └── ScrollToTop.tsx
│   │
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   │
│   └── ui/
│       ├── GlassCard.tsx
│       ├── PrimaryButton.tsx
│       ├── ProjectCard.tsx
│       ├── RevealSection.tsx
│       ├── SkillCard.tsx
│       └── SocialButton.tsx
│
├── constants/
│   ├── navigation.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── socials.ts
│
├── hooks/
│   ├── useInView.ts
│   └── useScroll.ts
│
├── lib/
│
├── public/
│   ├── icons/
│   │   ├── angular.svg
│   │   ├── android-studio.svg
│   │   ├── express.svg
│   │   ├── firebase.svg
│   │   ├── git.svg
│   │   ├── kotlin.svg
│   │   ├── mssql.svg
│   │   ├── mysql.svg
│   │   ├── nextjs.svg
│   │   ├── nodejs.svg
│   │   ├── postgresql.svg
│   │   ├── postman.svg
│   │   ├── python.svg
│   │   ├── react.svg
│   │   ├── SN_Favicon/
│   │   ├── typescript.svg
│   │   └── vscode.svg
│   │
│   ├── images/
│   │   └── santoso_portrait_for_business.png
│   │
│   ├── projects/
│   │   ├── hvzmobilindo_assets/
│   │   ├── hvzmobilindo_cms_assets/
│   │   └── wa_automation_assets/
│   │
│   └── resume/
│       └── Santoso-Nugroho-CV.pdf
│
├── styles/
│   ├── animations.css
│   └── variables.css
│
├── types/
│   ├── project.ts
│   ├── skill.ts
│   └── social.ts
│
├── utils/
│
├── .gitignore
├── .prettierrc
├── .prettierignore
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## Folder Explanation

### `app/`

Folder utama Next.js App Router.

Berisi:

- `layout.tsx`: root layout aplikasi
- `page.tsx`: halaman utama portfolio
- `globals.css`: global CSS
- `favicon.ico`: favicon

### `components/`

Berisi semua React components.

#### `components/common/`

Komponen kecil dan reusable umum.

Contoh:

- Container
- SectionTitle
- Divider
- Loading
- ThemeToggle

#### `components/layout/`

Komponen layout utama.

Contoh:

- Navbar
- Footer
- MobileMenu
- ScrollToTop

#### `components/sections/`

Komponen section utama halaman.

Contoh:

- Hero
- About
- Skills
- Projects
- Contact

#### `components/ui/`

Komponen UI reusable.

Contoh:

- GlassCard
- RevealSection
- PrimaryButton
- ProjectCard
- SkillCard

### `constants/`

Berisi data statis seperti navigation, skills, projects, dan social links.

Direkomendasikan untuk memindahkan array data dari component ke folder ini saat project makin besar.

### `hooks/`

Berisi custom React hooks.

Current hooks:

- `useScroll.ts`
- `useInView.ts`

### `public/`

Berisi static assets.

Catatan penting:

File dalam `public` diakses dari root URL.

Benar:

```ts
"/icons/react.svg";
"/projects/hvzmobilindo_assets/1.jpg";
```

Salah:

```ts
"public/icons/react.svg";
```

### `styles/`

Berisi CSS global tambahan.

- `variables.css`: design tokens
- `animations.css`: keyframes global

### `types/`

Berisi TypeScript interfaces/types.

Contoh:

```ts
export interface Project {
  id: number;
  title: string;
  desc: string;
  tech: string;
  story: string;
  img: string;
}
```

### `utils/`

Berisi helper function umum.

Contoh potensial:

- scroll helper
- format date
- copy to clipboard helper
