import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://samui-insider-guide.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/profile/',
          '/*?*', // Disallow query parameters
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
