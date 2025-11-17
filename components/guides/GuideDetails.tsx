import React from 'react'
import Image from 'next/image'
import { Guide } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { formatCurrency } from '@/lib/utils'
import { Locale } from '@/i18n/config'

interface GuideDetailsProps {
  guide: Guide
  dictionary: any
  locale: Locale
  isUnlocked?: boolean
}

export function GuideDetails({ guide, dictionary, locale, isUnlocked = false }: GuideDetailsProps) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="relative h-96 w-full overflow-hidden rounded-2xl mb-6">
            <Image
              src={guide.coverImage}
              alt={guide.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mb-6">
            <Badge variant="primary" className="mb-4">
              {guide.category}
            </Badge>
            <h1 className="text-4xl font-bold text-text-primary mb-4">
              {guide.title}
            </h1>
            <p className="text-xl text-text-secondary">
              {guide.description}
            </p>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              What's Included
            </h2>
            <ul className="space-y-2">
              {guide.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            {guide.preview && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Preview
                </h2>
                <div
                  className="text-text-secondary"
                  dangerouslySetInnerHTML={{ __html: guide.preview }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card variant="island" className="sticky top-24">
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-text-secondary">Price</span>
                  <span className="text-3xl font-bold text-text-primary">
                    {guide.isPaid ? formatCurrency(guide.price) : dictionary.common.free}
                  </span>
                </div>
                {!guide.isPaid && !isUnlocked && (
                  <p className="text-sm text-text-secondary mb-4">
                    {dictionary.guides.unlockGuide}
                  </p>
                )}
              </div>

              {guide.isPaid ? (
                <Button className="w-full mb-4" variant="accent" size="lg">
                  {dictionary.guides.purchaseGuide}
                </Button>
              ) : isUnlocked ? (
                <Button className="w-full mb-4" variant="primary" size="lg">
                  {dictionary.quiz.results.downloadGuide}
                </Button>
              ) : (
                <Button
                  className="w-full mb-4"
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    if (guide.relatedQuiz) {
                      window.location.href = `/${locale}/quizzes/${guide.relatedQuiz}`
                    }
                  }}
                >
                  Take Quiz to Unlock
                </Button>
              )}

              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-text-primary mb-3">
                  Need Help?
                </h4>
                <div className="space-y-2">
                  <Button className="w-full" variant="ghost" size="sm">
                    {dictionary.quiz.results.whatsapp}
                  </Button>
                  <Button className="w-full" variant="ghost" size="sm">
                    {dictionary.quiz.results.telegram}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
