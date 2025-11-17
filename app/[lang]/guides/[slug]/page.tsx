import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { MainLayout } from '@/components/layout/MainLayout'
import { GuideDetails } from '@/components/guides/GuideDetails'
import { notFound } from 'next/navigation'

const mockGuide = {
  id: '1',
  slug: 'ultimate-samui-living-guide',
  title: 'Ultimate Guide to Living in Samui',
  description: 'Everything you need to know about relocating and living in Koh Samui, from visas to healthcare.',
  coverImage: '/images/guides/living-guide.jpg',
  price: 0,
  isPaid: false,
  category: 'living' as const,
  relatedQuiz: 'where-to-live',
  features: [
    'Complete visa requirements and application process',
    'Healthcare system overview and insurance options',
    'Detailed cost of living breakdown by district',
    'Best neighborhoods for different lifestyles',
    'School and education options',
    'Banking and financial services',
    'Transportation guide',
    'Cultural adaptation tips',
  ],
  preview: '<p>In this comprehensive guide, you\'ll learn everything about making Samui your home...</p>',
  locale: 'en' as Locale,
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
}

export default async function GuideDetailPage({
  params,
}: {
  params: { lang: Locale; slug: string }
}) {
  const dictionary = await getDictionary(params.lang)

  if (!mockGuide) {
    notFound()
  }

  return (
    <MainLayout locale={params.lang}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GuideDetails
          guide={mockGuide}
          dictionary={dictionary}
          locale={params.lang}
          isUnlocked={false}
        />
      </div>
    </MainLayout>
  )
}
