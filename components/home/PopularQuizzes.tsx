import React from 'react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Locale } from '@/i18n/config'

interface PopularQuizzesProps {
  dictionary: any
  locale: Locale
}

export function PopularQuizzes({ dictionary, locale }: PopularQuizzesProps) {
  const quizzes = [
    {
      id: '1',
      title: 'Where Should You Live on Samui?',
      description: 'Find the perfect district that matches your lifestyle and preferences',
      slug: 'where-to-live',
      estimatedTime: 5,
      color: 'from-primary-500 to-primary-600',
      icon: '🏡',
    },
    {
      id: '2',
      title: 'Should You Invest in Samui Property?',
      description: 'Discover if property investment in Samui aligns with your goals',
      slug: 'should-you-invest',
      estimatedTime: 7,
      color: 'from-accent-500 to-accent-600',
      icon: '💰',
    },
    {
      id: '3',
      title: 'Is This Villa Safe to Rent?',
      description: 'Learn to identify red flags and ensure a safe rental experience',
      slug: 'villa-safety-check',
      estimatedTime: 4,
      color: 'from-secondary-500 to-secondary-600',
      icon: '🔒',
    },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-sand-gradient">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
          {dictionary.home.quizzes.title}
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {dictionary.home.quizzes.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} hoverable variant="island">
            <CardContent className="p-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${quiz.color} flex items-center justify-center text-3xl mb-4`}>
                {quiz.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-2">
                {quiz.title}
              </h3>
              <p className="text-text-secondary mb-4">
                {quiz.description}
              </p>
              <div className="flex items-center justify-between mb-6">
                <Badge variant="primary" size="sm">
                  {quiz.estimatedTime} min
                </Badge>
              </div>
              <Link href={`/${locale}/quizzes/${quiz.slug}`}>
                <Button className="w-full" variant="primary">
                  {dictionary.common.getStarted}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link href={`/${locale}/quizzes`}>
          <Button variant="outline" size="lg">
            View All Quizzes
          </Button>
        </Link>
      </div>
    </section>
  )
}
