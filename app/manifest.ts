import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Samui Insider Guide',
    short_name: 'Samui Guide',
    description: 'Your ultimate guide to Koh Samui - living, investing, and exploring',
    start_url: '/en',
    display: 'standalone',
    background_color: '#fafaf8',
    theme_color: '#00bfbf',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
