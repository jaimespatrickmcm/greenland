import { motion } from 'framer-motion'
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'
import { whatsappLink } from '../data/contact'
import bgImg from '../assets/IMG_8250-HDR.webp'

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination=-22.3894,-43.0151&destination_place_id=GREENLAND+Teresópolis'

const WHATSAPP_MESSAGE =
  'Olá! Quero conhecer as suítes à venda no Greenland e falar sobre valores e condições.'

export default function SuitesCTA(): React.JSX.Element {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bgImg}
          alt="Entardecer no Greenland, com o restaurante Art Cucina iluminado ao fundo"
          width={1600}
          height={1067}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#273020]/85" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="text-[#a8c48a] text-sm font-semibold tracking-widest uppercase mb-3"
        >
          POUCAS UNIDADES DISPONÍVEIS
        </motion.p>
        <motion.h2
          variants={fadeInUp}
          className="font-heading text-3xl md:text-4xl text-white mb-5 leading-tight"
        >
          Venha conhecer sua suíte pessoalmente
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-white/70 text-base md:text-lg mb-9">
          Agende uma visita ao Greenland, conheça as suítes, almoce no Art Cucina e veja de perto
          como funciona a operação de hospedagem. Nosso time responde no WhatsApp na hora.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={whatsappLink(WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-xl hover:scale-105"
          >
            <FaWhatsapp className="text-lg" /> Quero conhecer
          </a>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/70 text-white hover:bg-white hover:text-[#273020] font-semibold px-8 py-4 rounded-full text-base transition-all"
          >
            <FaMapMarkerAlt /> Como chegar
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
