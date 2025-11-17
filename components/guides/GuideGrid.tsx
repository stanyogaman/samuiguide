import React from 'react'
import { Guide } from '@/types'
import { GuideCard } from './GuideCard'
import { Locale } from '@/i18n/config'

interface GuideGridProps {
  guides: Guide[]
  dictionary: any
  locale: Locale
}

export function GuideGrid({ guides, dictionary, locale }: GuideGridProps) {
  if (guides.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary">No guides found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {guides.map((guide) => (
        <GuideCard
          key={guide.id}
          guide={guide}
          dictionary={dictionary}
          locale={locale}
        />
      ))}
    </div>
  )
}
