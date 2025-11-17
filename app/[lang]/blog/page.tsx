import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { MainLayout } from '@/components/layout/MainLayout'
import { ArticleList } from '@/components/blog/ArticleList'
import { Tabs } from '@/components/ui/Tabs'

// Mock data
const mockArticles = [
  {
    id: '1',
    slug: 'best-time-visit-samui',
    title: 'When is the Best Time to Visit Koh Samui?',
    excerpt: 'Discover the optimal seasons for visiting Samui based on weather, crowds, and prices.',
    content: '<p>Full article content...</p>',
    coverImage: '/images/blog/best-time.jpg',
    author: {
      id: '1',
      name: 'Sarah Johnson',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Samui resident for 10 years',
    },
    category: 'Travel Tips',
    tags: ['weather', 'planning'],
    readTime: 5,
    publishedAt: '2024-01-15',
    locale: 'en' as Locale,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
]

export default async function BlogPage({
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
            {dictionary.blog.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Stay updated with the latest news, tips, and insights about Koh Samui
          </p>
        </div>

        <ArticleList
          articles={mockArticles}
          dictionary={dictionary}
          locale={params.lang}
        />
      </div>
    </MainLayout>
  )
}
