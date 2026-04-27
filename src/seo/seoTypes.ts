export interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  noIndex?: boolean
  noFollow?: boolean
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogImageAlt?: string
  ogType?: 'website' | 'article' | 'product' | 'profile'
  ogLocale?: string
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player'
  twitterSite?: string
  twitterCreator?: string
  twitterImage?: string
  twitterImageAlt?: string
  structuredData?: object | object[]
  hreflang?: HreflangEntry[]
  breadcrumbs?: BreadcrumbItem[]
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

export interface HreflangEntry {
  hreflang: string
  href: string
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export interface SitemapRoute {
  path: string
  priority?: number
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  lastmod?: string
}
