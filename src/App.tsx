import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import ForWhom from './components/ForWhom'
import HowItWorks from './components/HowItWorks'
import WhyInvest from './components/WhyInvest'
import Returns from './components/Returns'
import Pricing from './components/Pricing'
import ArtCucina from './components/ArtCucina'
import Clients from './components/Clients'
import InstagramSection from './components/InstagramSection'
import ContactForm from './components/ContactForm'
import FAQ from './components/FAQ'
import MapSection from './components/MapSection'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'

export default function App(): React.JSX.Element {
  const [videoOpen, setVideoOpen] = useState<boolean>(false)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <ForWhom />
        <HowItWorks />
        <WhyInvest />
        <Returns />
        <Pricing />
        <ArtCucina />
        <Clients />
        <InstagramSection onOpenVideo={() => setVideoOpen(true)} />
        <ContactForm />
        <FAQ />
        <MapSection />
      </main>
      <Footer />
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/5521999920999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Fale conosco via WhatsApp"
      >
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-[#25D366] whatsapp-pulse whatsapp-btn" />
          <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform whatsapp-btn">
            <FaWhatsapp className="text-white text-2xl" />
          </div>
        </div>
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 bg-[#273020] text-white text-xs font-medium px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Fale conosco!
          <div className="absolute top-full right-5 border-4 border-transparent border-t-[#273020]" />
        </div>
      </a>
    </>
  )
}
