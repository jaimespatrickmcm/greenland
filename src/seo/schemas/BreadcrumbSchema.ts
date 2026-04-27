import { SEO_CONFIG } from '../seoConfig'
import type { BreadcrumbItem } from '../seoTypes'

export const getBreadcrumbSchema = (items: BreadcrumbItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http')
      ? item.url
      : `${SEO_CONFIG.siteUrl}${item.url}`,
  })),
})
