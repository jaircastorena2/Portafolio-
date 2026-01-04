// ============================================
// COMPONENTE CONTACT - Contact.jsx
// ============================================
// Sección de contacto con botones para LinkedIn, Email, WhatsApp y GitHub.
// Call-to-action claro para que los reclutadores se comuniquen.

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function Contact() {
    const { language } = useLanguage()
    // Datos de contacto de Carlos
    const contactInfo = {
        email: "jaircastorena2@gmail.com",
        linkedin: "https://www.linkedin.com/in/carlos-jair-castorena-jimenez-754188373",
        whatsapp1: "https://wa.me/5213325620240",
        whatsapp2: "https://wa.me/5218137037581",
    }

    return (
        <section id="contact" className="py-24 px-6 relative">
            {/* Fondo con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent pointer-events-none" />

            {/* Círculos decorativos */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-3xl mx-auto text-center relative z-10">

                {/* Título */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                            {language === 'es' ? '¿Trabajamos juntos?' : 'Let\'s work together?'}
                        </span>
                    </h2>
                    <p className="text-text-muted text-lg max-w-xl mx-auto mb-12">
                        {language === 'es'
                            ? 'Estoy abierto a nuevas oportunidades donde pueda aportar mis conocimientos en desarrollo de software e infraestructura crítica. ¡Hablemos!'
                            : 'I\'m open to new opportunities where I can contribute my knowledge in software development and critical infrastructure. Let\'s talk!'
                        }
                    </p>
                </motion.div>

                {/* Botones de contacto principales */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
                >
                    {/* BOTÓN DE EMAIL */}
                    <motion.a
                        href={`mailto:${contactInfo.email}`}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-8 py-4 w-full sm:w-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-xl opacity-100 group-hover:opacity-90 transition-opacity" />
                        <div className="absolute inset-[2px] bg-dark-bg rounded-[10px] group-hover:bg-dark-card transition-colors" />
                        <span className="relative flex items-center justify-center gap-3 text-white font-semibold">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Email
                        </span>
                    </motion.a>

                    {/* BOTÓN DE LINKEDIN */}
                    <motion.a
                        href={contactInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-8 py-4 w-full sm:w-auto overflow-hidden"
                    >
                        <div className="absolute inset-0 rounded-xl border-2 border-neon-cyan/50 group-hover:border-neon-cyan transition-colors" />
                        <div className="absolute inset-0 bg-neon-cyan/0 group-hover:bg-neon-cyan/10 transition-colors rounded-xl" />
                        <span className="relative flex items-center justify-center gap-3 text-neon-cyan font-semibold">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </span>
                    </motion.a>
                </motion.div>

                {/* Botones de WhatsApp */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    {/* WHATSAPP 1 */}
                    <motion.a
                        href={contactInfo.whatsapp1}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-6 py-3 w-full sm:w-auto overflow-hidden"
                    >
                        <div className="absolute inset-0 rounded-xl border-2 border-green-500/50 group-hover:border-green-500 transition-colors" />
                        <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors rounded-xl" />
                        <span className="relative flex items-center justify-center gap-3 text-green-400 font-semibold text-sm">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp (GDL)
                        </span>
                    </motion.a>

                    {/* WHATSAPP 2 */}
                    <motion.a
                        href={contactInfo.whatsapp2}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative px-6 py-3 w-full sm:w-auto overflow-hidden"
                    >
                        <div className="absolute inset-0 rounded-xl border-2 border-green-500/50 group-hover:border-green-500 transition-colors" />
                        <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-colors rounded-xl" />
                        <span className="relative flex items-center justify-center gap-3 text-green-400 font-semibold text-sm">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp (MTY)
                        </span>
                    </motion.a>
                </motion.div>

                {/* Información adicional */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-dark-border"
                >
                    <p className="text-text-muted text-sm font-mono">
                        📍 Disponible para trabajo remoto o presencial
                    </p>
                    <p className="text-text-muted text-xs mt-2">
                        Tiempo de respuesta: ~ 24 horas
                    </p>
                </motion.div>

            </div>
        </section>
    )
}

export default Contact
