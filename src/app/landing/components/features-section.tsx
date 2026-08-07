"use client"

import {
  BarChart3,
  Bell,
  Users,
  ArrowRight,
  Database,
  Share2,
  Target,
  Layout,
  ShieldCheck
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Image3D } from '@/components/image-3d'

const mainFeatures = [
  {
    icon: BarChart3,
    title: 'Real-time dashboards',
    description: 'Metrics stream in live, so decisions never wait on a nightly batch job.'
  },
  {
    icon: Target,
    title: 'Custom metrics',
    description: 'Define the KPIs that match how your business actually runs.'
  },
  {
    icon: Bell,
    title: 'Smart alerts',
    description: 'Get notified the moment a metric moves, before it becomes a problem.'
  },
  {
    icon: Share2,
    title: 'Export & share',
    description: 'One-click reports as CSV or PDF, or share a live dashboard link.'
  }
]

const secondaryFeatures = [
  {
    icon: Users,
    title: 'Team workspaces',
    description: 'Shared spaces with roles and permissions for your whole organization.'
  },
  {
    icon: Database,
    title: 'Integrations',
    description: 'Connect product, billing, and marketing data sources in minutes.'
  },
  {
    icon: Layout,
    title: 'Works everywhere',
    description: 'Every dashboard is responsive and reads beautifully on any device.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    description: 'Your data is encrypted in transit and at rest, with fine-grained access.'
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Product</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything you need to act on your data
          </h2>
          <p className="text-lg text-muted-foreground">
            Nova Analytics brings your product and revenue metrics into one clear, real-time view — from first signup to board report.
          </p>
        </div>

        {/* First Feature Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-24">
          {/* Left Image */}
          <Image3D
            lightSrc="/feature-1-light.png"
            darkSrc="/feature-1-dark.png"
            alt="Nova Analytics dashboard with real-time metrics"
            direction="left"
          />
          {/* Right Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                From raw events to clear answers
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                Point Nova at your data and get dashboards your whole team can read at a glance. Track revenue, activation, retention, and the metrics unique to your product.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer" asChild>
                <Link href="/sign-up" className="flex items-center">
                  Get started
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                <a href="#pricing">
                  View pricing
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Second Feature Section - Flipped Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
                Built for the whole team
              </h3>
              <p className="text-muted-foreground text-base text-pretty">
                Analytics only matter when everyone can see them. Nova keeps your team in one workspace, with the access controls and integrations a growing company needs.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {secondaryFeatures.map((feature, index) => (
                <li key={index} className="group hover:bg-accent/5 flex items-start gap-3 p-2 rounded-lg transition-colors">
                  <div className="mt-0.5 flex shrink-0 items-center justify-center">
                    <feature.icon className="size-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium">{feature.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pe-4 pt-2">
              <Button size="lg" className="cursor-pointer" asChild>
                <Link href="/sign-up" className="flex items-center">
                  Create your workspace
                  <ArrowRight className="ms-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="cursor-pointer" asChild>
                <Link href="/sign-in">
                  Log in
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <Image3D
            lightSrc="/feature-2-light.png"
            darkSrc="/feature-2-dark.png"
            alt="Nova Analytics team workspace"
            direction="right"
            className="order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  )
}
