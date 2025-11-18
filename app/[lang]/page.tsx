import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { MainLayout } from '@/components/layout/MainLayout'
import { HeroBanner } from '@/components/home/HeroBanner'
import { MapWidget } from '@/components/home/MapWidget'
import { FeaturedGuides } from '@/components/home/FeaturedGuides'
import { PopularQuizzes } from '@/components/home/PopularQuizzes'
import { LatestArticles } from '@/components/home/LatestArticles'
import { mockArticles } from '@/data/mockArticles'

// Mock data - in production, fetch from API
const mockGuides = [
  {
    id: '1',
    slug: 'ultimate-samui-living-guide',
    title: 'Ultimate Guide to Living in Samui',
    description: 'Everything you need to know about relocating and living in Koh Samui, from visas to healthcare.',
    coverImage: '/images/guides/living-guide.jpg',
    price: 0,
    isPaid: false,
    category: 'living' as const,
    features: ['Visa requirements', 'Healthcare options', 'Cost of living breakdown', 'Best neighborhoods'],
    locale: 'en' as Locale,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: '2',
    slug: 'property-investment-guide',
    title: 'Samui Property Investment Guide',
    description: 'Expert insights on investing in Koh Samui real estate and maximizing your returns.',
    coverImage: '/images/guides/investment-guide.jpg',
    price: 2900,
    isPaid: true,
    category: 'investing' as const,
    features: ['Market analysis', 'ROI calculations', 'Legal requirements', 'Best areas to invest'],
    locale: 'en' as Locale,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: '3',
    slug: 'beach-hopping-guide',
    title: 'Complete Beach Hopping Guide',
    description: 'Discover all of Samui\'s stunning beaches, from hidden coves to popular shores.',
    coverImage: '/images/guides/beach-guide.jpg',
    price: 0,
    isPaid: false,
    category: 'travel' as const,
    relatedQuiz: 'where-to-live',
    features: ['30+ beaches covered', 'Best times to visit', 'Activities & amenities', 'Insider tips'],
    locale: 'en' as Locale,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
]

// Note: mockArticles is now imported from @/data/mockArticles

export default async function HomePage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <MainLayout locale={params.lang}>
      <HeroBanner dictionary={dictionary} locale={params.lang} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <FeaturedGuides
              guides={mockGuides}
              dictionary={dictionary}
              locale={params.lang}
            />
          </div>
          <div>
            <MapWidget locale={params.lang} />
          </div>
        </div>
      </div>

      <PopularQuizzes dictionary={dictionary} locale={params.lang} />
      <LatestArticles
        articles={mockArticles}
        dictionary={dictionary}
        locale={params.lang}
      />
    </MainLayout>
  )
}
