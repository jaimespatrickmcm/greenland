import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { fadeInUp, staggerContainer } from '../variants'
import 'swiper/css'
import foto7 from '../assets/foto (7).jpeg'
import foto8 from '../assets/foto (8).jpeg'
import foto9 from '../assets/foto (9).jpeg'
import foto10 from '../assets/foto (10).jpeg'

const cottageImages = [
  {
    src: foto7,
    alt: 'Cottage GREENLAND na floresta',
  },
  {
    src: foto8,
    alt: 'Chalé moderno GREENLAND',
  },
  {
    src: foto9,
    alt: 'Casa campo GREENLAND',
  },
  {
    src: foto10,
    alt: 'Casa rústica na floresta',
  },
]

export default function Clients() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-[#f5f2ed]">
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
              className="text-[#5a8a3c] text-sm font-semibold tracking-widest uppercase mb-3"
            >
              EXPERIÊNCIA GARANTIDA
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-3xl md:text-4xl text-[#1a2418] mb-5 leading-tight"
            >
              Conheça o ARTGREEN antes de decidir
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-lg leading-relaxed mb-6"
            >
              O GREENLAND nasce dentro do ARTGREEN — pousada premiada e cercada pela
              natureza de Teresópolis. Se você decidir investir após a hospedagem, o
              valor da sua diária será descontado do total do investimento.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-sm flex items-center gap-3">
                <div className="text-[#e8a020] text-2xl font-heading font-bold">100%</div>
                <div className="text-[#1a2418] text-sm font-medium">Legalizado<br />e Regularizado</div>
              </div>
            </motion.div>
            <motion.button
              variants={fadeInUp}
              onClick={scrollToContact}
              className="bg-[#2d5a27] hover:bg-[#1a3a18] text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Investir Agora →
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
