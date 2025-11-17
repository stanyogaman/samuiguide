import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { MainLayout } from '@/components/layout/MainLayout'
import { DistrictHeader } from '@/components/districts/DistrictHeader'
import { Card, CardContent } from '@/components/ui/Card'

const mockDistrict = {
  id: '1',
  slug: 'chaweng',
  name: 'Chaweng',
  description: 'The island\'s most popular beach destination with vibrant nightlife, excellent shopping, and a wide range of dining options.',
  coverImage: '/images/districts/chaweng.jpg',
  images: [],
  locale: 'en' as Locale,
  population: 25000,
  averageRent: 15000,
  attractions: [
    'Chaweng Beach - 7km of white sand',
    'Central Festival Shopping Mall',
    'Ark Bar Beach Club',
    'Chaweng Walking Street',
    'Green Mango nightclub',
  ],
  bestFor: ['Nightlife', 'Shopping', 'Dining', 'Water Sports'],
  coordinates: { lat: 9.5379, lng: 100.0629 },
  createdAt: '2024-01-01',
  updatedAt: '2024-01-01',
}

export default async function DistrictPage({
  params,
}: {
  params: { lang: Locale; slug: string }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <MainLayout locale={params.lang}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <DistrictHeader
          district={mockDistrict}
          dictionary={dictionary}
          locale={params.lang}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  About {mockDistrict.name}
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {mockDistrict.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  {dictionary.districts.attractions}
                </h2>
                <ul className="space-y-3">
                  {mockDistrict.attractions.map((attraction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-text-secondary">{attraction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card variant="island" className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold text-text-primary mb-4">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-text-secondary mb-1">Type</div>
                    <div className="font-medium text-text-primary">Beach Town</div>
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-1">Vibe</div>
                    <div className="font-medium text-text-primary">Vibrant & Touristy</div>
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-1">Best Time</div>
                    <div className="font-medium text-text-primary">Dec - Aug</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
