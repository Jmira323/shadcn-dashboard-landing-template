import type { Metadata } from 'next'
import { LandingPageContent } from './landing/landing-page-content'

export const metadata: Metadata = {
  title: 'Nova Analytics — See your data in a new light',
  description: 'Nova Analytics turns raw product and revenue data into clear, real-time dashboards your whole team can act on.',
  keywords: ['analytics', 'dashboards', 'real-time metrics', 'business intelligence', 'data visualization'],
  openGraph: {
    title: 'Nova Analytics — See your data in a new light',
    description: 'Nova Analytics turns raw product and revenue data into clear, real-time dashboards your whole team can act on.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nova Analytics — See your data in a new light',
    description: 'Nova Analytics turns raw product and revenue data into clear, real-time dashboards your whole team can act on.',
  },
}

export default function HomePage() {
  return <LandingPageContent />
}
