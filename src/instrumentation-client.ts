import posthog from "posthog-js"

// Privacy-friendly product analytics. Initialized only when a PostHog key is
// configured, so the app runs identically without one. The 2025-05-24 defaults
// capture pageviews automatically, including SPA route changes.
const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    defaults: "2025-05-24",
  })
}
