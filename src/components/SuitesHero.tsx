import { motion } from 'framer-motion'
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa'
import { fadeInUp, staggerContainer } from '../variants'
import { whatsappLink } from '../data/contact'
import heroImg from '../assets/foto (7).jpeg'

const WHATSAPP_MESSAGE =
  'Olá! Quero conhecer as suítes à venda no Greenland para alugar na temporada.'

export default function SuitesHero(): React.JSX.Element {
  const scrollTo = (id: string): void => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-[92vh] overflow-hidden flex items-end">
      {/* Fundo */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Vista aérea do condomínio Greenland, em Teresópolis, com lago, lazer e as suítes do Art Green Boutique Hotel"
          width={1600}
          height={1067}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#273020] via-black/60 to-black/40 z-10" />
      </div>

      {/* Conteúdo */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-7xl mx-auto w-full px-6 pt-32 pb-16"
      >
        <motion.p
          variants={fadeInUp}
          className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          SUÍTES À VENDA — GREENLAND, TERESÓPOLIS
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="font-heading text-3xl md:text-5xl text-white leading-tight mb-5 max-w-3xl"
        >
          Compre sua suíte, o hotel aluga na temporada{' '}
          <span className="text-[#a8c48a]">e você recebe todo mês</span>
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
        >
          Suítes Lago e Suítes Superiores prontas, mobiliadas e operadas pelo Art Green Boutique
          Hotel, dentro de um condomínio com 20.000m² de lazer e o restaurante Art Cucina. Um
          imóvel com escritura no seu nome que trabalha para você o ano inteiro.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappLink(WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-xl hover:scale-105"
          >
            <FaWhatsapp className="text-lg" /> Quero conhecer
          </a>
          <button
            onClick={() => scrollTo('#suites')}
            className="inline-flex items-center justify-center gap-2 border border-white/70 text-white hover:bg-white hover:text-[#273020] font-semibold px-8 py-4 rounded-full text-base transition-all"
          >
            Ver as suítes <FaArrowDown className="text-sm" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
