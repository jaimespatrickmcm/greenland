// Configurações globais de SEO do site GREENLAND.
// Ajuste `siteUrl` para o domínio final de produção quando publicado.
export const SEO_CONFIG = {
  siteName: 'GREENLAND',
  siteUrl: 'https://www.greenlandteresopolis.com.br',
  defaultTitle: 'GREENLAND — Terrenos na Serra do Rio de Janeiro',
  defaultDescription:
    'Condomínio pronto em Teresópolis com o maior lazer da cidade. 35 terrenos com RGI a partir de R$180mil. Água e luz instalados. Financie em até 240x pela Caixa.',
  defaultOgImage: '/og-image.jpg', // 1200x630px — adicione em /public quando disponível
  defaultOgImageAlt:
    'GREENLAND — Condomínio de terrenos com RGI em Teresópolis, Serra do RJ',
  twitterSite: '@greenlandteresopolis',
  twitterCreator: '@greenlandteresopolis',
  defaultLocale: 'pt_BR',
  themeColor: '#273020',
  titleSeparator: ' | ',
  titleSuffix: 'GREENLAND',
  maxTitleLength: 60,
  maxDescriptionLength: 160,
  // Contato
  email: 'Greenlandtere@gmail.com',
  phone: '+55-21-99231-8802',
  // Endereço aproximado
  address: {
    streetAddress: 'Estrada Teresópolis-Friburgo, km 12',
    addressLocality: 'Teresópolis',
    addressRegion: 'RJ',
    postalCode: '25960-000',
    addressCountry: 'BR',
  },
  geo: {
    latitude: -22.4029,
    longitude: -42.9656,
  },
  // Redes sociais
  social: {
    instagram: 'https://www.instagram.com/greenlandteresopolis',
    facebook: 'https://www.facebook.com/greenlandteresopolis',
    whatsapp: 'https://wa.me/5521992318802',
  },
} as const
