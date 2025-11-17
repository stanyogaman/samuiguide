import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Guide } from '@/types'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatCurrency } from '@/lib/utils'
import { Locale } from '@/i18n/config'

interface GuideCardProps {
  guide: Guide
  dictionary: any
  locale: Locale
}

export function GuideCard({ guide, dictionary, locale }: GuideCardProps) {
  return (
    <Card hoverable>
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={guide.coverImage}
          alt={guide.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 right-4">
          {guide.isPaid ? (
            <Badge variant="accent">{formatCurrency(guide.price)}</Badge>
          ) : (
            <Badge variant="success">{dictionary.common.free}</Badge>
          )}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">
          {guide.title}
        </h3>
        <p className="text-text-secondary mb-4 line-clamp-3">
          {guide.description}
        </p>
        <div className="mb-4">
          {guide.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-text-secondary mb-1">
              <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <Link href={`/${locale}/guides/${guide.slug}`}>
          <Button className="w-full" variant={guide.isPaid ? 'accent' : 'primary'}>
            {guide.isPaid ? dictionary.guides.purchaseGuide : dictionary.common.learnMore}
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
