import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function Contact() {
    const { language } = useLanguage()
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState('idle') // idle, sending, success, error

    // Datos de contacto
    const contactInfo = {
        email: "jaircastorena2@gmail.com",
        linkedin: "https://www.linkedin.com/in/carlos-jair-castorena-jimenez-754188373",
        whatsapp1: "https://wa.me/5213325620240",
        whatsapp2: "https://wa.me/5218137037581",
    }

    // Textos traducidos
    const texts = {
        title: language === 'es' ? '¿Trabajamos juntos?' : "Let's work together?",
        subtitle: language === 'es'
            ? 'Estoy abierto a nuevas oportunidades. ¡Envíame un mensaje!'
            : "I'm open to new opportunities. Send me a message!",
        nameLabel: language === 'es' ? 'Nombre' : 'Name',
        namePlaceholder: language === 'es' ? 'Tu nombre' : 'Your name',
        emailLabel: language === 'es' ? 'Correo electrónico' : 'Email',
        emailPlaceholder: language === 'es' ? 'tu@email.com' : 'your@email.com',
        messageLabel: language === 'es' ? 'Mensaje' : 'Message',
        messagePlaceholder: language === 'es'
            ? '¿En qué puedo ayudarte?'
            : 'How can I help you?',
        sendButton: language === 'es' ? 'Enviar Mensaje' : 'Send Message',
        sending: language === 'es' ? 'Enviando...' : 'Sending...',
        success: language === 'es' ? '¡Mensaje enviado! Te responderé pronto.' : 'Message sent! I\'ll reply soon.',
        error: language === 'es' ? 'Error al enviar. Intenta de nuevo.' : 'Error sending. Try again.',
        orContact: language === 'es' ? 'O contáctame directamente:' : 'Or contact me directly:',
        available: language === 'es' ? '📍 Disponible para trabajo remoto o presencial' : '📍 Available for remote or on-site work',
        response: language === 'es' ? 'Tiempo de respuesta: ~ 24 horas' : 'Response time: ~ 24 hours',
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus('sending')

        // Usando Formspree para enviar el formulario
        try {
            const response = await fetch('https://formspree.io/f/xzzdqvbw', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _replyto: formData.email,
                    _subject: `Nuevo mensaje de ${formData.name} - Portfolio`,
                }),
            })

            if (response.ok) {
                setStatus('success')
                setFormData({ name: '', email: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 5000)
            }
        } catch {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    return (
        <section id="contact" className="py-24 px-6 relative">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                            {texts.title}
                        </span>
                    </h2>
                    <p className="text-text-muted text-lg max-w-xl mx-auto">
                        {texts.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Formulario */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Nombre */}
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">
                                    {texts.nameLabel}
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder={texts.namePlaceholder}
                                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-neon-cyan transition-colors"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">
                                    {texts.emailLabel}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder={texts.emailPlaceholder}
                                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-neon-cyan transition-colors"
                                />
                            </div>

                            {/* Mensaje */}
                            <div>
                                <label className="block text-white text-sm font-medium mb-2">
                                    {texts.messageLabel}
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder={texts.messagePlaceholder}
                                    className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                                />
                            </div>

                            {/* Botón enviar */}
                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 ${status === 'success'
                                        ? 'bg-green-500 text-white'
                                        : status === 'error'
                                            ? 'bg-red-500 text-white'
                                            : 'bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg hover:shadow-lg hover:shadow-neon-cyan/25'
                                    }`}
                            >
                                {status === 'sending' && (
                                    <div className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin" />
                                )}
                                {status === 'idle' && '✉️'}
                                {status === 'success' && '✅'}
                                {status === 'error' && '❌'}

                                {status === 'idle' && texts.sendButton}
                                {status === 'sending' && texts.sending}
                                {status === 'success' && texts.success}
                                {status === 'error' && texts.error}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Información de contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col justify-center"
                    >
                        <p className="text-text-muted mb-6">{texts.orContact}</p>

                        {/* Botones de contacto */}
                        <div className="space-y-4">
                            {/* Email */}
                            <motion.a
                                href={`mailto:${contactInfo.email}`}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 p-4 glass rounded-xl hover:border-neon-cyan/30 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-medium">Email</p>
                                    <p className="text-text-muted text-sm">{contactInfo.email}</p>
                                </div>
                            </motion.a>

                            {/* LinkedIn */}
                            <motion.a
                                href={contactInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 p-4 glass rounded-xl hover:border-neon-cyan/30 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-medium">LinkedIn</p>
                                    <p className="text-text-muted text-sm">Carlos Jair Castorena</p>
                                </div>
                            </motion.a>

                            {/* WhatsApp */}
                            <motion.a
                                href={contactInfo.whatsapp1}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-4 p-4 glass rounded-xl hover:border-green-500/30 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-medium">WhatsApp</p>
                                    <p className="text-text-muted text-sm">+52 332 562 0240</p>
                                </div>
                            </motion.a>
                        </div>

                        {/* Info adicional */}
                        <div className="mt-8 pt-6 border-t border-dark-border">
                            <p className="text-text-muted text-sm">{texts.available}</p>
                            <p className="text-text-muted text-xs mt-1">{texts.response}</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
