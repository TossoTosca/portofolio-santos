# Color Guide

## Design Intent

Color direction project ini mengambil inspirasi dari Apple/iOS/macOS:

- Soft white surfaces
- Subtle blue accent
- Glass transparent material
- Gentle dark overlay for modal
- Ambient blue/purple glow

## Core Light Theme Tokens

```css
:root {
    --background: #f5f5f7;
    --surface: rgba(255,255,255,.65);
    --surface-hover: rgba(255,255,255,.82);
    --text-primary: #1d1d1f;
    --text-secondary: #6e6e73;
    --accent: #007aff;
    --border: rgba(255,255,255,.45);
}
```

## Core Dark Theme Tokens

```css
[data-theme="dark"] {
    --background: #000000;
    --surface: rgba(30,30,30,.55);
    --surface-hover: rgba(45,45,45,.75);
    --text-primary: #ffffff;
    --text-secondary: #b0b0b5;
    --accent: #0a84ff;
    --border: rgba(255,255,255,.08);
}
```

## Current Apple-Level Dark Background Option

Saat ingin tampilan lebih premium dan cinematic:

```css
body {
    background: radial-gradient(circle at top, #0b0f17, #05070c);
    color: white;
}
```

## Accent Colors

### iOS Blue

```css
#007AFF
```

Usage:

- Primary CTA
- Highlight name in Hero
- Active state
- Cursor glow

### Dark iOS Blue

```css
#0A84FF
```

Usage:

- Dark mode accent
- Glow layer

### Purple Glow

```css
rgba(88,86,214,0.18)
```

Usage:

- Secondary ambient glow
- Background depth

## Text Colors

### Primary Text Light

```css
#1D1D1F
```

Usage:

- Main headings
- Strong labels

### Secondary Text Light

```css
#6E6E73
```

Usage:

- Paragraph
- Section labels
- Tech stack text
- Supporting text

### Primary Text Dark

```css
#FFFFFF
```

### Secondary Text Dark

```css
#B0B0B5
```

## Glass Material Colors

### Default Glass Surface

```css
rgba(255,255,255,0.55)
```

### Stronger Glass Surface

```css
rgba(255,255,255,0.75)
```

### Subtle Glass Surface

```css
rgba(255,255,255,0.05)
```

Use subtle glass for navbar logo or small controls.

## Border Colors

### Light Glass Border

```css
rgba(255,255,255,0.4)
```

### Dark/Subtle Border

```css
rgba(255,255,255,0.1)
```

## Shadow Guide

### Small Shadow

```css
0 2px 10px rgba(0,0,0,.05)
```

### Medium Shadow

```css
0 10px 30px rgba(0,0,0,.08)
```

### Large Shadow

```css
0 25px 60px rgba(0,0,0,.12)
```

### Hover Shadow

```css
0 30px 70px rgba(0,0,0,0.20)
```

## Glow Colors

### Main Cursor Glow

```css
radial-gradient(
    circle,
    rgba(0,122,255,0.12) 0%,
    rgba(0,122,255,0.06) 40%,
    transparent 70%
)
```

### Secondary Cursor Glow

```css
radial-gradient(circle, rgba(88,86,214,0.10), transparent 70%)
```

### Hero Glow Layer 1

```css
radial-gradient(circle, rgba(0,122,255,0.25), transparent 60%)
```

### Hero Glow Layer 2

```css
radial-gradient(circle, rgba(88,86,214,0.18), transparent 60%)
```

### Hero Glow Layer 3

```css
radial-gradient(circle, rgba(10,132,255,0.15), transparent 65%)
```

## Modal Overlay

```css
background: rgba(0,0,0,0.6);
backdrop-filter: blur(10px);
```

Usage:

- Project detail modal
- Future dialog/modal components

## Recommended Usage Rules

### Do

- Use `var(--accent)` for primary actions.
- Use `var(--text-secondary)` for supporting text.
- Use transparent white surfaces for glass UI.
- Use dark overlay for modal focus.
- Use blue/purple glow subtly.

### Avoid

- Too many saturated colors.
- Strong neon glow over text.
- Pure black shadows that are too harsh.
- Using different random blues in different sections.
- Making every element glass; only important surfaces should use glass.

## Example Button Colors

### Primary CTA

```tsx
style={{
    background: "var(--accent)",
    color: "white",
}}
```

### Secondary CTA

```tsx
style={{
    background: "transparent",
    color: "var(--text-primary)",
    border: "1px solid var(--border)",
}}
```

## Example Card Colors

```tsx
style={{
    background: "rgba(255,255,255,0.55)",
    border: "1px solid rgba(255,255,255,0.4)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
}}
```
