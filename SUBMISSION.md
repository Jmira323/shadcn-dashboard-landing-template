# Submission — AI Agent Engineer Trial (Nova Analytics)

**Candidate:** Juan Carlos Miranda

## Links

- **GitHub repository (public fork):** https://github.com/Jmira323/shadcn-dashboard-landing-template
- **Live deployment (HTTPS):** https://nova-analytics-khaki.vercel.app
- **Video walkthrough:** _link to be added_

## Test credentials

- **Email:** `admin@novaanalytics.io`
- **Password:** `NovaDemo2026!`

(Demo-only account on a fictional-brand Supabase project with no real data.) Reviewers can also create their own account via the signup form — new signups receive a Supabase confirmation email before their first login.

## What was built

- Forked the MIT-licensed `shadcnstore/shadcn-dashboard-landing-template` and flattened it to a single Next.js 16 App Router app.
- Whitelabeled every surface as **Nova Analytics** (fictional client): name, logo + favicon (custom SVG mark), metadata/OG tags, footer credits, sample data, and a violet/aqua brand palette applied through the shadcn CSS tokens in light and dark mode. No original branding remains in the visible UI.
- Rebuilt the landing page at `/` as a Nova product page (hero with brand tagline, features, pricing, testimonials with fictional customers, FAQ, CTA band) with working CTAs into the auth flow.
- Wired **real authentication with Supabase** (email/password): signup, login, logout, password-reset email, per-request session refresh, and route protection (visiting any dashboard page logged out redirects to `/sign-in`; logging in lands on `/dashboard`).
- Deployed to Vercel with automatic HTTPS; CI (GitHub Actions) runs lint + build on every push.

## Honest notes — shortcuts taken / known limitations

- **Dashboard data is mock data.** The dashboards, mail/chat/tasks apps, and metrics are the template's sample data rebranded for Nova. Connecting real data sources was out of scope for the trial window.
- **Auth is email/password only.** No OAuth providers or MFA; password change in-app is not wired (reset works via email link).
- **Email confirmation is disabled** in Supabase so reviewers can sign up without a mailbox round-trip. In production I would re-enable it.
- **No E2E test suite yet.** CI covers lint + type-safe build; with more time I'd add Playwright tests for the auth happy paths (signup → dashboard, logout, protected-route redirect) and run them in CI.
- **Settings/billing pages are UI-only.** They render but don't persist changes.

## Process

The entire build was driven with Claude Code, in phases with a commit per phase — see [`PROMPTS.md`](PROMPTS.md) for the prompt sequence, and the git history for the step-by-step diffs. The behavioral questionnaire is submitted separately as requested.
