import { SEO_CONFIG } from '../seoConfig'

// Schema combinado: condomínio de terrenos como ResidentialComplex / Place
export const getRealEstateSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ResidentialComplex',
  name: 'GREENLAND',
  description:
    'Condomínio pronto de terrenos com RGI em Teresópolis, na Serra do Rio de Janeiro. 20.000m² de área de lazer, água e luz instalados.',
  url: SEO_CONFIG.siteUrl,
  image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultOgImage}`,
  telephone: SEO_CONFIG.phone,
  email: SEO_CONFIG.email,
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
  numberOfAccommodationUnits: 35,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Portaria 24h' },
    { '@type': 'LocationFeatureSpecification', name: 'Área de lazer 20.000m²' },
    { '@type': 'LocationFeatureSpecification', name: 'Água instalada' },
    { '@type': 'LocationFeatureSpecification', name: 'Energia elétrica instalada' },
    { '@type': 'LocationFeatureSpecification', name: 'RGI / Escritura' },
  ],
})
