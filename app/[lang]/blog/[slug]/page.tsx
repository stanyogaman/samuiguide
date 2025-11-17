import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { MainLayout } from '@/components/layout/MainLayout'
import { ArticleContent } from '@/components/blog/ArticleContent'
import { notFound } from 'next/navigation'

// Mock article data
const mockArticle = {
  id: '1',
  slug: 'best-time-visit-samui',
  title: 'When is the Best Time to Visit Koh Samui?',
  excerpt: 'Discover the optimal seasons for visiting Samui based on weather, crowds, and prices.',
  content: `
    <p>Koh Samui, Thailand's second-largest island, is a year-round destination, but choosing the right time to visit can make a significant difference in your experience.</p>

    <h2>Peak Season (December - February)</h2>
    <p>This is the most popular time to visit Samui, with perfect weather conditions...</p>

    <h2>Shoulder Season (March - June)</h2>
    <p>The shoulder months offer a great balance of good weather and fewer crowds...</p>

    <h2>Green Season (July - November)</h2>
    <p>While this is technically the rainy season, Samui's weather patterns are unique...</p>
  `,
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
}

export default async function BlogArticlePage({
  params,
}: {
  params: { lang: Locale; slug: string }
}) {
  const dictionary = await getDictionary(params.lang)

  // In production, fetch article by slug from API
  // const article = await api.blog.getBySlug(params.slug, params.lang)

  if (!mockArticle) {
    notFound()
  }

  return (
    <MainLayout locale={params.lang}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ArticleContent
          article={mockArticle}
          dictionary={dictionary}
          locale={params.lang}
        />
      </div>
    </MainLayout>
  )
}
