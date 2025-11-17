import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Samui Insider Guide - Your Ultimate Koh Samui Travel Companion',
  description: 'Discover the best of Koh Samui with expert guides, personalized quizzes, and local insights for living, investing, and traveling in Thailand\'s tropical paradise.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  )
}
