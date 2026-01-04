// ============================================
// COMPONENTE HERO - Hero.jsx
// ============================================
// Sección principal profesional con foto y formato </typewriter>

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function Hero() {
    const { t, language } = useLanguage()
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    const roles = t.hero.roles

    // Efecto typewriter
    useEffect(() => {
        const currentRole = roles[roleIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentRole.length) {
                    setDisplayedText(currentRole.slice(0, displayedText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1))
                } else {
                    setIsDeleting(false)
                    setRoleIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [displayedText, isDeleting, roleIndex, roles])

    // Reset cuando cambia el idioma
    useEffect(() => {
        setDisplayedText('')
        setRoleIndex(0)
        setIsDeleting(false)
    }, [language])

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    // Links de redes sociales con Gmail
    const socialLinks = [
        {
            name: 'GitHub',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
            url: 'https://github.com/carlosjair'
        },
        {
            name: 'LinkedIn',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
            url: 'https://linkedin.com/in/carlos-jair-castorena'
        },
        {
            name: 'Gmail',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg',
            url: 'mailto:jaircastorena2@gmail.com'
        },
    ]

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Gradientes de fondo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-purple/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-3xl" />
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Columna izquierda - Texto */}
                    <div className="text-left">
                        {/* Saludo */}
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-lg text-text-muted mb-2"
                        >
                            {language === 'es' ? 'Hola, Soy' : "Hello, I'm"}
                        </motion.p>

                        {/* Nombre grande */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                        >
                            <span className="bg-gradient-to-r from-neon-cyan via-white to-neon-purple bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
                                Carlos Jair
                            </span>
                        </motion.h1>

                        {/* Role con typewriter en formato </> */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl md:text-2xl text-text-muted mb-6 h-8"
                        >
                            <span className="text-neon-cyan">&lt;</span>
                            <span className="text-white font-mono">{displayedText}</span>
                            <span className="text-neon-purple animate-pulse">|</span>
                            <span className="text-neon-cyan">/&gt;</span>
                        </motion.div>

                        {/* Descripción */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-text-muted leading-relaxed mb-6 max-w-lg"
                        >
                            {t.hero.description}{' '}
                            <span className="text-neon-cyan">{t.hero.support}</span>,{' '}
                            <span className="text-neon-purple">{t.hero.networks}</span>{' '}
                            {language === 'es' ? 'y' : 'and'}{' '}
                            <span className="text-white">{t.hero.systems}</span>.{' '}
                            {t.hero.passionate}
                        </motion.p>

                        {/* Badge de disponibilidad */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm mb-6"
                        >
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            {t.hero.available}
                        </motion.div>

                        {/* Redes sociales (GitHub, LinkedIn, Gmail) */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target={social.name === 'Gmail' ? '_self' : '_blank'}
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-neon-cyan/10 hover:border-neon-cyan/30 transition-all"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    title={social.name === 'Gmail' ? 'jaircastorena2@gmail.com' : social.name}
                                >
                                    <img src={social.icon} alt={social.name} className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Botones CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.button
                                onClick={() => scrollToSection('about')}
                                className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/25 transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {language === 'es' ? 'Sobre Mí' : 'About Me'}
                            </motion.button>

                            <motion.a
                                href="/cv-carlos-castorena.pdf"
                                download
                                className="px-6 py-3 glass border border-neon-cyan/30 text-white font-bold rounded-lg hover:bg-neon-cyan/10 transition-all flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                📄 CV
                            </motion.a>
                        </motion.div>
                    </div>

                    {/* Columna derecha - Foto */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:flex items-center justify-center"
                    >
                        <div className="relative">
                            {/* Círculo de fondo con gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full blur-3xl scale-125" />

                            {/* Foto en círculo */}
                            <motion.div
                                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-neon-cyan/30 cursor-pointer"
                                animate={{
                                    boxShadow: [
                                        '0 0 30px rgba(0, 245, 255, 0.3)',
                                        '0 0 60px rgba(191, 0, 255, 0.3)',
                                        '0 0 30px rgba(0, 245, 255, 0.3)'
                                    ]
                                }}
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: '#00f5ff',
                                    boxShadow: '0 0 80px rgba(0, 245, 255, 0.5), 0 0 120px rgba(191, 0, 255, 0.3)'
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src="/images/carlos-jair.jpg"
                                    alt="Carlos Jair Castorena"
                                    className="w-full h-full object-cover object-top"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Hero
