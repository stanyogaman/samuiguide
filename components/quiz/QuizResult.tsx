import React from 'react'
import Image from 'next/image'
import { QuizResult as QuizResultType } from '@/types'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { GuideCard } from '@/components/guides/GuideCard'
import { QuizCTA } from './QuizCTA'
import { Locale } from '@/i18n/config'

interface QuizResultProps {
  result: QuizResultType
  dictionary: any
  locale: Locale
}

export function QuizResult({ result, dictionary, locale }: QuizResultProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-text-primary mb-4">
          {dictionary.quiz.results.title}
        </h1>
      </div>

      {/* Segment */}
      <Card variant="island" className="mb-8">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            {dictionary.quiz.results.yourSegment}
          </h2>
          <Badge variant="primary" size="lg" className="text-lg px-6 py-2 mb-4">
            {result.segment.charAt(0).toUpperCase() + result.segment.slice(1)}
          </Badge>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {result.description}
          </p>
        </CardContent>
      </Card>

      {/* Recommended Guide */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-6">
          {dictionary.quiz.results.recommended}
        </h2>
        <GuideCard
          guide={result.recommendedGuide}
          dictionary={dictionary}
          locale={locale}
        />
      </div>

      {/* Recommended Districts */}
      {result.recommendedDistricts && result.recommendedDistricts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Recommended Districts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.recommendedDistricts.map((district) => (
              <Card key={district.id} hoverable>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={district.coverImage}
                        alt={district.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-primary">
                        {district.name}
                      </h3>
                      <p className="text-sm text-text-secondary line-clamp-2">
                        {district.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* CTA Buttons */}
      <QuizCTA dictionary={dictionary} locale={locale} result={result} />
    </div>
  )
}
