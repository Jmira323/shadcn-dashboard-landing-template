"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

type Testimonial = {
  name: string
  role: string
  quote: string
}

// Fictional customers, matching the orgs in the trusted-by carousel.
const testimonials: Testimonial[] = [
  {
    name: 'Elena Vasquez',
    role: 'VP of Growth, Helios Retail',
    quote:
      'We went from a Monday-morning spreadsheet ritual to live dashboards the whole company watches. Nova changed how we run the business — decisions that used to take a week now happen in the standup.',
  },
  {
    name: 'Marcus Cole',
    role: 'Head of Operations, Orbit Logistics',
    quote: 'The real-time alerts alone paid for Nova in the first month. We caught a billing issue before it hit a single customer.',
  },
  {
    name: 'Priya Nair',
    role: 'Data Engineer, Vega Health',
    quote:
      'Setup was genuinely fast. I connected our sources in an afternoon and had the exec dashboard our leadership had been asking about for a year live by the end of the day.',
  },
  {
    name: 'Dana Kim',
    role: 'Product Lead, Lumen Media',
    quote:
      'Custom metrics are the killer feature. We track engagement in a way that is specific to our product, and Nova handles it without a single workaround.',
  },
  {
    name: 'Sam Whitfield',
    role: 'CFO, Crestview Capital',
    quote:
      'Board reporting used to take my team three days a quarter. Now I share a live dashboard link and spend that time on the numbers themselves, not on assembling them. The export to PDF is board-meeting ready as-is.',
  },
  {
    name: 'Tomás Ibarra',
    role: 'COO, Atlas Freight',
    quote: 'Every depot manager sees the same numbers at the same time. The arguments about whose spreadsheet is right are simply gone.',
  },
  {
    name: 'Grace Osei',
    role: 'Analytics Manager, Pulse Fitness',
    quote:
      'Team workspaces with proper roles mean I can give every club access to their own metrics without exposing company-wide data. That balance was impossible with our previous tool.',
  },
  {
    name: 'Victor Chen',
    role: 'CTO, Cobalt Labs',
    quote: 'It scales. We push millions of events a day at Nova and the dashboards stay instant.',
  },
  {
    name: 'Maya Patel',
    role: 'Founder, Quantum Supply',
    quote:
      'As a non-technical founder, I finally understand my own funnel. Nova made our data legible to me, not just to our engineers, and the mobile view means I check it from anywhere.',
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container mx-auto px-8 sm:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Teams that run on Nova
          </h2>
          <p className="text-lg text-muted-foreground">
            From retail to logistics to healthcare, thousands of teams make their daily decisions on Nova Analytics dashboards.
          </p>
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="columns-1 gap-4 md:columns-2 md:gap-6 lg:columns-3 lg:gap-4">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="mb-6 break-inside-avoid shadow-none lg:mb-4">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="bg-muted size-12 shrink-0">
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium">{testimonial.name}</h3>
                    <span className="text-muted-foreground block text-sm tracking-wide">
                      {testimonial.role}
                    </span>
                  </div>
                </div>

                <blockquote className="mt-4">
                  <p className="text-sm leading-relaxed text-balance">{testimonial.quote}</p>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
