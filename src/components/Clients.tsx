import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { FaCheckCircle, FaInstagram } from 'react-icons/fa'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../variants'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import foto10 from '../assets/foto (10).jpeg'
import img0098 from '../assets/IMG_0098.webp'
import img0548 from '../assets/IMG_0548.webp'
import img8232 from '../assets/IMG_8232-HDR.webp'
import foto2 from '../assets/foto (2).jpeg'
import foto3 from '../assets/foto (3).jpeg'
import foto5 from '../assets/foto (5).jpeg'
import foto6 from '../assets/foto (6).jpeg'
import foto8 from '../assets/foto (8).jpeg'
import foto9 from '../assets/foto (9).jpeg'

interface SlideImage {
  src: string
  alt: string
}

interface Feature {
  title: string
  desc: string
}

const carouselImages: SlideImage[] = [
  { src: img8232, alt: 'Art Cucina no GREENLAND' },
  { src: img0548, alt: 'Art Cucina e lazer' },
  { src: img0098, alt: 'Área externa Art Cucina' },
  { src: foto10, alt: 'Casa rústica na floresta' },
  { src: foto2, alt: 'GREENLAND — Vista aérea' },
  { src: foto3, alt: 'GREENLAND — Condomínio' },
  { src: foto5, alt: 'GREENLAND — Natureza' },
  { src: foto6, alt: 'GREENLAND — Infraestrutura' },
  { src: foto8, alt: 'GREENLAND — Terrenos' },
  { src: foto9, alt: 'GREENLAND — Paisagem' },
]

const features: Feature[] = [
  {
    title: 'Terreno com RGI',
    desc: 'Escritura definitiva registrada em cartório — segurança jurídica garantida.',
  },
  {
    title: 'Água e luz instalados',
    desc: 'Infraestrutura já pronta na entrada de cada terreno para uso imediato.',
  },
  {
    title: 'Aprovado para financiamento Caixa (CEF)',
    desc: 'Possibilidade de financiamento pela Caixa Econômica Federal.',
  },
  {
    title: 'Condomínio fechado e seguro',
    desc: 'Portaria 24h, infraestrutura completa e lazer de resort funcionando.',
  },
  {
    title: '20.000m² de área de lazer',
    desc: 'Maior estrutura de lazer de Teresópolis — piscinas, quadras, lagos e mais.',
  },
]

export default function Clients(): React.JSX.Element {
  const openWhatsApp = (): void => {
    window.open('https://wa.me/5521999920999', '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-24 bg-[#f3efe8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left — Carousel */}
          <motion.div variants={fadeInLeft}>
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={0}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              navigation={true}
              pagination={{ clickable: true }}
              loop={true}
              speed={700}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              {carouselImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="h-[350px] md:h-[450px] lg:h-[520px]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Right — Content (Accommodation style) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.p
              variants={fadeInRight}
              className="text-[#4a6838] text-sm font-semibold tracking-widest uppercase mb-3"
            >
              O CONDOMÍNIO
            </motion.p>
            <motion.h2
              variants={fadeInRight}
              className="font-heading text-3xl md:text-4xl text-[#273020] mb-4 leading-tight"
            >
              No coração da Serra, ao lado do melhor de Teresópolis
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-gray-600 text-base leading-relaxed mb-8"
            >
              O GREENLAND abriga a Art Green — pousada premiada e referência na Serra do Rio de Janeiro. O refúgio ideal para finais de semana ou investimento de longo prazo, a 12km do centro.
            </motion.p>

            {/* Features with checkmarks */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-5 mb-8">
              {features.map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <FaCheckCircle className="text-[#364728] text-xl flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-heading text-lg font-bold text-[#273020] mb-0.5">{title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Instagram links */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-6">
              <a
                href="https://www.instagram.com/restauranteartcucina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#364728] font-semibold text-sm hover:text-[#8d4e27] transition-colors"
              >
                <FaInstagram /> @restauranteartcucina
              </a>
              <a
                href="https://www.instagram.com/artgreen.pousada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#364728] font-semibold text-sm hover:text-[#8d4e27] transition-colors"
              >
                <FaInstagram /> @artgreen.pousada
              </a>
            </motion.div>

            <motion.button
              variants={fadeInUp}
              onClick={openWhatsApp}
              className="bg-[#8d4e27] hover:bg-[#7a4220] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Garantir Meu Terreno →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
