import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { MainLayout } from '@/components/layout/MainLayout'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const quizzes = [
  {
    id: '1',
    slug: 'where-to-live',
    title: 'Where Should You Live on Samui?',
    description: 'Find the perfect district that matches your lifestyle and preferences',
    estimatedTime: 5,
    icon: '🏡',
    color: 'from-primary-500 to-primary-600',
  },
  {
    id: '2',
    slug: 'should-you-invest',
    title: 'Should You Invest in Samui Property?',
    description: 'Discover if property investment in Samui aligns with your goals',
    estimatedTime: 7,
    icon: '💰',
    color: 'from-accent-500 to-accent-600',
  },
  {
    id: '3',
    slug: 'villa-safety-check',
    title: 'Is This Villa Safe to Rent?',
    description: 'Learn to identify red flags and ensure a safe rental experience',
    estimatedTime: 4,
    icon: '🔒',
    color: 'from-secondary-500 to-secondary-600',
  },
]

export default async function QuizzesPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <MainLayout locale={params.lang}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Discover Your Perfect Samui Match
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Take our interactive quizzes to unlock personalized recommendations and free guides
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} hoverable variant="island">
              <CardContent className="p-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${quiz.color} flex items-center justify-center text-4xl mb-6`}>
                  {quiz.icon}
                </div>
                <h2 className="text-2xl font-bold text-text-primary mb-3">
                  {quiz.title}
                </h2>
                <p className="text-text-secondary mb-6">
                  {quiz.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <Badge variant="primary">{quiz.estimatedTime} min</Badge>
                </div>
                <Link href={`/${params.lang}/quizzes/${quiz.slug}`}>
                  <Button className="w-full" variant="primary" size="lg">
                    Start Quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
