import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { FaTimes, FaRulerCombined, FaMapMarkerAlt, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import type { Lot } from '../data/lots'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface LotDetailModalProps {
  lot: Lot | null
  onClose: () => void
  onOpenSchedule: () => void
}

export default function LotDetailModal({ lot, onClose, onOpenSchedule }: LotDetailModalProps): React.JSX.Element {
  useEffect(() => {
    if (!lot) return

    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.overflow = 'hidden'
    document.body.style.width = '100%'

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.overflow = ''
      document.body.style.width = ''

      const html = document.documentElement
      html.style.scrollBehavior = 'auto'
      window.scrollTo(0, scrollY)
      requestAnimationFrame(() => {
        html.style.scrollBehavior = ''
      })
    }
  }, [lot])

  useEffect(() => {
    if (!lot) return
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [lot, onClose])

  const statusLabel = lot?.status === 'available' ? 'Disponível' : lot?.status === 'reserved' ? 'Reservado' : 'Vendido'
  const statusColor = lot?.status === 'available' ? 'bg-[#4a6838] text-white' : lot?.status === 'reserved' ? 'bg-orange-500 text-white' : 'bg-gray-500 text-white'

  return (
    <AnimatePresence>
      {lot && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          style={{
            background: 'rgba(0,0,0,0.85)',
            overscrollBehavior: 'contain',
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="relative bg-[#f3efe8] rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-black/80 text-white hover:text-[#8d4e27] transition-colors w-9 h-9 flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm"
              aria-label="Fechar detalhes do terreno"
            >
              <FaTimes className="text-base" />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Media Carousel */}
              <div className="w-full md:w-3/5 bg-[#273020]">
                {lot.media.length > 0 ? (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full aspect-[4/3]"
                  >
                    {lot.media.map((media, index) => (
                      <SwiperSlide key={index}>
                        {media.type === 'image' ? (
                          <img
                            src={media.src}
                            alt={media.alt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <video
                            src={media.src}
                            controls
                            className="w-full h-full object-cover"
                            preload="metadata"
                          />
                        )}
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className="w-full aspect-[4/3] flex items-center justify-center text-white/40">
                    <div className="text-center">
                      <FaMapMarkerAlt className="text-4xl mx-auto mb-2" />
                      <p className="text-sm">Fotos em breve</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Lot Details */}
              <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col">
                {/* Status badge */}
                <span className={`${statusColor} text-xs font-bold px-3 py-1 rounded-full w-fit mb-4`}>
                  {statusLabel}
                </span>

                <h2 className="font-heading text-2xl md:text-3xl text-[#273020] font-bold mb-2">
                  {lot.label}
                </h2>

                <div className="flex items-center gap-2 text-[#4a6838] mb-4">
                  <FaRulerCombined className="text-sm" />
                  <span className="font-semibold">{lot.area}</span>
                </div>

                {lot.price && lot.status !== 'sold' && (
                  <p className="text-[#8d4e27] font-bold text-lg mb-4">{lot.price}</p>
                )}

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {lot.description}
                </p>

                {lot.features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-heading text-sm font-bold text-[#273020] uppercase tracking-wider mb-3">
                      Diferenciais
                    </h3>
                    <ul className="space-y-2">
                      {lot.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <FaCheckCircle className="text-[#4a6838] text-xs flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto">
                  {lot.status === 'available' && (
                    <a
                      href="https://wa.me/5521980640955"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
                    >
                      <FaWhatsapp className="text-lg" /> Consultar Disponibilidade
                    </a>
                  )}
                  {lot.status === 'reserved' && (
                    <button
                      onClick={() => {
                        onClose()
                        setTimeout(onOpenSchedule, 300)
                      }}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
                    >
                      Consultar Reserva
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
