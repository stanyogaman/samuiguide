import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { MainLayout } from '@/components/layout/MainLayout'
import { DistrictCard } from '@/components/districts/DistrictCard'

const mockDistricts = [
  {
    id: '1',
    slug: 'chaweng',
    name: 'Chaweng',
    description: 'The island\'s most popular beach destination with vibrant nightlife and shopping.',
    coverImage: '/images/districts/chaweng.jpg',
    images: [],
    locale: 'en' as Locale,
    population: 25000,
    averageRent: 15000,
    attractions: ['Chaweng Beach', 'Central Festival', 'Ark Bar'],
    bestFor: ['Nightlife', 'Shopping', 'Dining'],
    coordinates: { lat: 9.5379, lng: 100.0629 },
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
  {
    id: '2',
    slug: 'lamai',
    name: 'Lamai',
    description: 'A more relaxed alternative to Chaweng with a beautiful beach and local charm.',
    coverImage: '/images/districts/lamai.jpg',
    images: [],
    locale: 'en' as Locale,
    population: 15000,
    averageRent: 12000,
    attractions: ['Lamai Beach', 'Grandfather & Grandmother Rocks', 'Hin Ta Hin Yai'],
    bestFor: ['Families', 'Relaxation', 'Local Culture'],
    coordinates: { lat: 9.4647, lng: 100.0407 },
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
  },
]

export default async function DistrictsPage({
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
            {dictionary.districts.title}
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover Koh Samui's unique districts and find your perfect location
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockDistricts.map((district) => (
            <DistrictCard
              key={district.id}
              district={district}
              dictionary={dictionary}
              locale={params.lang}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}
