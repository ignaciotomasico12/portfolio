# AGENTS.md — Portfolio Ignacio Tomás

## Tech Stack
- **Framework:** Next.js 16.1.6 (App Router)
- **Runtime:** React 19.2.3
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4 + `tw-animate-css`
- **Animation:** Framer Motion v12 (`motion/react`)
- **i18n:** `next-intl` v4.8.2
- **UI Components:** Radix UI + shadcn/ui (New York style, neutral base)
- **Icons:** `lucide-react`, `react-icons`, `country-flag-icons`
- **Utility:** `clsx`, `tailwind-merge`, `class-variance-authority`
- **Package manager:** pnpm

## Project Structure
```
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx          # Root layout (server) — font, providers, global effects
│       ├── page.tsx            # Home page (client) — Hero, About, Projects, Experience
│       ├── globals.css         # Tailwind + theme vars + scrollbar + cursor:none
│       ├── locale-initializer.ts  # Redirects to stored language preference
│       └── components/         # Page-specific sections
│           ├── hero.tsx
│           ├── about.tsx
│           ├── projects.tsx
│           └── experience.tsx
├── components/
│   ├── layout/                 # Layout primitives
│   │   ├── header.tsx          # Sticky header — nav links, social, language switcher
│   │   ├── footer.tsx          # Footer with copyright
│   │   ├── logo.tsx            # SVG logo (inline SVG, no file)
│   │   └── page-transition.tsx # Motion wrapper for page content
│   ├── ui/                     # Reusable UI components
│   │   ├── button.tsx          # shadcn Button (CVA variants)
│   │   ├── dropdown-menu.tsx   # shadcn DropdownMenu (Radix)
│   │   ├── heading.tsx         # Section heading with horizontal line
│   │   ├── particles-background.tsx  # Floating particles (motion)
│   │   ├── scroll-reveal.tsx   # Generic scroll-triggered animation wrapper
│   │   ├── tech-icons.tsx      # Maps tech name string → react-icons component
│   │   └── icons/              # Custom animated SVG icons (forwardRef + useImperativeHandle)
│   │       ├── CodeXmlIcon.tsx
│   │       ├── DownloadIcon.tsx
│   │       ├── ExternalLinkIcon.tsx
│   │       ├── GithubIcon.tsx
│   │       ├── GlobeIcon.tsx
│   │       ├── LinkedinIcon.tsx
│   │       └── MailIcon.tsx
│   ├── animated-logo.tsx       # Parallax SVG logo with scroll-driven transforms
│   ├── custom-cursor.tsx       # Dot + ring cursor (motion spring, desktop only)
│   ├── scroll-to-top.tsx       # Scroll-to-top button with AnimatePresence
│   ├── splash-cursor.tsx       # WebGL fluid simulation cursor effect
│   └── typewriter-loop.tsx     # Infinite typewriter text animation
├── lib/
│   ├── constants.ts            # Data: EXPERIENCE(), PROJECTS(), LANGUAGES, SOCIAL_MEDIA
│   ├── storage.ts              # localStorage helpers (load/save/clear)
│   └── utils.ts                # cn() = clsx + twMerge
├── types/
│   ├── experience.ts           # Experience interface
│   ├── layout.ts               # MetaProps type
│   ├── project.ts              # Project interface
│   └── utils.ts                # Language, SocialMedia types
├── messages/
│   ├── en.json                 # English translations
│   └── es.json                 # Spanish translations (default)
├── i18n.ts                     # Locale config: ['en', 'es'], defaultLocale='es'
├── i18n/
│   └── request.ts              # next-intl server request config
├── navigation.ts               # next-intl navigation helpers (Link, useRouter, usePathname)
└── proxy.ts                    # next-intl middleware (locale detection, routing)
```

## Key Patterns

### i18n
- Locales: `es` (default), `en`
- `localePrefix: 'as-needed'` — default locale has no prefix in URL
- Language stored in `localStorage` key `portfolio-app:user-language`
- `LocaleInitializer` component redirects user to stored language on mount
- Translations accessed via `useTranslations()` hook (client) or `getTranslations()` (server)
- Experience and projects data are functions using `useTranslations` internally (must call as `EXPERIENCE()`, `PROJECTS()`)

### Component Patterns
- **Server/Client split:** Layout is server component; all interactive components are `'use client'`
- **Icon pattern:** Each icon is `forwardRef` with `useImperativeHandle` exposing `startAnimation()`/`stopAnimation()` — parents control animation via refs
- **shadcn/ui:** Components in `src/components/ui/` follow shadcn conventions — CVA variants, Radix primitives, `cn()` utility
- **Motion:** All animations use `motion/react` (not `framer-motion`). Import from `motion/react`
- **Custom cursor:** Two effects — `SplashCursor` (WebGL fluid) + `CustomCursor` (dot + ring). Both hidden on touch devices. CSS hides native cursor via `cursor: none` on `@media (pointer: fine)`
- **Data:** Experience and projects defined in `src/lib/constants.ts` as functions using `useTranslations` — must be called as `EXPERIENCE()` and `PROJECTS()` to get translated data

### Styling
- **Tailwind 4** with `@theme` block for custom colors in `globals.css`
- **Custom color palette:** `primary-*` (#00ffc3 teal), `secondary-*` (#25afb1), `grey-*`, `background-primary/secondary`
- **Dark mode:** Uses `prefers-color-scheme: dark` media query for CSS variables (not class-based)
- **Font:** Fira Code (monospace) via `next/font/google`, CSS variable `--font-fira-code`
- **Scrollbar:** Custom styled for both Firefox and WebKit
- **Max width:** Content capped at `1250px` with auto margins

### Animation Philosophy
- Scroll-triggered animations via `whileInView` with `viewport={{ once: true }}`
- Staggered children via `containerVariants`/`itemVariants` pattern
- Parallax on hero section elements using `useScroll` + `useTransform`
- Animated SVG icons with `useAnimation` + `useImperativeHandle` for parent control
- `AnimatePresence` for mount/unmount transitions (scroll-to-top, scroll indicator)

### Data Architecture
- **Social links:** `SOCIAL_MEDIA` object in constants (github, linkedin, email)
- **Languages:** `LANGUAGES` array with slug, name, flag component
- **Experiences:** Array with dates, company, logo path, role, responsibilities[], skills[]
- **Projects:** Array with title, description, image path, tags[], optional githubUrl/liveUrl
- Tech icons mapped via `getTechIcon(techName)` in `tech-icons.tsx` — normalizes name and returns react-icon

### Routing
- Single-page app: one route `/{locale}` with all sections on one page
- Navigation uses `Link` from `@/navigation` (next-intl wrapper)
- No API routes
- Middleware in `proxy.ts` handles locale detection and routing

## Commands
```bash
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## Important Notes
- **No tests** currently configured
- **No environment variables** — all data is static/i18n
- `splash-cursor.tsx` uses `@ts-nocheck` due to WebGL type complexity
- Icon components follow same pattern — reference any icon file for structure
- Adding new section: create component in `src/app/[locale]/components/`, add to `page.tsx`
- Adding new project/experience: add translations in both `en.json` and `es.json`, update `constants.ts`
- Adding new tech icon: add case in `tech-icons.tsx` switch statement
