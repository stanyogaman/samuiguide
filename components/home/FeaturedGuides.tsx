import React from 'react'
import Link from 'next/link'
import { Guide } from '@/types'
import { GuideCard } from '@/components/guides/GuideCard'
import { Button } from '@/components/ui/Button'
import { Locale } from '@/i18n/config'

interface FeaturedGuidesProps {
  guides: Guide[]
  dictionary: any
  locale: Locale
}

export function FeaturedGuides({ guides, dictionary, locale }: FeaturedGuidesProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {dictionary.home.featured.title}
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {dictionary.home.featured.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {guides.slice(0, 3).map((guide) => (
          <GuideCard key={guide.id} guide={guide} dictionary={dictionary} locale={locale} />
        ))}
      </div>

      <div className="text-center">
        <Link href={`/${locale}/guides`}>
          <Button variant="outline" size="lg">
            {dictionary.common.learnMore}
          </Button>
        </Link>
      </div>
    </section>
  )
}
