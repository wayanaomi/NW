# Naomi Waya — Portfolio

A premium, production-ready portfolio website for **Naomi Waya**, Software
Engineer. Built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer
Motion, and a hand-built shadcn-style component library.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animation
- **Radix UI primitives** + custom shadcn-style components (`components/ui`)
- **lucide-react** + **react-icons** for icons
- **next-themes** for light/dark mode
- **react-hook-form** + **zod** for the contact form

## Project Structure

```
app/                  Routes (home, about, services, projects, contact, 404)
  robots.ts           Generates /robots.txt
  sitemap.ts          Generates /sitemap.xml
  icon.tsx            Dynamic favicon
  apple-icon.tsx       Dynamic Apple touch icon
  opengraph-image.tsx  Dynamic OG/Twitter card image
components/
  ui/                 Reusable primitives (Button, Card, Badge, Input, Sheet...)
  sections/           Page sections (Hero, Services, Projects, Testimonials...)
constants/            Site copy: services, tech stack, projects, testimonials...
hooks/                 Custom hooks (scroll position, counters, mounted state)
lib/                   cn() helper, framer-motion variants, SEO metadata builder
types/                 Shared TypeScript types
utils/                 Contact form validation schema, scroll helper
public/
  images/             Avatar + logo placeholders
  projects/           Project preview placeholder graphics
  resume/             Placeholder downloadable CV
  manifest.json       Web app manifest
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build for production:

```bash
npm run build
npm run start
```

## Content You Should Personalize

- `public/images/naomi-waya.svg` — replace with a real photo of Naomi Waya.
- `public/resume/naomi-waya-cv.pdf` — replace with the real CV/resume PDF.
- `constants/site.ts` — update the GitHub/X links once available.
- `constants/projects.ts` — add real `liveUrl` / `githubUrl` links as projects
  go live; the buttons hide/disable gracefully when a URL is missing.
- `app/contact/page.tsx` / `components/contact-form.tsx` — the form currently
  simulates a submission. Wire it up to a real email service (e.g. Resend,
  Nodemailer, or a serverless function) when ready.

## Deployment (Vercel)

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are
   required for the current build.
4. Update `siteConfig.url` in `constants/site.ts` to your final production
   domain so SEO metadata, sitemap, and Open Graph tags resolve correctly.
5. Click **Deploy**.

## Future Enhancements

- Connect the contact form to a real email/CRM backend.
- Add a CMS (e.g. Sanity, Contentful) for projects/testimonials so content can
  be updated without redeploying.
- Add real project screenshots and case study pages per project.
- Add a blog section for SEO and thought leadership.
- Add automated Lighthouse CI and visual regression testing.

