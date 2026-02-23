import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../variants'
import 'swiper/css'
import 'swiper/css/navigation'
import foto1 from '../assets/foto (1).jpeg'
import foto2 from '../assets/foto (2).jpeg'
import foto3 from '../assets/foto (3).jpeg'
import foto4 from '../assets/foto (4).jpeg'
import foto5 from '../assets/foto (5).jpeg'
import foto6 from '../assets/foto (6).jpeg'
import foto7 from '../assets/foto (7).jpeg'
import foto8 from '../assets/foto (8).jpeg'
import foto9 from '../assets/foto (9).jpeg'
import loft1Img from '../assets/fase1.jpg'
import loft2Img from '../assets/fase2.jpg'

const renderImages = [
  { src: foto1, alt: 'Render 1' },
  { src: foto2, alt: 'Render 2' },
  { src: foto3, alt: 'Render 3' },
  { src: foto4, alt: 'Render 4' },
  { src: foto5, alt: 'Render 5' },
  { src: foto6, alt: 'Render 6' },
  { src: foto7, alt: 'Render 7' },
  { src: foto8, alt: 'Render 8' },
  { src: foto9, alt: 'Render 9' },
]

const paymentPlans = [
  {
    entry: 'Entrada R$ 150k',
    rate: '0,4%/mês',
    perk: '3 fds/ano na pousada',
    discount: '50% off',
  },
  {
    entry: 'Entrada R$ 200k',
    rate: '0,7%/mês',
    perk: '4 fds/ano na pousada',
    discount: '60% off',
  },
  {
    entry: 'À vista',
    rate: '1%/mês',
    perk: '6 fds/ano ou 2 cupons',
    discount: '100% off',
  },
]

export default function Pricing() {
  const scrollToContact = () => {
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
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#e8a020] text-sm font-semibold tracking-widest uppercase mb-3"
          >
            LOFTS EXCLUSIVOS
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-white"
          >
            Dois modelos projetados para{' '}
            <span className="text-[#5a8a3c]">conforto e retorno</span>
          </motion.h2>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1 - 21m² */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden card-hover"
          >
            <div className="relative">
              <img
                src={loft1Img}
                alt="Loft 21m²"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 text-[#1a2418] text-xs font-bold px-3 py-1.5 rounded-full">
                MODELO COMPACTO
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-heading text-2xl text-white font-bold mb-2">Loft 21m²</h3>
              <p className="text-white/50 text-sm mb-6">21m² de área construída + 25m² deck = 46m² totais</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  ['Terreno', '150m² – 200m²'],
                  ['Quartos', '1 quarto'],
                  ['Banheiro', 'Com banheira romana'],
                  ['Dom-Qui', 'R$ 500/dia'],
                  ['Sex-Sáb', 'R$ 750/dia'],
                ].map(([k, v]) => (
                  <div key={k} className="bg-white/5 rounded-xl p-3">
                    <div className="text-white/40 text-xs mb-1">{k}</div>
                    <div className="text-white font-semibold text-sm">{v}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6 flex items-end justify-between">
                <div>
                  <div className="text-white/40 text-xs mb-1">Preço</div>
                  <div className="font-heading text-3xl text-[#e8a020] font-bold">R$ 349.000</div>
                </div>
                <button
                  onClick={scrollToContact}
                  className="bg-[#e8a020] hover:bg-[#c8881a] text-[#1a2418] font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
                >
                  Investir Agora
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - 32m² */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="bg-white/5 border-2 border-[#e8a020] rounded-2xl overflow-hidden card-hover relative"
          >
            <div className="absolute top-4 right-4 z-10 bg-[#e8a020] text-[#1a2418] text-xs font-bold px-3 py-1.5 rounded-full">
              ⭐ MAIS RENTÁVEL
            </div>
            <div className="relative">
              <img
                src={loft2Img}
                alt="Loft 32m²"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#e8a020] text-[#1a2418] text-xs font-bold px-3 py-1.5 rounded-full">
                MODELO AMPLIADO
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-heading text-2xl text-white font-bold mb-2">Loft 32m²</h3>
              <p className="text-white/50 text-sm mb-6">32m² de área construída + 25m² deck = 57m² totais</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  ['Terreno', '150m² – 200m²'],
                  ['Quartos', '2 quartos'],
                  ['Banheiro', 'Com banheira romana'],
                  ['Dom-Qui', 'R$ 650/dia'],
                  ['Sex-Sáb', 'R$ 1.000/dia'],
                ].map(([k, v]) => (
                  <div key={k} className="bg-white/5 rounded-xl p-3">
                    <div className="text-white/40 text-xs mb-1">{k}</div>
                    <div className="text-white font-semibold text-sm">{v}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6 flex items-end justify-between">
                <div>
                  <div className="text-white/40 text-xs mb-1">Preço</div>
                  <div className="font-heading text-3xl text-[#e8a020] font-bold">R$ 399.000</div>
                </div>
                <button
                  onClick={scrollToContact}
                  className="bg-[#e8a020] hover:bg-[#c8881a] text-[#1a2418] font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
                >
                  Investir Agora
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Renders gallery */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-heading text-xl text-white text-center mb-6">Renders do Projeto</h3>
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
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Payment plans */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 variants={fadeInUp} className="font-heading text-xl text-white text-center mb-8">
            Formas de Pagamento e Benefícios
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentPlans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-[#e8a020]/50 transition-colors"
              >
                <div className="font-heading text-lg text-[#e8a020] font-bold mb-2">{plan.entry}</div>
                <div className="text-3xl font-heading text-white font-bold mb-1">{plan.rate}</div>
                <div className="text-white/50 text-sm mb-4">durante a obra</div>
                <div className="border-t border-white/10 pt-4">
                  <div className="text-white/70 text-sm">{plan.perk}</div>
                  <div className="text-[#5a8a3c] text-sm font-semibold mt-1">Desconto de {plan.discount}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
