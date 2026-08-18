import { motion } from 'framer-motion'
import type { IconType } from 'react-icons'
import { FaArrowRight, FaWhatsapp, FaCalendarAlt, FaConciergeBell, FaKey } from 'react-icons/fa'
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '../variants'
import { whatsappLink } from '../data/contact'
import imgSuites from '../assets/IMG_0099.webp'

interface Benefit {
  Icon: IconType
  title: string
  desc: string
}

const benefits: Benefit[] = [
  {
    Icon: FaCalendarAlt,
    title: 'Renda na temporada',
    desc: 'Sua suíte é alugada por diária o ano inteiro e você recebe a sua parte todo mês.',
  },
  {
    Icon: FaConciergeBell,
    title: 'Quem opera é o hotel',
    desc: 'Reservas, hóspedes, limpeza e manutenção ficam com o Art Green Boutique Hotel.',
  },
  {
    Icon: FaKey,
    title: 'Use quando quiser',
    desc: 'O imóvel é seu, com escritura no seu nome, e você reserva as suas datas na agenda.',
  },
]

const WHATSAPP_MESSAGE =
  'Olá! Vi no site do Greenland a venda de suítes para alugar na temporada e quero conhecer.'

export default function BuyAndRent(): React.JSX.Element {
  return (
    <section id="imoveis" className="py-24 bg-[#f3efe8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Esquerda — Imagem */}
          <motion.div variants={fadeInLeft} className="relative order-1 lg:order-none">
            <div className="overflow-hidden shadow-2xl rounded-2xl h-[320px] md:h-[420px]">
              <img
                src={imgSuites}
                alt="Suítes à beira do lago no condomínio Greenland, em Teresópolis"
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-[#4a6838] rounded-2xl -z-10" />
          </motion.div>

          {/* Direita — Conteúdo */}
          <motion.div variants={staggerContainer}>
            <motion.p
              variants={fadeInRight}
              className="text-[#4a6838] text-sm font-semibold tracking-widest uppercase mb-3"
            >
              IMÓVEIS PRONTOS PARA RENDA
            </motion.p>
            <motion.h2
              variants={fadeInRight}
              className="font-heading text-3xl md:text-4xl text-[#273020] mb-4 leading-tight"
            >
              Compre seu imóvel e{' '}
              <span className="text-[#364728]">alugue na temporada</span>
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-8"
            >
              Além dos terrenos, o Greenland agora vende suítes prontas e mobiliadas dentro do
              condomínio. Você compra o imóvel, o Art Green Boutique Hotel aluga por temporada
              para os hóspedes e você recebe a sua parte das diárias — sem precisar administrar
              nada.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col gap-5 mb-9">
              {benefits.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-[#364728]/10 rounded-full flex items-center justify-center">
                    <Icon className="text-[#4a6838] text-lg" />
                  </div>
                  <div>
                    <h3 className="text-[#273020] font-heading font-bold text-base mb-0.5">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <a
                href="/imoveis"
                className="inline-flex items-center justify-center gap-2 bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-8 py-4 rounded-full text-base transition-all shadow-lg hover:scale-105"
              >
                Ver as suítes à venda
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
        </motion.div>
      </div>
    </section>
  )
}
