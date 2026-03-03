import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../variants'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import mapaImg from '../assets/1772464046196-aab23c29-e444-4bfc-9fcc-f3ce864552f0_1.png'

export default function Pricing(): React.JSX.Element {
  const openWhatsApp = (): void => {
    window.open('https://wa.me/5521999920999', '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="investimento" className="py-24 bg-[#273020]">
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
            className="text-white/70 text-sm font-semibold tracking-widest uppercase mb-3"
          >
            TERRENOS DISPONÍVEIS
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="font-heading text-3xl md:text-4xl text-white mb-4"
          >
            1ª Fase — 86% vendido —{' '}
            <span className="text-[#4a6838]">apenas 27 terrenos restantes</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/60 max-w-xl mx-auto">
            181 terrenos na 1ª fase, 154 já vendidos. Condomínio pronto, com toda infraestrutura instalada. Garanta o seu antes que acabe.
          </motion.p>
        </motion.div>

        {/* Mapa do Empreendimento */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src={mapaImg}
              alt="Mapa do Empreendimento GREENLAND — Vista aérea dos terrenos"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#273020] to-transparent h-32" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-white font-bold mb-1">
                  Mapa do Empreendimento
                </h3>
                <p className="text-white/70 text-sm">Vista aérea dos terrenos — 1ª Fase</p>
              </div>
              <button
                onClick={openWhatsApp}
                className="bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg whitespace-nowrap"
              >
                Consultar Disponibilidade
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
