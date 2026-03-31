# CLAUDE.md - MH Learning Centre (满汉全习)

> **Project**: MH Learning Centre tuition website
> **Stack**: Next.js 14 (App Router) + Tailwind CSS v4 + Framer Motion + shadcn/ui
> **Deployment**: Vercel

## Quick Reference

- **Dev server**: `npm run dev`
- **Build**: `npx next build`
- **Lint**: `npm run lint`

## Project Structure

```
src/
  app/
    layout.tsx          ← Root layout (fonts, Navbar, Footer, WhatsAppFAB)
    page.tsx            ← Homepage (composes section components)
    courses/page.tsx    ← Courses with tab filter
    timetable/page.tsx  ← Weekly timetable
    teachers/page.tsx   ← Teacher profiles with expand/collapse
    enrol/page.tsx      ← Enrollment form → WhatsApp
    contact/page.tsx    ← Contact info + map placeholder
  components/
    Navbar.tsx          ← Sticky glassmorphism + mobile drawer
    Footer.tsx          ← Dark footer with 3 columns
    WhatsAppFAB.tsx     ← Floating WhatsApp button (all pages)
    HeroSection.tsx     ← Hero with mesh gradient + grain
    StatsBar.tsx        ← Animated count-up stats
    WhyChooseUs.tsx     ← 3 feature cards
    CoursesPreview.tsx  ← Tab-filtered course cards
    Testimonials.tsx    ← Dark section testimonial cards
    CTABanner.tsx       ← Teal gradient CTA
  lib/
    constants.ts        ← All data (subjects, teachers, timetable, etc.)
    whatsapp.ts         ← wa.me link builder
    utils.ts            ← cn() utility from shadcn
public/
  logo.jpeg             ← Light background logo
  logo-dark.jpeg        ← Dark background logo
```

## Design System (Tailwind v4 @theme tokens)

| Token | Value | Usage |
|---|---|---|
| `primary-teal` | #2ABFAA | Buttons, highlights, active nav |
| `primary-dark` | #1A7A6E | Hover states, deep accents |
| `accent-lime` | #C8F000 | Badges, tags, energy pops |
| `dark-bg` | #0D1117 | Hero, footer, page headers |
| `surface` | #F7F8F5 | Main page background |
| `surface-alt` | #EDFAF7 | Alternating sections |
| `text-primary` | #111318 | Headings |
| `text-muted` | #5C6370 | Body text |

## Fonts

| Class | Font | Usage |
|---|---|---|
| `font-display` | DM Serif Display | Hero headings |
| `font-heading` | Outfit | UI headings, nav, buttons |
| `font-sans` | DM Sans | Body text (default) |
| `font-cn-serif` | Noto Serif SC | Chinese headings |
| `font-cn-sans` | Noto Sans SC | Chinese body text |

## Key Rules

- All WhatsApp links go through `buildWhatsAppLink()` from `lib/whatsapp.ts`
- All data lives in `lib/constants.ts` — marked with `// TODO: replace` for placeholders
- WhatsApp number: `WHATSAPP_NUMBER` in constants (currently placeholder)
- No backend — enrollment form builds a WhatsApp message and opens wa.me
- Bilingual: Chinese primary, English secondary throughout
- Framer Motion `ease` strings in variants must use `as const` to satisfy TypeScript

@AGENTS.md
