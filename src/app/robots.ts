import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/api'],
    },
    sitemap: 'https://polotntex.ru/sitemap.xml',
  }
}