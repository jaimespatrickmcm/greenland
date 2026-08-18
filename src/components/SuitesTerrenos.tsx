import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight, FaWhatsapp } from 'react-icons/fa'
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '../variants'
import { whatsappLink } from '../data/contact'
import { PRICING_INFO } from '../data/pricingInfo'
import terrenoImg from '../assets/foto (8).jpeg'

const highlights: string[] = [
  'Terreno com RGI, escritura no seu nome',
  'Água e luz já instaladas na entrada do lote',
  '27 unidades restantes — 86% da 1ª fase vendida',
  'Financiamento direto em até 120x, sem banco',
]

const WHATSAPP_MESSAGE =
  'Olá! Vi as suítes no site do Greenland, mas também quero saber sobre os terrenos.'

export default function SuitesTerrenos(): React.JSX.Element {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Conteúdo */}
          <motion.div variants={staggerContainer}>
            <motion.p
              variants={fadeInLeft}
              className="text-[#4a6838] text-sm font-semibold tracking-widest uppercase mb-3"
            >
              TAMBÉM VENDEMOS TERRENOS
            </motion.p>
            <motion.h2
              variants={fadeInLeft}
              className="font-heading text-3xl md:text-4xl text-[#273020] mb-4 leading-tight"
            >
              Prefere construir do seu jeito?{' '}
              <span className="text-[#364728]">Tem terreno à venda</span>
            </motion.h2>
            <motion.p
              variants={fadeInLeft}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-7"
            >
              A suíte pronta é o caminho mais rápido para gerar renda. Mas se a sua ideia é ter a
              sua casa na Serra, o Greenland ainda tem terrenos na 1ª fase, no mesmo condomínio,
              com a mesma estrutura de lazer e o Art Cucina do lado.
            </motion.p>

            <motion.ul variants={fadeInUp} className="flex flex-col gap-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FaCheck className="text-[#4a6838] text-sm mt-1 flex-shrink-0" />
                  <span className="text-gray-600 text-sm md:text-base">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeInUp} className="bg-[#f3efe8] p-6 mb-8">
              <p className="text-[#273020] font-heading text-xl font-bold">{PRICING_INFO.cash}</p>
              <p className="text-gray-500 text-sm">ou {PRICING_INFO.installment}</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <a
                href="/#investimento"
                className="inline-flex items-center justify-center gap-2 bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-lg hover:scale-105"
              >
                Ver os terrenos
                <FaArrowRight className="text-sm" />
              </a>
              <a
                href={whatsappLink(WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#364728] text-[#364728] hover:bg-[#364728] hover:text-white font-bold px-8 py-4 rounded-full text-base transition-all"
              >
                <FaWhatsapp className="text-lg" /> Quero conhecer
              </a>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div variants={fadeInRight} className="relative">
            <div className="overflow-hidden shadow-2xl rounded-2xl h-[320px] md:h-[460px]">
              <img
                src={terrenoImg}
                alt="Terrenos à venda no condomínio Greenland, em Teresópolis"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#4a6838] rounded-2xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
