import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function Hero() {
    const { language } = useLanguage()
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    const roles = useMemo(() => language === 'es'
        ? ['Desarrollador Jr.', 'Apasionado por el código', 'En constante aprendizaje', 'Trabajo en equipo', 'Orientado a resultados', 'Backend & Frontend', 'Código limpio', 'Bases de datos SQL']
        : ['Jr. Developer', 'Passionate about code', 'Always learning', 'Team player', 'Results-oriented', 'Backend & Frontend', 'Clean code', 'SQL Databases']
        , [language])

    const texts = {
        name: 'Carlos Jair Castorena',
        available: language === 'es' ? 'Disponible para trabajar' : 'Available to work',
        description: language === 'es'
            ? 'Desarrollador de software con formación en Ingeniería en Tecnologías de la Información, en búsqueda de una oportunidad laboral para integrarme a un equipo de desarrollo y crecer profesionalmente.'
            : 'Software developer with a background in Information Technology Engineering, looking for a job opportunity to join a development team and grow professionally.',
        aboutMe: language === 'es' ? 'Sobre Mí' : 'About Me',
    }

    const socialLinks = [
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', url: 'https://github.com/jaircastorena2' },
        { name: 'LinkedIn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg', url: 'https://linkedin.com/in/carlos-jair-castorena' },
        { name: 'Email', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg', url: 'mailto:jaircastorena2@gmail.com' },
    ]

    useEffect(() => {
        const currentRole = roles[roleIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentRole.slice(0, displayText.length - 1))
                } else {
                    setIsDeleting(false)
                    setRoleIndex((prev) => (prev + 1) % roles.length)
                }
            }
        }, isDeleting ? 50 : 100)
        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, roleIndex, roles])

    return (
        <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-10 w-96 h-96 bg-neon-purple/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-center">

                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-green-500/10 rounded-full border border-green-500/20"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-green-400 text-sm font-medium">{texts.available}</span>
                        </motion.div>

                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-neon-cyan text-xl font-semibold block mb-2"
                        >
                            {texts.name}
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4"
                        >
                            Desarrollador de Software{' '}
                            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                                Entry Level
                            </span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-2 text-lg md:text-xl font-mono mb-6"
                        >
                            <span className="text-neon-purple">&lt;</span>
                            <span className="text-neon-cyan">{displayText}</span>
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                                className="text-white"
                            >
                                _
                            </motion.span>
                            <span className="text-neon-purple">/&gt;</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-text-muted text-base md:text-lg max-w-xl mb-8"
                        >
                            {texts.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <a
                                href="#about"
                                className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-bold rounded-xl hover:opacity-90 transition-opacity"
                            >
                                {texts.aboutMe}
                            </a>
                            <a
                                href="/cv-carlos-castorena.pdf"
                                target="_blank"
                                className="px-6 py-3 border border-white/20 text-white font-medium rounded-xl hover:border-neon-cyan/50 hover:bg-neon-cyan/5 transition-all"
                            >
                                📄 CV
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="flex gap-3"
                        >
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target={social.name !== 'Email' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all"
                                >
                                    <img src={social.icon} alt={social.name} className="w-5 h-5" />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-5 order-1 lg:order-2 flex justify-center"
                    >
                        <div className="relative">
                            {/* Órbita externa */}
                            <div className="absolute inset-[-25px] border border-dashed border-neon-purple/20 rounded-full animate-spin-slow" />
                            {/* Órbita interna */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-10px] border border-dashed border-neon-cyan/30 rounded-full"
                            />

                            {/* Contenedor de foto con animación */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                animate={{
                                    boxShadow: [
                                        '0 0 30px rgba(0, 245, 255, 0.3)',
                                        '0 0 50px rgba(191, 0, 255, 0.3)',
                                        '0 0 30px rgba(0, 245, 255, 0.3)'
                                    ]
                                }}
                                transition={{
                                    boxShadow: { duration: 3, repeat: Infinity },
                                    scale: { duration: 0.3 }
                                }}
                                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-neon-cyan/30 cursor-pointer"
                            >
                                <img
                                    src="/images/carlos-jair.jpg"
                                    alt="Carlos Jair Castorena"
                                    className="w-full h-full object-cover object-top"
                                    loading="eager"
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
