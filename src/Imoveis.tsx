import Header from './components/Header'
import Footer from './components/Footer'
import SuitesHero from './components/SuitesHero'
import SuitesWhy from './components/SuitesWhy'
import SuitesTypes from './components/SuitesTypes'
import SuitesHowItWorks from './components/SuitesHowItWorks'
import SuitesIncome from './components/SuitesIncome'
import SuitesStructure from './components/SuitesStructure'
import SuitesFAQ, { suitesFaqs } from './components/SuitesFAQ'
import SuitesCTA from './components/SuitesCTA'
import WhatsAppFloat from './components/WhatsAppFloat'
import { whatsappLink } from './data/contact'
import { SEOHead } from './seo/SEOHead'
import { SEO_CONFIG } from './seo/seoConfig'
import { getOrganizationSchema } from './seo/schemas/OrganizationSchema'
import { getBreadcrumbSchema } from './seo/schemas/BreadcrumbSchema'
import { getFAQSchema } from './seo/schemas/FAQSchema'
import { getSuitesSchema } from './seo/schemas/SuitesSchema'

const HEADER_WHATSAPP_MESSAGE =
  'Olá! Quero conhecer as suítes à venda no Greenland para alugar na temporada.'

export default function Imoveis(): React.JSX.Element {
  return (
    <>
      <SEOHead
        title="Suítes à Venda no Greenland — Renda com Aluguel por Temporada"
        description="Compre uma suíte pronta no Greenland, em Teresópolis, e gere renda recorrente com aluguel por temporada. Suítes Lago e Superiores administradas pelo Art Green Boutique Hotel."
        canonical={`${SEO_CONFIG.siteUrl}/imoveis`}
        keywords={[
          'suítes à venda em Teresópolis',
          'imóvel para alugar por temporada',
          'renda com aluguel por temporada',
          'investimento em hotelaria Teresópolis',
          'suíte com renda GREENLAND',
          'Art Green Boutique Hotel',
          'imóveis na Serra do Rio de Janeiro',
        ]}
        ogType="website"
        ogImage={SEO_CONFIG.defaultOgImage}
        ogImageAlt="Suítes à venda no condomínio GREENLAND, em Teresópolis"
        structuredData={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Início', url: '/' },
            { name: 'Imóveis', url: '/imoveis' },
          ]),
          getSuitesSchema(),
          getFAQSchema(suitesFaqs.map((f) => ({ question: f.q, answer: f.a }))),
        ]}
      />
      <Header
        ctaLabel="Quero Minha Suíte!"
        ctaHref={whatsappLink(HEADER_WHATSAPP_MESSAGE)}
      />
      <main>
        <SuitesHero />
        <SuitesWhy />
        <SuitesTypes />
        <SuitesHowItWorks />
        <SuitesIncome />
        <SuitesStructure />
        <SuitesFAQ />
        <SuitesCTA />
      </main>
      <Footer />
      <WhatsAppFloat
        href={whatsappLink(HEADER_WHATSAPP_MESSAGE)}
        tooltip="Fale sobre as suítes!"
      />
    </>
  )
}
