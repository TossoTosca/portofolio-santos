# Design System

## Design Direction

Portfolio ini menggunakan konsep:

> iOS-inspired developer portfolio

Tujuan desain:

- Premium
- Minimal
- Smooth
- Glassy
- Product-like
- Tidak seperti portfolio developer biasa

## Design Principles

### 1. Minimal, Not Empty

Gunakan sedikit elemen, tetapi setiap elemen harus punya fungsi jelas.

### 2. Soft Depth

Gunakan blur, shadow, dan transparency untuk menciptakan depth.

### 3. Product Storytelling

Section bukan hanya daftar informasi, tetapi chapter dalam cerita:

```text
Hero → About → Skills → Projects → Contact
```

### 4. Calm Motion

Animasi harus halus, tidak terlalu cepat, tidak bounce berlebihan.

### 5. Consistent Rounded UI

Gunakan rounded corners besar untuk card dan pill shape untuk control.

## Core UI Language

### Glassmorphism

Material utama menggunakan:

```css
background: rgba(255,255,255,0.55);
border: 1px solid rgba(255,255,255,0.4);
backdrop-filter: blur(18px);
box-shadow: 0 10px 30px rgba(0,0,0,0.08);
```

Komponen utama:

- `GlassCard`

Dipakai untuk:

- Navbar
- Skill cards
- Project cards
- Project modal
- Contact card

## Typography

Font approach:

```css
font-family:
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
```

Alasan:

- Mirip Apple system typography
- Ringan
- Native feel di macOS/iOS
- Tetap modern di Windows/Android

## Typography Scale

### Section Label

```css
font-size: 14px;
letter-spacing: 2px;
color: var(--text-secondary);
```

Contoh:

```text
FULL STACK DEVELOPER
ABOUT ME
SKILLS
PROJECTS
CONTACT
```

### Hero Title

```css
font-size: 56px;
font-weight: 600;
line-height: 1.1;
```

### Section Title

```css
font-size: 42px;
font-weight: 600;
line-height: 1.2;
```

### Body Text

```css
font-size: 18px;
line-height: 1.6;
color: var(--text-secondary);
```

### Card Title

```css
font-size: 20px;
font-weight: 600;
```

## Spacing System

Recommended spacing:

```text
4px
8px
12px
16px
20px
24px
30px
40px
60px
80px
120px
```

Common usage:

- Section vertical padding: `120px 24px`
- Card padding: `20px` to `30px`
- Grid gap: `16px` to `40px`
- Navbar gap: `18px` to `28px`

## Radius System

```css
--radius-sm: 12px;
--radius-md: 20px;
--radius-lg: 28px;
--radius-pill: 999px;
```

Usage:

- Button: `999px`
- Navbar: `999px`
- Icon logo: `12px`
- Card: `24px`
- Modal: `24px`

## Motion System

Motion harus terasa calm dan premium.

### Entry Animation

Typical pattern:

```tsx
initial={{ opacity: 0, y: 24 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1.2 }}
```

### Modal Animation

Pattern:

```tsx
hidden: { opacity: 0, scale: 0.92, y: 20 }
show: { opacity: 1, scale: 1, y: 0 }
exit: { opacity: 0, scale: 0.96, y: 10 }
```

### Hover Animation

Recommended:

```css
transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
```

Hover effect:

```css
transform: translateY(-12px) scale(1.015);
box-shadow: 0 30px 70px rgba(0,0,0,0.20);
```

## Cursor Glow

Cursor glow digunakan sebagai ambient background effect.

Important rules:

- Jangan terlalu terang.
- Jangan mengganggu teks.
- Gunakan `pointerEvents: none`.
- Gunakan `zIndex: 0`, sedangkan content `zIndex: 1`.

Recommended style:

```tsx
background:
    "radial-gradient(circle, rgba(0,122,255,0.12) 0%, rgba(0,122,255,0.06) 40%, transparent 70%)";
filter: "blur(90px)";
opacity: 0.6;
mixBlendMode: "screen";
```

## Component Guidelines

### Button

Use pill shape.

```tsx
style={{
    padding: "10px 18px",
    borderRadius: "999px",
    cursor: "pointer",
}}
```

### Card

Use `GlassCard` instead of raw `div` when the element represents a surface.

### Modal

Modal should:

- Use dark overlay
- Use backdrop blur
- Use GlassCard
- Stop click propagation inside modal
- Close when clicking outside
- Provide explicit Close button

### Skill Icon

Recommended size:

```tsx
width={32}
height={32}
```

SVG is preferred.

## UX Rules

- Do not overanimate.
- Do not show too many elements at once.
- Use whitespace generously.
- Keep cards visually consistent.
- Make click targets clear.
- Avoid scrollbars where possible for cleaner Apple-style UI.
