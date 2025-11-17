import React from 'react'
import Image from 'next/image'
import { District } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { Locale } from '@/i18n/config'

interface DistrictHeaderProps {
  district: District
  dictionary: any
  locale: Locale
}

export function DistrictHeader({ district, dictionary, locale }: DistrictHeaderProps) {
  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="relative h-96 w-full overflow-hidden rounded-2xl">
        <Image
          src={district.coverImage}
          alt={district.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {district.name}
          </h1>
          <div className="flex flex-wrap gap-2">
            {district.bestFor.map((tag, index) => (
              <Badge key={index} variant="primary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {district.population && (
          <div className="bg-white rounded-xl p-4 shadow-card">
            <div className="text-sm text-text-secondary mb-1">
              {dictionary.districts.population}
            </div>
            <div className="text-2xl font-bold text-text-primary">
              {district.population.toLocaleString()}
            </div>
          </div>
        )}
        {district.averageRent && (
          <div className="bg-white rounded-xl p-4 shadow-card">
            <div className="text-sm text-text-secondary mb-1">
              {dictionary.districts.averageRent}
            </div>
            <div className="text-2xl font-bold text-primary-600">
              ฿{district.averageRent.toLocaleString()}
            </div>
          </div>
        )}
        <div className="bg-white rounded-xl p-4 shadow-card">
          <div className="text-sm text-text-secondary mb-1">
            {dictionary.districts.attractions}
          </div>
          <div className="text-2xl font-bold text-text-primary">
            {district.attractions.length}
          </div>
        </div>
      </div>
    </div>
  )
}
