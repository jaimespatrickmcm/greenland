import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import ForWhom from './components/ForWhom'
import HowItWorks from './components/HowItWorks'
import WhyInvest from './components/WhyInvest'
import Returns from './components/Returns'
import Pricing from './components/Pricing'
// Aguardando aprovação: reative junto com a seção lá embaixo.
// import BuyAndRent from './components/BuyAndRent'
import ArtCucina from './components/ArtCucina'
import ArtGreenHotel from './components/ArtGreenHotel'
import Clients from './components/Clients'
import InstagramSection from './components/InstagramSection'
import FAQ, { faqs } from './components/FAQ'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'
import ScheduleModal from './components/ScheduleModal'
import WhatsAppFloat from './components/WhatsAppFloat'
import { SEOHead } from './seo/SEOHead'
import { SEO_CONFIG } from './seo/seoConfig'
import { getOrganizationSchema } from './seo/schemas/OrganizationSchema'
import { getWebSiteSchema } from './seo/schemas/WebSiteSchema'
import { getFAQSchema } from './seo/schemas/FAQSchema'
import { getRealEstateSchema } from './seo/schemas/RealEstateSchema'
import { getLocalBusinessSchema } from './seo/schemas/LocalBusinessSchema'

export default function App(): React.JSX.Element {
  const [videoOpen, setVideoOpen] = useState<boolean>(false)
  const [scheduleOpen, setScheduleOpen] = useState<boolean>(false)

  return (
    <>
      <SEOHead
        title={SEO_CONFIG.defaultTitle}
        description={SEO_CONFIG.defaultDescription}
        keywords={[
          'terrenos em Teresópolis',
          'condomínio em Teresópolis',
          'terrenos na Serra do Rio de Janeiro',
          'GREENLAND',
          'investimento em terrenos',
          'terreno com RGI',
          'condomínio fechado Teresópolis',
          'lotes na Serra dos Órgãos',
        ]}
        ogType="website"
        ogImage={SEO_CONFIG.defaultOgImage}
        ogImageAlt={SEO_CONFIG.defaultOgImageAlt}
        structuredData={[
          getWebSiteSchema(),
          getOrganizationSchema(),
          getLocalBusinessSchema(),
          getRealEstateSchema(),
          getFAQSchema(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        ]}
      />
      <Header onOpenSchedule={() => setScheduleOpen(true)} />
      <main>
        <Hero onOpenSchedule={() => setScheduleOpen(true)} />
        <About onOpenSchedule={() => setScheduleOpen(true)} />
        <Stats />
        <ForWhom onOpenSchedule={() => setScheduleOpen(true)} />
        <HowItWorks onOpenSchedule={() => setScheduleOpen(true)} />
        <WhyInvest onOpenSchedule={() => setScheduleOpen(true)} />
        <Returns onOpenSchedule={() => setScheduleOpen(true)} />
        <Pricing onOpenSchedule={() => setScheduleOpen(true)} />
        {/* Aguardando aprovação da página /imoveis: <BuyAndRent /> */}
        <ArtCucina />
        <ArtGreenHotel />
        <MapSection />
        <Clients onOpenSchedule={() => setScheduleOpen(true)} />
        <InstagramSection onOpenVideo={() => setVideoOpen(true)} />
        <FAQ />
      </main>
      <Footer />
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
      <ScheduleModal isOpen={scheduleOpen} onClose={() => setScheduleOpen(false)} />

      <WhatsAppFloat />
    </>
  )
}
