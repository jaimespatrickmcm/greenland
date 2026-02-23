import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import { FaInstagram, FaFacebook, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import { FaPlay } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/effect-fade'
import foto1 from '../assets/foto (1).jpeg'
import foto2 from '../assets/foto (2).jpeg'
import foto3 from '../assets/foto (3).jpeg'
import foto4 from '../assets/foto (4).jpeg'

const slides = [
  {
    image: foto1,
    alt: 'Cottage GREENLAND na floresta'
  },
  {
    image: foto2,
    alt: 'Cabin na montanha'
  },
  {
    image: foto3,
    alt: 'Casa rústica na floresta'
  },
]

export default function Hero({ onOpenVideo }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const socials = [
    { Icon: FaFacebook, href: 'https://facebook.com' },
    { Icon: FaXTwitter, href: 'https://twitter.com' },
    { Icon: FaYoutube, href: 'https://youtube.com' },
    { Icon: FaInstagram, href: 'https://instagram.com' },
  ]

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Swiper */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
          style={{ height: '100vh' }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i} style={{ height: '100vh' }}>
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-6 py-12 md:flex-row md:items-end md:justify-between md:px-8 md:pb-8">

        {/* Texto e botões */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-lg mb-6 md:mb-8">
          <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-2">
            GREENLAND — Teresópolis, Serra RJ
          </p>
          <h1 className="font-heading text-3xl md:text-4xl xl:text-5xl text-white leading-tight mb-4">
            Seu loft na natureza,<br /> com rendimento garantido
          </h1>
          <p className="text-white/80 text-sm mb-6 max-w-lg">
            Invista no GREENLAND — lofts exclusivos em Teresópolis, com escritura
            individual, gestão hoteleira e até 18% ao ano de retorno.
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <button
              onClick={() => scrollTo('#greenland')}
              className="bg-[#2d5a27] hover:bg-[#1a3a18] text-white font-semibold px-5 py-2 rounded-full text-xs transition-all duration-200 shadow hover:scale-105"
            >
              Conhecer o Projeto
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="border border-white text-white hover:bg-white hover:text-[#1a2418] font-semibold px-5 py-2 rounded-full text-xs transition-all duration-200"
            >
              Investir Agora
            </button>
          </div>
        </div>

        {/* Vídeo flutuante + redes sociais */}
        <div className="flex flex-col items-center md:items-end gap-3 md:mb-8 w-full md:w-auto">
          {/* Redes sociais — ocultas no mobile */}
          <div className="hidden md:flex flex-col items-end gap-2 mb-2">
            {socials.map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-[#2d5a27] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)' }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          {/* Vídeo flutuante — largura total no mobile */}
          <div className="relative w-full md:w-[320px] h-[200px] md:h-[180px] rounded-xl overflow-hidden shadow-lg bg-black/60">
            <img
              src={foto4}
              alt="GREENLAND — Vídeo preview"
              className="w-full h-full object-cover opacity-80"
            />
            <button
              onClick={onOpenVideo}
              className="absolute inset-0 flex items-center justify-center"
              aria-label="Assistir vídeo"
            >
              <span className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <FaPlay size={28} className="text-[#1a2418] ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
