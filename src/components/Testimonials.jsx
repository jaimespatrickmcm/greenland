import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { fadeInLeft, fadeInUp, staggerContainer } from '../variants'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    quote: 'Desde que investi no GREENLAND, tenho recebido rendimento todo mês sem me preocupar com nada. A gestão do ARTGREEN cuida de tudo.',
    name: 'Carlos Mendes',
    role: 'Empresário, SP',
    avatar: 'https://ui-avatars.com/api/?name=Carlos+Mendes&background=2d5a27&color=fff&size=80',
  },
  {
    quote: 'Finalmente um investimento que alia patrimônio real, natureza e retorno mensal. Meu loft já está pagando mais do que a poupança.',
    name: 'Fernanda Rocha',
    role: 'Dentista, RJ',
    avatar: 'https://ui-avatars.com/api/?name=Fernanda+Rocha&background=e8a020&color=fff&size=80',
  },
  {
    quote: 'Visitei o ARTGREEN antes de decidir e me apaixonei. O desconto da diária no investimento foi o que me convenceu.',
    name: 'Roberto Lima',
    role: 'Engenheiro, MG',
    avatar: 'https://ui-avatars.com/api/?name=Roberto+Lima&background=5a8a3c&color=fff&size=80',
  },
  {
    quote: 'Comprei na planta e já estou vendo valorização. O processo foi totalmente transparente e seguro.',
    name: 'Ana Paula Costa',
    role: 'Advogada, RJ',
    avatar: 'https://ui-avatars.com/api/?name=Ana+Paula&background=2d5a27&color=fff&size=80',
  },
  {
    quote: 'Parece incrível, mas é real: recebo rendimento mensal e ainda uso meu loft nas férias com a família.',
    name: 'Marcos Souza',
    role: 'Médico, SP',
    avatar: 'https://ui-avatars.com/api/?name=Marcos+Souza&background=e8a020&color=fff&size=80',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#1a2418]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left title */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#e8a020] text-sm font-semibold tracking-widest uppercase mb-3"
            >
              O QUE DIZEM OS INVESTIDORES
            </motion.p>
            <motion.h2
              variants={fadeInLeft}
              className="font-heading text-3xl md:text-4xl text-white mb-6 leading-tight"
            >
              Histórias reais de quem já apostou no{' '}
              <span className="text-[#5a8a3c]">GREENLAND</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-white/60 text-lg leading-relaxed">
              Centenas de investidores já garantiram suas unidades. Veja o que eles
              têm a dizer sobre a experiência de investir no GREENLAND.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-3">
                {['CM', 'FR', 'RL', 'AP', 'MS'].map((initials) => (
                  <img
                    key={initials}
                    src={`https://ui-avatars.com/api/?name=${initials}&background=2d5a27&color=fff&size=40`}
                    alt="Investidor"
                    className="w-10 h-10 rounded-full border-2 border-[#1a2418]"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#e8a020] text-sm" />
                  ))}
                </div>
                <div className="text-white/60 text-sm">+200 investidores satisfeitos</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right swiper */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={24}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 1 },
              }}
              className="pb-10"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <FaQuoteLeft className="text-[#e8a020] text-3xl mb-4 opacity-60" />
                    <p className="text-white/85 text-lg leading-relaxed mb-6 italic">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#e8a020]"
                      />
                      <div>
                        <div className="text-white font-semibold">{t.name}</div>
                        <div className="text-white/50 text-sm">{t.role}</div>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <FaStar key={j} className="text-[#e8a020] text-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
