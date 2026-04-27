import { SEO_CONFIG } from '../seoConfig'

export const getOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SEO_CONFIG.siteName,
  url: SEO_CONFIG.siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${SEO_CONFIG.siteUrl}/logo.png`,
  },
  email: SEO_CONFIG.email,
  telephone: SEO_CONFIG.phone,
  sameAs: [
    SEO_CONFIG.social.instagram,
    SEO_CONFIG.social.facebook,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SEO_CONFIG.phone,
    contactType: 'sales',
    areaServed: 'BR',
    availableLanguage: 'Portuguese',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SEO_CONFIG.address.streetAddress,
    addressLocality: SEO_CONFIG.address.addressLocality,
    addressRegion: SEO_CONFIG.address.addressRegion,
    postalCode: SEO_CONFIG.address.postalCode,
    addressCountry: SEO_CONFIG.address.addressCountry,
  },
})
