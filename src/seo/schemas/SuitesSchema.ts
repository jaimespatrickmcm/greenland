import { SEO_CONFIG } from '../seoConfig'
import { suites } from '../../data/suites'

// Lista das suítes à venda no Greenland, operadas pelo Art Green Boutique Hotel.
// Preços ficam fora do schema enquanto a tabela comercial não estiver fechada.
export const getSuitesSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Suítes à venda no GREENLAND',
  description:
    'Suítes prontas e mobiliadas à venda no condomínio GREENLAND, em Teresópolis, com locação por temporada administrada pelo Art Green Boutique Hotel.',
  url: `${SEO_CONFIG.siteUrl}/imoveis`,
  numberOfItems: suites.length,
  itemListElement: suites.map((suite, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Accommodation',
      name: suite.name,
      description: suite.tagline,
      occupancy: {
        '@type': 'QuantitativeValue',
        unitText: 'hóspedes',
      },
      floorSize: {
        '@type': 'QuantitativeValue',
        name: suite.area,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: SEO_CONFIG.address.addressLocality,
        addressRegion: SEO_CONFIG.address.addressRegion,
        addressCountry: SEO_CONFIG.address.addressCountry,
      },
    },
  })),
})
