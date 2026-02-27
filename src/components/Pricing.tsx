import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { fadeInUp, staggerContainer } from '../variants'
import 'swiper/css'
import 'swiper/css/navigation'
import foto2 from '../assets/foto (2).jpeg'
import foto3 from '../assets/foto (3).jpeg'
import foto5 from '../assets/foto (5).jpeg'
import foto6 from '../assets/foto (6).jpeg'
import foto8 from '../assets/foto (8).jpeg'
import foto9 from '../assets/foto (9).jpeg'
import img0098 from '../assets/IMG_0098.webp'
import img0548 from '../assets/IMG_0548.webp'
import img8232 from '../assets/IMG_8232-HDR.webp'
import mapaImg from '../assets/mapa.jpeg'

interface RenderImage {
  src: string
  alt: string
}

interface TerrainHighlight {
  badge: string
  label: string
  desc: string
}

const renderImages: RenderImage[] = [
  { src: img8232, alt: 'Art Cucina 1' },
  { src: img0548, alt: 'Art Cucina 2' },
  { src: img0098, alt: 'Art Cucina 3' },
  { src: foto2, alt: 'Foto GREENLAND 2' },
  { src: foto3, alt: 'Foto GREENLAND 3' },
  { src: foto5, alt: 'Foto GREENLAND 5' },
  { src: foto6, alt: 'Foto GREENLAND 6' },
  { src: foto8, alt: 'Foto GREENLAND 8' },
  { src: foto9, alt: 'Foto GREENLAND 9' },
]

const terrainHighlights: TerrainHighlight[] = [
  { badge: "RGI", label: "Terreno com RGI", desc: "Escritura definitiva registrada em cartório no seu nome" },
  { badge: "INFRA", label: "Água e Luz Instalados", desc: "Infraestrutura já instalada e pronta para uso imediato" },
  { badge: "CEF", label: "Financiamento Caixa", desc: "Financie em até 240x pela Caixa Econômica Federal. FGTS aceito." },
]

export default function Pricing(): React.JSX.Element {
  const scrollToContact = (): void => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="investimento" className="py-24 bg-[#1a2418]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#e8a020] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            TERRENOS DISPONÍVEIS
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-white mb-4"
          >
            1ª Fase —{' '}
            <span className="text-[#5a8a3c]">35 terrenos exclusivos</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/60 max-w-xl mx-auto">
            Condomínio pronto, com toda infraestrutura instalada. Compre agora e construa quando quiser.
          </motion.p>
        </motion.div>

        {/* Mapa do Empreendimento */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src={mapaImg}
              alt="Mapa do Empreendimento GREENLAND — Vista aérea dos terrenos"
              className="w-full h-auto object-cover"
            />
            {/* Overlay com gradiente no bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a2418] to-transparent h-32" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-white font-bold mb-1">
                  Mapa do Empreendimento
                </h3>
                <p className="text-white/70 text-sm">Vista aérea dos terrenos — 1ª Fase</p>
              </div>
              <button
                onClick={scrollToContact}
                className="bg-[#e8a020] hover:bg-[#c8881a] text-[#1a2418] font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg whitespace-nowrap"
              >
                Consultar Disponibilidade
              </button>
            </div>
          </div>
        </motion.div>

        {/* Fotos do Condomínio */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-heading text-xl text-white text-center mb-6">Fotos do Condomínio</h3>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            spaceBetween={16}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            navigation={true}
            className="rounded-2xl"
          >
            {renderImages.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-48 md:h-56 object-cover rounded-xl"
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => { e.currentTarget.style.display = 'none' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeInUp} className="font-heading text-xl text-white text-center mb-8">
            Tudo incluso no seu terreno
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {terrainHighlights.map((h, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#e8a020]/50 transition-colors"
              >
                <div className="inline-block bg-[#e8a020]/20 text-[#e8a020] font-bold text-xs px-3 py-1 rounded-full mb-3">{h.badge}</div>
                <div className="font-heading text-lg text-[#e8a020] font-bold mb-2">{h.label}</div>
                <div className="text-white/60 text-sm">{h.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
