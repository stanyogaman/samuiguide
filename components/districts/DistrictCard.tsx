import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { District } from '@/types'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatCurrency } from '@/lib/utils'
import { Locale } from '@/i18n/config'

interface DistrictCardProps {
  district: District
  dictionary: any
  locale: Locale
}

export function DistrictCard({ district, dictionary, locale }: DistrictCardProps) {
  return (
    <Link href={`/${locale}/districts/${district.slug}`}>
      <Card hoverable>
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={district.coverImage}
            alt={district.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold text-text-primary mb-3">
            {district.name}
          </h3>
          <p className="text-text-secondary mb-4 line-clamp-2">
            {district.description}
          </p>

          {district.averageRent && (
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-text-secondary">
                {dictionary.districts.averageRent}
              </span>
              <span className="font-semibold text-primary-600">
                {formatCurrency(district.averageRent, 'THB')}
              </span>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {district.bestFor.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="primary" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
