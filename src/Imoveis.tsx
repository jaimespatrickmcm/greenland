import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SuitesHero from './components/SuitesHero'
import SuitesWhy from './components/SuitesWhy'
import SuitesTypes from './components/SuitesTypes'
import SuitesHowItWorks from './components/SuitesHowItWorks'
import SuitesIncome from './components/SuitesIncome'
import SuitesStructure from './components/SuitesStructure'
import SuitesTerrenos from './components/SuitesTerrenos'
import SuitesFAQ, { suitesFaqs } from './components/SuitesFAQ'
import SuitesCTA from './components/SuitesCTA'
import HowItWorks, { defaultHighlights } from './components/HowItWorks'
import ArtCucina from './components/ArtCucina'
import ArtGreenHotel from './components/ArtGreenHotel'
import MapSection from './components/MapSection'
import InstagramSection from './components/InstagramSection'
import ContactForm from './components/ContactForm'
import VideoModal from './components/VideoModal'
import WhatsAppFloat from './components/WhatsAppFloat'
import { whatsappLink } from './data/contact'
import { suites, OWNER_SHARE } from './data/suites'
import { SEOHead } from './seo/SEOHead'
import { SEO_CONFIG } from './seo/seoConfig'
import { getOrganizationSchema } from './seo/schemas/OrganizationSchema'
import { getBreadcrumbSchema } from './seo/schemas/BreadcrumbSchema'
import { getFAQSchema } from './seo/schemas/FAQSchema'
import { getSuitesSchema } from './seo/schemas/SuitesSchema'

const HEADER_WHATSAPP_MESSAGE =
  'Olá! Quero conhecer as suítes à venda no Greenland para alugar na temporada.'

// Mesmos destaques da home; só o terceiro muda de contexto: aqui o imóvel já
// está construído, então "Pronto para Construir" vira "Pronto para Alugar".
const suitesHighlights = [
  defaultHighlights[0],
  defaultHighlights[1],
  {
    ...defaultHighlights[2],
    nome: 'Pronto para Alugar',
    hoverText:
      'A suíte é entregue pronta, mobiliada e decorada, dentro de um condomínio com toda a infraestrutura instalada. Você compra e ela já entra na operação do Art Green Boutique Hotel na temporada seguinte, sem obra, sem espera e sem burocracia.',
  },
]

export default function Imoveis(): React.JSX.Element {
  const [videoOpen, setVideoOpen] = useState<boolean>(false)

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
        <HowItWorks
          highlights={suitesHighlights}
          sectionId="destaques"
          ctaLabel="Quero conhecer"
          ctaHref={whatsappLink(HEADER_WHATSAPP_MESSAGE)}
        />
        <SuitesTypes />
        <SuitesHowItWorks />
        <SuitesIncome />
        <SuitesStructure />
        <ArtCucina />
        <ArtGreenHotel
          description="A melhor forma de entender o investimento é dormir aqui. Hospede-se no Art Green Boutique Hotel, que é justamente quem vai operar a sua suíte, e veja de perto como o hóspede é recebido: o padrão do quarto, o café da manhã, o lazer e a gastronomia do Art Cucina. Você conhece a operação por dentro antes de comprar."
        />
        <SuitesTerrenos />
        <MapSection />
        <InstagramSection onOpenVideo={() => setVideoOpen(true)} />
        <SuitesCTA />
        <SuitesFAQ />
        <ContactForm
          sectionId="contato-suites"
          eyebrow="QUERO MINHA SUÍTE"
          title="Fale com um consultor e garanta sua suíte agora!"
          description={`Poucas unidades disponíveis entre Suíte Lago e Suíte Superior, com repasse de ${OWNER_SHARE} das hospedagens ao proprietário. Preencha o formulário e nossa equipe entra em contato pelo WhatsApp.`}
          interestOptions={[...suites.map((suite) => suite.name), 'Ainda não sei']}
          paymentOptions={[
            'À vista',
            'Parcelado direto com a construtora',
            'A definir',
          ]}
          whatsappIntro="Olá! Tenho interesse em comprar uma suíte no GREENLAND."
        />
      </main>
      <Footer />
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
      <WhatsAppFloat
        href={whatsappLink(HEADER_WHATSAPP_MESSAGE)}
        tooltip="Fale sobre as suítes!"
      />
    </>
  )
}
