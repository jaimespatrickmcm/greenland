import { SEO_CONFIG } from '../seoConfig'

export const getWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SEO_CONFIG.siteName,
  url: SEO_CONFIG.siteUrl,
  inLanguage: 'pt-BR',
  publisher: {
    '@type': 'Organization',
    name: SEO_CONFIG.siteName,
    url: SEO_CONFIG.siteUrl,
  },
})
