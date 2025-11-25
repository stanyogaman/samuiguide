import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Panel - Samui Insider Guide',
  description: 'Manage your Samui Insider Guide content',
}

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
