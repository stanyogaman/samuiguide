'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { Locale, i18n, localeNames } from '@/i18n/config'
import { cn } from '@/lib/utils'

interface SiteHeaderProps {
  dictionary: any
}

export function SiteHeader({ dictionary }: SiteHeaderProps) {
  const params = useParams()
  const pathname = usePathname()
  const locale = (params?.lang as Locale) || 'en'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  const navigation = [
    { name: dictionary.common.home, href: `/${locale}` },
    { name: dictionary.common.guides, href: `/${locale}/guides` },
    { name: dictionary.common.quizzes, href: `/${locale}/quizzes` },
    { name: dictionary.common.blog, href: `/${locale}/blog` },
    { name: dictionary.common.districts, href: `/${locale}/districts` },
  ]

  const getLocalizedPath = (newLocale: Locale) => {
    if (!pathname) return `/${newLocale}`
    const segments = pathname.split('/').filter(Boolean)
    segments[0] = newLocale
    return '/' + segments.join('/')
  }

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-tropical-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xl">SI</span>
            </div>
            <span className="hidden sm:block font-heading font-bold text-xl text-text-primary">
              Samui Insider
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  pathname === item.href
                    ? 'text-primary-600'
                    : 'text-text-secondary hover:text-primary-600'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                <span className="text-sm font-medium uppercase">{locale}</span>
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2">
                  {i18n.locales.map((l) => (
                    <Link
                      key={l}
                      href={getLocalizedPath(l)}
                      onClick={() => setIsLangMenuOpen(false)}
                      className={cn(
                        'block px-4 py-2 text-sm hover:bg-gray-50 transition-colors',
                        l === locale ? 'text-primary-600 font-medium' : 'text-gray-700'
                      )}
                    >
                      {localeNames[l]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Auth Links */}
            <Link
              href={`/${locale}/auth/login`}
              className="hidden sm:block text-sm font-medium text-text-secondary hover:text-primary-600 transition-colors"
            >
              {dictionary.common.login}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block py-2 text-sm font-medium',
                  pathname === item.href
                    ? 'text-primary-600'
                    : 'text-text-secondary'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href={`/${locale}/auth/login`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-text-secondary sm:hidden"
            >
              {dictionary.common.login}
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
