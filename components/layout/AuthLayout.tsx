import React from 'react'
import Link from 'next/link'
import { Locale } from '@/i18n/config'

interface AuthLayoutProps {
  children: React.ReactNode
  locale: Locale
}

export function AuthLayout({ children, locale }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-sand-gradient">
      {/* Simple Header */}
      <header className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-tropical-gradient flex items-center justify-center">
              <span className="text-white font-bold text-xl">SI</span>
            </div>
            <span className="font-heading font-bold text-xl text-text-primary">
              Samui Insider
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-text-secondary">
            © {new Date().getFullYear()} Samui Insider Guide
          </p>
        </div>
      </footer>
    </div>
  )
}
