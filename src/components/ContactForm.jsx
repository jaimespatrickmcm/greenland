import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaClock, FaCheckCircle } from 'react-icons/fa'
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../variants'
import foto13 from '../assets/foto (13).jpeg'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    model: '',
    payment: '',
    message: '',
    agree: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!formData.name.trim()) e.name = 'Nome obrigatório'
    if (!formData.email.trim()) e.email = 'E-mail obrigatório'
    if (!formData.phone.trim()) e.phone = 'Telefone obrigatório'
    if (!formData.agree) e.agree = 'Você precisa concordar para continuar'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }))
    setErrors((p) => ({ ...p, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
    setTimeout(() => {
      window.open('https://wa.me/5500000000000?text=' + encodeURIComponent(
        `Olá! Tenho interesse em comprar um terreno no GREENLAND.\nNome: ${formData.name}\nTelefone: ${formData.phone}\nInteresse: ${formData.model || 'A definir'}`
      ), '_blank')
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${foto13})` }}
      />
      <div className="absolute inset-0 bg-[#1a2418]/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
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
              QUERO MEU TERRENO
            </motion.p>
            <motion.h2
              variants={fadeInLeft}
              className="font-heading text-3xl md:text-4xl text-white mb-5 leading-tight"
            >
              Fale com um consultor e garanta seu terreno{' '}
              <span className="text-[#e8a020]">agora!</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/75 text-lg leading-relaxed mb-8"
            >
              Apenas 35 terrenos na 1ª fase. Preencha o formulário e nossa equipe entrará em contato via WhatsApp para apresentar as melhores condições.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col gap-4">
              {[
                { Icon: FaMapMarkerAlt, text: 'Teresópolis, RJ — Serra do Rio de Janeiro', key: 'loc' },
                { Icon: FaPhone, text: 'Atendimento via WhatsApp', key: 'phone' },
                { Icon: FaClock, text: 'Segunda a Sábado, 08h–18h', key: 'clock' },
              ].map((item) => (
                <div key={item.key} className="flex items-center gap-3 text-white/80">
                  <item.Icon className="text-[#e8a020] text-xl flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>

            <div className="mt-8 w-16 h-1 bg-[#e8a020] rounded-full" />
          </motion.div>

          {/* Right form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <FaCheckCircle className="text-5xl text-[#2d5a27] mx-auto mb-4" />
                  <h3 className="font-heading text-2xl text-[#1a2418] mb-2">Mensagem enviada!</h3>
                  <p className="text-gray-500 mb-4">
                    Você será redirecionado para nosso WhatsApp em instantes.
                  </p>
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-full inline-block hover:bg-[#1fb855] transition-colors"
                  >
                    Abrir WhatsApp
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="font-heading text-xl text-[#1a2418] font-bold mb-2">
                    Preencha seus dados
                  </h3>

                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nome completo *"
                      className={`w-full border ${errors.name ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm focus:border-[#2d5a27]`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="E-mail *"
                      className={`w-full border ${errors.email ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Telefone / WhatsApp *"
                      className={`w-full border ${errors.phone ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  {/* Model */}
                  <select
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500"
                  >
                    <option value="">Interesse</option>
                    <option value="Terreno — À Vista">Terreno — À Vista (a partir de R$ 180.000)</option>
                    <option value="Terreno — Parcelado">Terreno — Parcelado (a partir de R$ 200.000)</option>
                    <option value="Financiamento Caixa (até 240x)">Ainda não sei</option>
                  </select>

                  {/* Payment */}
                  <select
                    name="payment"
                    value={formData.payment}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-500"
                  >
                    <option value="">Forma de Pagamento</option>
                    <option value="Entrada R$150k">A definir (a partir de R$ 180.000)</option>
                    <option value="Entrada R$200k">Parcelado (a partir de R$ 200.000)</option>
                    <option value="À vista">À vista</option>
                    <option value="A definir">A definir</option>
                  </select>

                  {/* Message */}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mensagem ou dúvida (opcional)"
                    rows={3}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none"
                  />

                  {/* Agree */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agree"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="mt-0.5 accent-[#2d5a27]"
                      />
                      <span className="text-xs text-gray-500 leading-relaxed">
                        Declaro que as informações são minhas e verdadeiras. Concordo em
                        ser contactado pelo GREENLAND.
                      </span>
                    </label>
                    {errors.agree && <p className="text-red-500 text-xs mt-1">{errors.agree}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#e8a020] hover:bg-[#c8881a] text-[#1a2418] font-bold py-4 rounded-xl text-base transition-all hover:scale-[1.02] shadow-lg"
                  >
                    Quero Saber Mais →
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
