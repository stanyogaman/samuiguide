import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { MainLayout } from '@/components/layout/MainLayout'
import { HeroBanner } from '@/components/home/HeroBanner'
import { MapWidget } from '@/components/home/MapWidget'
import { FeaturedGuides } from '@/components/home/FeaturedGuides'
import { PopularQuizzes } from '@/components/home/PopularQuizzes'
import { LatestArticles } from '@/components/home/LatestArticles'

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

const mockArticles = [
  {
    id: '1',
    slug: 'best-time-visit-samui',
    title: 'When is the Best Time to Visit Koh Samui?',
    excerpt: 'Discover the optimal seasons for visiting Samui based on weather, crowds, and prices.',
    content: '<p>Full article content here...</p>',
    coverImage: '/images/blog/best-time.jpg',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Samui resident for 10 years',
    },
    category: 'Travel Tips',
    tags: ['weather', 'planning', 'seasons'],
    readTime: 5,
    publishedAt: '2024-01-15',
    locale: 'en' as Locale,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  {
    id: '2',
    slug: 'samui-food-scene-2024',
    title: 'Samui Food Scene: Top Restaurants in 2024',
    excerpt: 'Explore the island\'s culinary landscape with our guide to the best dining experiences.',
    content: '<p>Full article content here...</p>',
    coverImage: '/images/blog/food-scene.jpg',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Samui resident for 10 years',
    },
    category: 'Food & Dining',
    tags: ['restaurants', 'food', 'dining'],
    readTime: 8,
    publishedAt: '2024-01-10',
    locale: 'en' as Locale,
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10',
  },
  {
    id: '3',
    slug: 'digital-nomad-samui',
    title: 'Digital Nomad Life in Samui: A Complete Guide',
    excerpt: 'Everything remote workers need to know about working from this tropical paradise.',
    content: '<p>Full article content here...</p>',
    coverImage: '/images/blog/digital-nomad.jpg',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Samui resident for 10 years',
    },
    category: 'Living',
    tags: ['digital nomad', 'remote work', 'internet'],
    readTime: 10,
    publishedAt: '2024-01-05',
    locale: 'en' as Locale,
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05',
  },
]

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
