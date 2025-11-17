'use client'

import React, { useState } from 'react'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import { Locale } from '@/i18n/config'

interface MapWidgetProps {
  locale: Locale
}

interface District {
  id: string
  name: string
  slug: string
  coordinates: { x: number; y: number }
  color: string
}

export function MapWidget({ locale }: MapWidgetProps) {
  const [activeDistrict, setActiveDistrict] = useState<string | null>(null)

  // Simplified district data for map display
  const districts: District[] = [
    { id: '1', name: 'Chaweng', slug: 'chaweng', coordinates: { x: 60, y: 40 }, color: '#00bfbf' },
    { id: '2', name: 'Lamai', slug: 'lamai', coordinates: { x: 65, y: 60 }, color: '#ff5a47' },
    { id: '3', name: 'Mae Nam', slug: 'mae-nam', coordinates: { x: 35, y: 30 }, color: '#c9ab7e' },
    { id: '4', name: 'Bophut', slug: 'bophut', coordinates: { x: 45, y: 25 }, color: '#00a6a6' },
    { id: '5', name: 'Maenam', slug: 'maenam', coordinates: { x: 30, y: 35 }, color: '#ff7e6e' },
  ]

  return (
    <Card className="p-6">
      <h3 className="text-2xl font-bold text-text-primary mb-6">Explore Samui Districts</h3>
      <div className="relative aspect-square max-w-md mx-auto">
        {/* Simplified island shape */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
        >
          {/* Island outline */}
          <ellipse
            cx="50"
            cy="50"
            rx="40"
            ry="35"
            fill="#e6f9f9"
            stroke="#00bfbf"
            strokeWidth="0.5"
          />

          {/* District markers */}
          {districts.map((district) => (
            <g key={district.id}>
              <circle
                cx={district.coordinates.x}
                cy={district.coordinates.y}
                r={activeDistrict === district.id ? '5' : '3'}
                fill={district.color}
                className="cursor-pointer transition-all duration-200 hover:r-5"
                onMouseEnter={() => setActiveDistrict(district.id)}
                onMouseLeave={() => setActiveDistrict(null)}
              />
              {activeDistrict === district.id && (
                <text
                  x={district.coordinates.x}
                  y={district.coordinates.y - 8}
                  textAnchor="middle"
                  className="text-xs font-semibold fill-text-primary"
                >
                  {district.name}
                </text>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* District List */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {districts.map((district) => (
          <Link
            key={district.id}
            href={`/${locale}/districts/${district.slug}`}
            className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
            onMouseEnter={() => setActiveDistrict(district.id)}
            onMouseLeave={() => setActiveDistrict(null)}
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: district.color }}
            />
            <span className="text-sm font-medium text-text-primary">
              {district.name}
            </span>
          </Link>
        ))}
      </div>
    </Card>
  )
}
