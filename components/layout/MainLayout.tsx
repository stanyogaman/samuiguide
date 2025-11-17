import React from 'react'
import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'

interface MainLayoutProps {
  children: React.ReactNode
  locale: Locale
}

export async function MainLayout({ children, locale }: MainLayoutProps) {
  const dictionary = await getDictionary(locale)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader dictionary={dictionary} />
      <main className="flex-1">{children}</main>
      <SiteFooter dictionary={dictionary} locale={locale} />
    </div>
  )
}
