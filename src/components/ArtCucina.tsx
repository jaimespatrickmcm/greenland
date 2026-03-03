import { motion } from 'framer-motion'
import { FaUtensils, FaStar, FaLeaf, FaGem, FaInstagram } from 'react-icons/fa'
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from '../variants'

interface Feature {
  icon: React.ReactNode
  title: string
  desc: string
}

const desktopVideoUrl = 'https://greenland.b-cdn.net/horizontal%20-%20camera%20-%20Teres%C3%B3polis_1.mp4'
const mobileVideoUrl = 'https://greenland.b-cdn.net/WhatsApp%20Video%202026-02-26%20at%2010.55.57.mp4'

const features: Feature[] = [
  {
    icon: <FaGem className="text-[#4a6838] text-xl" />,
    title: 'Exclusivo para condôminos e convidados',
    desc: 'Acesso privilegiado a uma das melhores experiências gastronômicas da Serra.',
  },
  {
    icon: <FaUtensils className="text-[#4a6838] text-xl" />,
    title: 'Gastronomia autoral premiada',
    desc: 'Menu refinado com ingredientes locais e técnicas contemporâneas.',
  },
  {
    icon: <FaLeaf className="text-[#4a6838] text-xl" />,
    title: 'Ambiente sofisticado na natureza',
    desc: 'Experiência gastronômica única em meio à Mata Atlântica.',
  },
  {
    icon: <FaStar className="text-[#4a6838] text-xl" />,
    title: 'Geração de valor ao condomínio',
    desc: 'Referência gastronômica que valoriza seu patrimônio e estilo de vida.',
  },
]

export default function ArtCucina(): React.JSX.Element {
  return (
    <section className="py-24 bg-[#273020]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left — Video */}
          <motion.div variants={fadeInLeft} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
              <video
                className="hidden lg:block w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={desktopVideoUrl} type="video/mp4" />
              </video>
              <video
                className="block lg:hidden w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={mobileVideoUrl} type="video/mp4" />
              </video>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#4a6838] rounded-2xl -z-10" />
          </motion.div>

          {/* Right — Content */}
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
              EXCLUSIVO GREENLAND
            </motion.p>
            <motion.h2
              variants={fadeInRight}
              className="font-heading text-3xl md:text-4xl text-white mb-3 leading-tight"
            >
              Restaurante{' '}
              <span className="text-[#4a6838]">Art Cucina</span>
            </motion.h2>
            <motion.p
              variants={fadeInRight}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              Um dos melhores restaurantes da Serra do Rio de Janeiro, dentro do seu 
              condomínio. Gastronomia autoral, ambiente sofisticado e uma experiência 
              exclusiva que agrega valor ao seu patrimônio.
            </motion.p>

            {/* Features */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-5 mb-8">
              {features.map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 flex-shrink-0 bg-white/10 rounded-full flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-white font-heading font-bold text-base mb-0.5">{title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Instagram */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.instagram.com/restauranteartcucina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#4a6838] font-semibold text-sm hover:text-white transition-colors"
              >
                <FaInstagram className="text-lg" /> @restauranteartcucina
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
