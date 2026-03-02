import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { fadeInUp, staggerContainer } from '../variants'
import 'swiper/css'
import { FaInstagram } from 'react-icons/fa'
import foto10 from '../assets/foto (10).jpeg'
import img0098 from '../assets/IMG_0098.webp'
import img0548 from '../assets/IMG_0548.webp'
import img8232 from '../assets/IMG_8232-HDR.webp'

interface CottageImage {
  src: string
  alt: string
}

const cottageImages: CottageImage[] = [
  {
    src: img8232,
    alt: 'Art Cucina no GREENLAND',
  },
  {
    src: img0548,
    alt: 'Art Cucina e lazer',
  },
  {
    src: img0098,
    alt: 'Área externa Art Cucina',
  },
  {
    src: foto10,
    alt: 'Casa rústica na floresta',
  },
]

export default function Clients(): React.JSX.Element {
  const scrollToContact = (): void => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-[#f3efe8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left */}
          <div>
            <motion.p
              variants={fadeInUp}
              className="text-[#4a6838] text-sm font-semibold tracking-widest uppercase mb-3"
            >
              GASTRONOMIA E ESTILO DE VIDA
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-[#273020] mb-5 leading-tight"
            >
              No coração da Serra, ao lado do melhor de Teresópolis
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-lg leading-relaxed mb-4"
            >
              O GREENLAND abriga a Art Green — pousada premiada e referência na Serra do Rio de Janeiro. O refúgio ideal para finais de semana ou investimento de longo prazo, a 12km do centro.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="bg-[#8d4e27]/10 border-l-4 border-[#8d4e27] rounded-r-xl p-4 mb-4"
            >
              <p className="text-[#273020] text-lg font-semibold leading-relaxed">
                O restaurante Art Cucina, um dos melhores da gastronomia da Serra, fica dentro do condomínio — seu quintal nunca foi tão especial.
              </p>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-base leading-relaxed mb-4 italic"
            >
              Seja um investidor — mas antes, experimente a energia do Greenland na Pousada Art Green.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-4">
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
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
                <div className="text-[#8d4e27] text-2xl font-heading font-bold">CONDOMÍNIO</div>
                <div className="text-[#273020] text-sm font-medium">Fechado e<br />Seguro</div>
              </div>
            </motion.div>
            <motion.button
              variants={fadeInUp}
              onClick={scrollToContact}
              className="bg-[#364728] hover:bg-[#2a3820] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Garantir Meu Terreno →
            </motion.button>
          </div>

          {/* Right — carrossel de imagens de cottages */}
          <motion.div variants={fadeInUp}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={2}
              spaceBetween={16}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              speed={800}
            >
              {cottageImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="rounded-2xl overflow-hidden h-48 shadow-md">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
