import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import Cal from '@calcom/embed-react'

interface ScheduleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScheduleModal({ isOpen, onClose }: ScheduleModalProps): React.JSX.Element {
  // Incrementing key forces Cal to create a fresh instance on every open
  const [calKey, setCalKey] = useState(0)

  useEffect(() => {
    if (!isOpen) return

    setCalKey((k) => k + 1)

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

      // Desabilita smooth scroll para restaurar posição instantaneamente
      const html = document.documentElement
      html.style.scrollBehavior = 'auto'
      window.scrollTo(0, scrollY)
      // Reativa smooth scroll no próximo frame
      requestAnimationFrame(() => {
        html.style.scrollBehavior = ''
      })
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center"
          style={{
            width: '100dvw',
            height: '100dvh',
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
            className="relative"
            style={{
              width: 'min(calc(100dvw - 0.5rem), 80rem)',
              height: 'calc(100dvh - 2rem)',
              maxHeight: '900px',
            }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            {/* Close button inside modal bounds for mobile */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-20 bg-black/60 hover:bg-black/80 text-white hover:text-[#8d4e27] transition-colors w-9 h-9 flex items-center justify-center rounded-full shadow-lg backdrop-blur-sm"
              aria-label="Fechar agendamento"
            >
              <FaTimes className="text-base" />
            </button>

            <div
              className="bg-white rounded-2xl shadow-2xl"
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                contain: 'layout paint',
              }}
            >
              <Cal
                key={calKey}
                calLink="greenland-teresopolis-rt3xiy"
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'auto',
                }}
                config={{ layout: 'month_view' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}