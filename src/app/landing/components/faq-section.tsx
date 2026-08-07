"use client"

import { CircleHelp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'

type FaqItem = {
  value: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    value: 'item-1',
    question: 'How long does it take to set up Nova Analytics?',
    answer:
      'Most teams see their first live dashboard within an hour. Create a workspace, connect a data source, and Nova suggests starter dashboards based on what it finds. No SQL or engineering time is required to get going, though power users can go as deep as they like.',
  },
  {
    value: 'item-2',
    question: 'Which data sources can I connect?',
    answer:
      'Nova connects to the tools growing companies already use: product event streams, billing providers like Stripe, ad platforms, CRMs, and data warehouses such as Postgres, BigQuery, and Snowflake. The Starter plan includes core integrations; Growth and Scale unlock the full catalog.',
  },
  {
    value: 'item-3',
    question: 'Is there a free plan?',
    answer:
      'Yes. The Starter plan is free forever and includes up to 3 dashboards and 2 team members — enough to run a small team on real numbers. Paid plans start with a 14-day free trial, and no credit card is required to try them.',
  },
  {
    value: 'item-4',
    question: 'How does Nova handle security and privacy?',
    answer:
      'Your data is encrypted in transit (TLS 1.3) and at rest (AES-256). Workspaces support role-based access so people only see what they should, and the Scale plan adds SSO/SAML. We never sell or share your data.',
  },
  {
    value: 'item-5',
    question: 'Can I share dashboards with people outside my team?',
    answer:
      'Yes. Any dashboard can be exported to CSV or PDF, or shared as a read-only live link — handy for board updates, investors, or client reporting. You control link access and can revoke it at any time.',
  },
  {
    value: 'item-6',
    question: 'What happens if I outgrow my plan?',
    answer:
      'Upgrade at any time from Plans & Billing and the change takes effect immediately; downgrades apply at the next billing cycle so you never lose access mid-month. Annual billing saves 20% on every paid plan.',
  },
]

const FaqSection = () => {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Nova Analytics — setup, integrations, plans, and security. Still have questions? We&apos;re here to help!
          </p>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className='bg-transparent'>
            <div className='p-0'>
              <Accordion type='single' collapsible className='space-y-5'>
                {faqItems.map(item => (
                  <AccordionItem key={item.value} value={item.value} className='rounded-md !border bg-transparent'>
                    <AccordionTrigger className='cursor-pointer items-center gap-4 rounded-none bg-transparent py-2 ps-3 pe-4 hover:no-underline data-[state=open]:border-b'>
                      <div className='flex items-center gap-4'>
                        <div className='bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full'>
                          <CircleHelp className='size-5' />
                        </div>
                        <span className='text-start font-semibold'>{item.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className='p-4 bg-transparent'>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We&apos;re here to help.
            </p>
            <Button className='cursor-pointer' asChild>
              <a href="mailto:support@novaanalytics.io">
                Contact support
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { FaqSection }
