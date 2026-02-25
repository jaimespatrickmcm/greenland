import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../variants'

const stats = [
  { value: 35, suffix: '', label: 'Terrenos — 1ª Fase', desc: 'Unidades limitadas disponíveis agora' },
  { value: 20000, suffix: 'm²', label: 'de Lazer', desc: 'Maior estrutura de lazer de Teresópolis' },
  { value: 12, suffix: 'km', label: 'do Centro', desc: 'Estrada pavimentada até a entrada' },
  { value: 240, suffix: 'x', label: 'pela Caixa', desc: 'Financiamento em até 240 parcelas' },
]

function Counter({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps = 60
          const increment = value / steps
          const interval = duration / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, interval)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Mobile: card único com stats empilhadas */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="md:hidden bg-white border border-[#2d5a27]/20 rounded-2xl p-8"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-6 ${i < stats.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="text-3xl font-heading font-bold text-[#e8a020] mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#1a2418] font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Desktop: grid de 4 cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="hidden md:grid grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="bg-white border border-[#2d5a27]/20 rounded-2xl p-8 text-center hover:border-[#2d5a27]/50 hover:shadow-md transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-heading font-bold text-[#e8a020] mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[#1a2418] font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
