"use client"

import { Card } from '@/components/ui/card'

// Fictional customer organizations, rendered as simple text logos.
// Keep 12 entries: the logo-scroll keyframe translates 12 items' width.
const customerOrgs = [
  { name: 'Helios Retail', initial: 'H' },
  { name: 'Orbit Logistics', initial: 'O' },
  { name: 'Vega Health', initial: 'V' },
  { name: 'Lumen Media', initial: 'L' },
  { name: 'Atlas Freight', initial: 'A' },
  { name: 'Crestview Capital', initial: 'C' },
  { name: 'Pulse Fitness', initial: 'P' },
  { name: 'Quantum Supply', initial: 'Q' },
  { name: 'Harbor & Main', initial: 'H' },
  { name: 'Northwind Travel', initial: 'N' },
  { name: 'Beacon Energy', initial: 'B' },
  { name: 'Cobalt Labs', initial: 'C' },
] as const

function TextLogo({ name, initial }: { name: string; initial: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground/80 text-background text-sm font-bold">
        {initial}
      </span>
      <span className="text-foreground text-lg font-semibold whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export function LogoCarousel() {
  return (
    <section className="pb-12 sm:pb-16 lg:pb-20 pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Trusted by data-driven teams
          </p>

          {/* Logo Carousel with Fade Effect */}
          <div className="relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            {/* Logo Container */}
            <div className="overflow-hidden">
              <div className="flex animate-logo-scroll space-x-8 sm:space-x-12">
                {/* First set of logos */}
                {customerOrgs.map((org, index) => (
                  <Card
                    key={`first-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-16 w-40 opacity-60 hover:opacity-100 transition-opacity duration-300 border-0 shadow-none bg-transparent"
                  >
                    <TextLogo name={org.name} initial={org.initial} />
                  </Card>
                ))}
                {/* Second set for seamless loop - identical to first */}
                {customerOrgs.map((org, index) => (
                  <Card
                    key={`second-${index}`}
                    className="flex-shrink-0 flex items-center justify-center h-16 w-40 opacity-60 hover:opacity-100 transition-opacity duration-300 border-0 shadow-none bg-transparent"
                  >
                    <TextLogo name={org.name} initial={org.initial} />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
