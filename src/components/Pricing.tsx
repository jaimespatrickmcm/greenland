import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../variants'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { FaSearchPlus, FaSearchMinus, FaExpand, FaTimes } from 'react-icons/fa'
import MasterplanPDFViewer from './MasterplanPDFViewer'

interface PricingProps {
  onOpenSchedule: () => void
}

export default function Pricing({ onOpenSchedule }: PricingProps): React.JSX.Element {
  const [showOverlay, setShowOverlay] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const hideTimer = useRef<ReturnType<typeof setTimeout>>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleWheel = useCallback((e: WheelEvent) => {
    if (e.ctrlKey) return
    setShowOverlay(true)
    if (hideTimer.current) clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setShowOverlay(false), 1500)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    el.addEventListener('wheel', handleWheel, { passive: true })
    return () => { el.removeEventListener('wheel', handleWheel); if (hideTimer.current) clearTimeout(hideTimer.current) }
  }, [handleWheel])

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

        {/* Mapa do Empreendimento com Zoom */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div
            ref={containerRef}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            style={{ maxHeight: '80dvh' }}
          >
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={4}
              wheel={{ step: 0.1, activationKeys: ['Control'] }}
              doubleClick={{ mode: 'zoomIn' }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  {/* Zoom controls */}
                  <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                    <button
                      onClick={() => zoomIn()}
                      className="bg-[#273020]/80 hover:bg-[#273020] text-white w-10 h-10 flex items-center justify-center backdrop-blur-sm shadow-lg transition-colors"
                      aria-label="Zoom in"
                    >
                      <FaSearchPlus className="text-sm" />
                    </button>
                    <button
                      onClick={() => zoomOut()}
                      className="bg-[#273020]/80 hover:bg-[#273020] text-white w-10 h-10 flex items-center justify-center backdrop-blur-sm shadow-lg transition-colors"
                      aria-label="Zoom out"
                    >
                      <FaSearchMinus className="text-sm" />
                    </button>
                    <button
                      onClick={() => { resetTransform(); setModalOpen(true) }}
                      className="bg-[#273020]/80 hover:bg-[#273020] text-white w-10 h-10 flex items-center justify-center backdrop-blur-sm shadow-lg transition-colors"
                      aria-label="Expandir mapa em tela cheia"
                    >
                      <FaExpand className="text-sm" />
                    </button>
                  </div>

                  <TransformComponent
                    wrapperStyle={{ width: '100%', maxHeight: '80dvh', overflow: 'hidden' }}
                    contentStyle={{ width: '100%' }}
                  >
                    <MasterplanPDFViewer maxHeight="80dvh" />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>

            {/* Overlay: instrução de CTRL+scroll */}
            {showOverlay && (
              <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-[2px] flex items-center justify-center pointer-events-none transition-opacity duration-200">
                <span className="text-white text-lg font-semibold bg-black/50 px-6 py-3 rounded-full">
                  Segure <kbd className="bg-white/20 px-2 py-0.5 rounded mx-1">Ctrl</kbd> + scroll para zoom
                </span>
              </div>
            )}

            {/* Gradient overlay (desktop only) */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#273020] to-transparent h-32 pointer-events-none" />
            <div className="hidden md:flex absolute bottom-6 left-6 right-6 flex-row items-end justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-white font-bold mb-1">
                  Mapa do Empreendimento
                </h3>
                <p className="text-white/70 text-sm">Vista aérea dos terrenos — 1ª Fase</p>
              </div>
              <button
                onClick={onOpenSchedule}
                className="bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg whitespace-nowrap"
              >
                Consultar Disponibilidade
              </button>
            </div>
          </div>

          {/* Mobile: título e CTA abaixo do visualizador */}
          <div className="md:hidden mt-6 flex flex-col items-start gap-4">
            <div>
              <h3 className="font-heading text-xl text-white font-bold mb-1">
                Mapa do Empreendimento
              </h3>
              <p className="text-white/70 text-sm">Vista aérea dos terrenos — 1ª Fase</p>
            </div>
            <button
              onClick={onOpenSchedule}
              className="w-full bg-[#8d4e27] hover:bg-[#7a4220] text-white font-bold px-6 py-3 rounded-full transition-all hover:scale-[1.02] shadow-lg"
            >
              Consultar Disponibilidade
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal fullscreen mobile */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 bg-[#273020]">
            <h3 className="text-white font-heading text-lg">Mapa do Empreendimento</h3>
            <button
              onClick={() => setModalOpen(false)}
              className="text-white/80 hover:text-white w-10 h-10 flex items-center justify-center"
              aria-label="Fechar"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <TransformWrapper
              initialScale={1}
              minScale={0.5}
              maxScale={6}
              doubleClick={{ mode: 'zoomIn' }}
              pinch={{ step: 5 }}
            >
              {({ zoomIn, zoomOut, resetTransform }) => (
                <>
                  <div className="absolute bottom-20 right-4 z-10 flex flex-col gap-2">
                    <button
                      onClick={() => zoomIn()}
                      className="bg-white/20 text-white w-10 h-10 flex items-center justify-center backdrop-blur-sm rounded-full shadow-lg"
                      aria-label="Zoom in"
                    >
                      <FaSearchPlus className="text-sm" />
                    </button>
                    <button
                      onClick={() => zoomOut()}
                      className="bg-white/20 text-white w-10 h-10 flex items-center justify-center backdrop-blur-sm rounded-full shadow-lg"
                      aria-label="Zoom out"
                    >
                      <FaSearchMinus className="text-sm" />
                    </button>
                    <button
                      onClick={() => resetTransform()}
                      className="bg-white/20 text-white w-10 h-10 flex items-center justify-center backdrop-blur-sm rounded-full shadow-lg"
                      aria-label="Resetar zoom"
                    >
                      <FaExpand className="text-sm" />
                    </button>
                  </div>
                  <TransformComponent
                    wrapperStyle={{ width: '100%', height: '100%' }}
                    contentStyle={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <MasterplanPDFViewer maxHeight="100dvh" />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        </div>
      )}
    </section>
  )
}
