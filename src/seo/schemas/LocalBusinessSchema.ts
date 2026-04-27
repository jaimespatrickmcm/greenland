import { SEO_CONFIG } from '../seoConfig'

export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  '@id': `${SEO_CONFIG.siteUrl}/#localbusiness`,
  name: SEO_CONFIG.siteName,
  url: SEO_CONFIG.siteUrl,
  image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultOgImage}`,
  logo: `${SEO_CONFIG.siteUrl}/logo.png`,
  telephone: SEO_CONFIG.phone,
  email: SEO_CONFIG.email,
  priceRange: 'R$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SEO_CONFIG.address.streetAddress,
    addressLocality: SEO_CONFIG.address.addressLocality,
    addressRegion: SEO_CONFIG.address.addressRegion,
    postalCode: SEO_CONFIG.address.postalCode,
    addressCountry: SEO_CONFIG.address.addressCountry,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SEO_CONFIG.geo.latitude,
    longitude: SEO_CONFIG.geo.longitude,
  },
  areaServed: [
    { '@type': 'City', name: 'Teresópolis' },
    { '@type': 'State', name: 'Rio de Janeiro' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  sameAs: [SEO_CONFIG.social.instagram, SEO_CONFIG.social.facebook],
})
