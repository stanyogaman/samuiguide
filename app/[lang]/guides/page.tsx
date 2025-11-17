import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { MainLayout } from '@/components/layout/MainLayout'
import { GuideGrid } from '@/components/guides/GuideGrid'

// Mock guides
const mockGuides = [
  {
    id: '1',
    slug: 'ultimate-samui-living-guide',
    title: 'Ultimate Guide to Living in Samui',
    description: 'Everything you need to know about relocating and living in Koh Samui.',
    coverImage: '/images/guides/living-guide.jpg',
    price: 0,
    isPaid: false,
    category: 'living' as const,
    features: ['Visa requirements', 'Healthcare', 'Cost of living', 'Best neighborhoods'],
    locale: 'en' as Locale,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
]

export default async function GuidesPage({
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
            {dictionary.guides.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Expert guides to help you make the most of your Samui experience
          </p>
        </div>

        <GuideGrid
          guides={mockGuides}
          dictionary={dictionary}
          locale={params.lang}
        />
      </div>
    </MainLayout>
  )
}
