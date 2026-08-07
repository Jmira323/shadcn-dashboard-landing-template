# PROMPTS.md — how this was built with Claude Code

This project was built end-to-end with **Claude Code** (Anthropic's agentic CLI), working in phases with a commit at the end of each one. The process had two stages:

1. **Planning session (Claude Desktop).** Before writing any code, I used Claude to turn the assignment brief into a build plan: pick the base repo, define the fictional brand ("Nova Analytics" — name, palette, tagline, sample data), choose the stack (Supabase auth + Vercel hosting), and draft a phase-by-phase prompt sequence. That session also produced the brand SVG assets (`public/nova-analytics-logo.svg`, `public/nova-analytics-mark.svg`).
2. **Execution session (Claude Code).** Each phase below was one working block: prompt → Claude Code explores/edits/verifies → I review the diff and the running app → commit.

The prompts below are the phase briefs I drove Claude Code with, plus notes on what actually happened — including the things that broke and how they were fixed, since that's the realistic part of AI-assisted development.

---

## Phase 0-1 — Orient + flatten to a single Next.js app

> You are helping me complete a technical trial: rebrand this open-source dashboard as "Nova Analytics", add real auth, and deploy to Vercel. First explore the repository and map where the landing page, dashboard, auth pages, branding strings, and theme tokens live. Then: we only need the Next.js version — move everything from `nextjs-version/` to the repo root, delete `vite-version/` and the template's marketing docs, keep the MIT license, and make sure `pnpm build` passes.

**Notes:** The template shipped with two pre-existing TypeScript build errors under the installed toolchain: the tasks page accessed `priority.icon` on a data array that had no `icon` field, and the shadcn `chart.tsx` predated recharts 3's type changes. Fixed the first with an explicit optional-icon type, and the second by pulling the current official shadcn chart component (`pnpm dlx shadcn@latest add chart --overwrite`).

## Phase 2 — Whitelabel

> Rebrand this entire app as "Nova Analytics": replace every visible product name, title/OG metadata, logo (use the Nova mark as app/icon.svg and generate a favicon.ico from it), footer credits ("© 2026 Nova Analytics. All rights reserved."), and remove every ShadcnStore/silicondeck/tweakcn link, the theme-customizer promo widget, the "upgrade to pro" button, and the redundant sign-in-2/-3 style variants. Replace demo identities with Nova sample data (admin@novaanalytics.io, orgs Helios Retail / Orbit Logistics / Vega Health / Lumen Media, workspace "Nova Analytics" on the Growth plan). Finish with a repo-wide search proving zero matches remain in user-visible strings.

**Notes:** Removing the theme customizer meant untangling it from the layouts, the dark-mode toggle (which shares a view-transition animation), and a dynamic-import registry. The favicon.ico was generated programmatically from the brand SVG with sharp (16/32/48 px entries).

## Phase 3 — Nova color palette

> Apply the Nova palette to the shadcn CSS variables in `globals.css` for BOTH light and dark mode, in the oklch format the project already uses: primary Nova Violet #6D28D9 (dark mode #7C3AED), aqua #22D3EE reserved for gradients/chart accents, slate ink/borders/surfaces, dark background #020617. Keep `--accent` a subtle wash (it drives hover states). Verify WCAG AA contrast for text on primary buttons.

**Notes:** Chart series colors were chosen and then **validated with a script** (lightness band, chroma floor, color-vision-deficiency separation between adjacent series, contrast vs. surface) for both light and dark mode; the first candidate palette failed deutan separation between pink and emerald, so emerald was swapped for blue and the dark-mode steps darkened until everything passed. Verified visually in both modes with Playwright screenshots.

## Phase 4 — Landing page

> Make `/` serve the landing page (it currently redirects to /dashboard). Hero: tagline "See your data in a new light." with the violet→aqua gradient on the key phrase, one-liner subtext, CTAs "Get started" → /sign-up and "Log in" → /sign-in. Rewrite features, pricing (Starter/Growth/Scale), FAQ, testimonials, and the CTA band as Nova product content; replace the real-company logo carousel with the fictional customer orgs as text logos; drop the template's about/team/blog/contact showcase sections. Every nav/CTA link must point to a real route. Confirm 375/768/1280 px layouts.

**Notes:** The template's hero and feature images were screenshots of the *original* branded app — replaced them with fresh Playwright captures of the rebranded dashboard (light + dark). Also fixed template-broken `/auth/sign-in` links (the real routes are `/sign-in`).

## Phase 5 — Supabase auth

> Wire up REAL authentication with Supabase (@supabase/supabase-js + @supabase/ssr): browser + server clients reading NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY, middleware that refreshes the session on every request, login → signInWithPassword with inline errors, signup → signUp (store full name, handle the confirm-email case), forgot password → resetPasswordForEmail, protect the dashboard (redirect to /sign-in when logged out, and away from auth pages when logged in), working Log out in the user menu, show the signed-in user's email in the sidebar. Add .env.example; never commit .env.local.

**Notes:** Next.js 16 renamed the middleware convention to `proxy.ts` — used the new convention to keep the build warning-free. The proxy **fails closed**: with no Supabase env configured, public pages render and everything else redirects to /sign-in (verified with curl before the keys existed).

## Phase 6 — QA sweep

> Pre-deploy QA: repo-wide search for leftover original branding and lorem ipsum (must be zero); check 375/768/1280 layouts on landing and auth pages; brand the 404 page; make `pnpm lint` and `pnpm build` pass clean; confirm .env.local is gitignored.

**Notes:** `next lint` was removed in Next 16 and the template's ESLint flat-config bridge was broken — rewrote `eslint.config.mjs` to use `eslint-config-next`'s native flat exports and fixed the four real lint errors (impure `Math.random()` calls during render in the chat list and sidebar skeleton, a setState-in-effect in the fullscreen hook → `useSyncExternalStore`).

## Phase 7 — Deploy

> Push the fork to GitHub and deploy to Vercel with the two Supabase env vars; then set the production URL as Site URL + Redirect URL in Supabase Authentication → URL Configuration; finish with a smoke test on the live HTTPS URL (signup, login, logout, /dashboard redirect while logged out).

## Phase 8 — Docs

> Replace the template README with a professional Nova Analytics README (overview, stack, setup, env vars, test-user instructions, deployment steps, known limitations, MIT credit to the original template). Write SUBMISSION.md with repo URL, live URL, test credentials, and honest notes on shortcuts. Add a GitHub Actions workflow that runs lint + build on every push/PR.

---

## Extra credit shipped

- **CI/CD:** GitHub Actions (`.github/workflows/ci.yml`) runs `pnpm lint` + `pnpm build` on every push and PR; Vercel auto-deploys on push to main, so CI acts as the gate on top of CD.
- **Process transparency:** this file, plus a clean per-phase commit history.
