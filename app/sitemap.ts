import { MetadataRoute } from 'next'
import { i18n } from '@/i18n/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://samui-insider-guide.com'

  // Static pages for each locale
  const staticPages = [
    '',
    '/blog',
    '/guides',
    '/quizzes',
    '/districts',
    '/about',
    '/contact',
    '/auth/login',
    '/auth/register',
  ]

  // Quiz pages
  const quizPages = [
    '/quizzes/where-to-live',
    '/quizzes/should-you-invest',
    '/quizzes/villa-safety-check',
  ]

  // District pages
  const districtPages = [
    '/districts/chaweng',
    '/districts/lamai',
    '/districts/mae-nam',
    '/districts/bophut',
    '/districts/maenam',
    '/districts/nathon',
  ]

  // Generate sitemap entries for all locales
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add static pages for each locale
  i18n.locales.forEach((locale) => {
    // Main pages
    staticPages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
      })
    })

    // Quiz pages
    quizPages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      })
    })

    // District pages
    districtPages.forEach((page) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })

  // In production, you would also add dynamic blog posts and guides:
  // const blogPosts = await getBlogPosts()
  // blogPosts.forEach(post => {
  //   i18n.locales.forEach(locale => {
  //     sitemapEntries.push({
  //       url: `${baseUrl}/${locale}/blog/${post.slug}`,
  //       lastModified: new Date(post.updatedAt),
  //       changeFrequency: 'weekly',
  //       priority: 0.6,
  //     })
  //   })
  // })

  return sitemapEntries
}
