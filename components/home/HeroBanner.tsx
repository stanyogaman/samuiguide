import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Locale } from '@/i18n/config'

interface HeroBannerProps {
  dictionary: any
  locale: Locale
}

export function HeroBanner({ dictionary, locale }: HeroBannerProps) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-tropical-gradient opacity-90" />
      <div className="absolute inset-0 bg-[url('/images/samui-hero.jpg')] bg-cover bg-center mix-blend-overlay opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {dictionary.home.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          {dictionary.home.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}/guides`}>
            <Button size="lg" variant="secondary">
              {dictionary.home.hero.cta}
            </Button>
          </Link>
          <Link href={`/${locale}/quizzes`}>
            <Button size="lg" variant="accent">
              {dictionary.home.hero.ctaSecondary}
            </Button>
          </Link>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
