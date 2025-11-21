import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { MainLayout } from '@/components/layout/MainLayout'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export default async function HomePage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <MainLayout locale={params.lang}>
      {/* Hero Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-32 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <Badge variant="secondary" className="mb-4 inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                #1 Samui Guide
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                {dictionary.home.hero.title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0">
                {dictionary.home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link href={`/${params.lang}/guides`} className="w-full sm:w-auto">
                  <Button size="lg" variant="secondary" className="w-full">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {dictionary.home.hero.cta}
                  </Button>
                </Link>
                <Link href={`/${params.lang}/quizzes`} className="w-full sm:w-auto">
                  <Button size="lg" variant="accent" className="w-full">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    {dictionary.home.hero.ctaSecondary}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop"
                  alt="Koh Samui Beach"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-text-primary">10K+</p>
                    <p className="text-sm text-text-secondary">Happy Visitors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H0V0Z" fill="#fafaf8" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Everything You Need for Samui
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Whether you're visiting, relocating, or investing
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {[
            { icon: '📚', title: 'Expert Guides', desc: 'Local expert knowledge', href: `/${params.lang}/guides`, color: 'bg-primary-500' },
            { icon: '✅', title: 'Smart Quizzes', desc: 'Personalized tips', href: `/${params.lang}/quizzes`, color: 'bg-accent-500' },
            { icon: '🗺️', title: 'Districts', desc: 'Find your area', href: `/${params.lang}/districts`, color: 'bg-secondary-500' },
            { icon: '📝', title: 'Blog', desc: 'Latest news', href: `/${params.lang}/blog`, color: 'bg-green-500' },
          ].map((feature, i) => (
            <Link key={i} href={feature.href}>
              <Card hoverable className="h-full">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl mx-auto mb-3 sm:mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-sm sm:text-lg font-bold text-text-primary mb-1">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary hidden sm:block">{feature.desc}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quizzes Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              {dictionary.home.quizzes.title}
            </h2>
            <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
              {dictionary.home.quizzes.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { title: 'Where to Live?', desc: 'Find your perfect district', slug: 'where-to-live', time: '5 min', icon: '🏡', gradient: 'from-primary-500 to-primary-600' },
              { title: 'Should You Invest?', desc: 'Property investment guide', slug: 'should-you-invest', time: '7 min', icon: '💰', gradient: 'from-accent-500 to-accent-600' },
              { title: 'Villa Safety Check', desc: 'Identify red flags', slug: 'villa-safety-check', time: '4 min', icon: '🔒', gradient: 'from-secondary-500 to-secondary-600' },
            ].map((quiz, i) => (
              <Card key={i} hoverable variant="island">
                <CardContent className="p-5 sm:p-6 lg:p-8">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${quiz.gradient} flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6`}>
                    {quiz.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2">{quiz.title}</h3>
                  <p className="text-sm text-text-secondary mb-4 sm:mb-6">{quiz.desc}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="primary" size="sm">{quiz.time}</Badge>
                    <Link href={`/${params.lang}/quizzes/${quiz.slug}`}>
                      <Button variant="primary" size="sm">
                        Start
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Districts Section */}
      <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Explore Samui Districts
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Each district has its unique character
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {[
            { name: 'Chaweng', type: 'Vibrant', image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=400&h=300&fit=crop', slug: 'chaweng' },
            { name: 'Lamai', type: 'Relaxed', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop', slug: 'lamai' },
            { name: 'Mae Nam', type: 'Family', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&h=300&fit=crop', slug: 'mae-nam' },
            { name: 'Bophut', type: 'Charming', image: 'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?w=400&h=300&fit=crop', slug: 'bophut' },
          ].map((district, i) => (
            <Link key={i} href={`/${params.lang}/districts/${district.slug}`}>
              <Card hoverable className="overflow-hidden">
                <div className="relative h-28 sm:h-40">
                  <Image src={district.image} alt={district.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                    <h3 className="text-sm sm:text-xl font-bold text-white">{district.name}</h3>
                    <p className="text-xs sm:text-sm text-white/80">{district.type}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <Link href={`/${params.lang}/districts`}>
            <Button variant="outline" size="lg">
              View All Districts
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4">
            Ready to Discover Your Perfect Samui?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8">
            Take our quick quiz and get personalized recommendations
          </p>
          <Link href={`/${params.lang}/quizzes/where-to-live`}>
            <Button size="lg" variant="secondary">
              Take the Quiz - It's Free
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        </div>
      </section>
    </MainLayout>
  )
}
