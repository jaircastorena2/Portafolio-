// ============================================
// COMPONENTE PROJECTS - Projects.jsx
// ============================================
// Sección de proyectos con galería animada

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

// Galería de imágenes del proyecto
const projectImages = [
    { src: '/gestion-financiera.png', label: { es: 'Dashboard Principal', en: 'Main Dashboard' } },
    { src: '/project-login.png', label: { es: 'Inicio de Sesión', en: 'Login' } },
    { src: '/project-dashboard-lavanda.png', label: { es: 'Tema Lavanda', en: 'Lavender Theme' } },
    { src: '/project-reportes.png', label: { es: 'Reportes Mensuales', en: 'Monthly Reports' } },
    { src: '/project-metas.png', label: { es: 'Metas de Ahorro', en: 'Savings Goals' } },
    { src: '/project-ajustes.png', label: { es: 'Ajustes y Temas', en: 'Settings & Themes' } },
    { src: '/project-monedas.png', label: { es: 'Multi-Moneda', en: 'Multi-Currency' } },
    { src: '/project-modal.png', label: { es: 'Nuevo Gasto', en: 'New Expense' } },
    { src: '/project-nueva-meta.png', label: { es: 'Crear Meta', en: 'Create Goal' } }
]

// Datos del proyecto
const projectData = {
    title: 'Gestión Financiera',
    demoUrl: 'https://gesti-n-financiera-euzp.vercel.app/',
    repoUrl: 'https://github.com/jaircastorena2/Gesti-n-financiera',
    frontend: ['React 18', 'Vite', 'Styled Components', 'Recharts', 'React Router', 'Axios'],
    backend: ['Node.js', 'Express', 'JWT', 'bcryptjs'],
    database: ['MySQL'],
    deployment: ['Vercel', 'Render', 'Railway'],
    description: {
        es: 'Aplicación Full Stack para gestión de finanzas personales con dashboard interactivo, autenticación segura y visualización de datos en tiempo real.',
        en: 'Full Stack application for personal finance management with interactive dashboard, secure authentication and real-time data visualization.'
    },
    features: {
        es: [
            { icon: '🔐', text: 'Autenticación JWT' },
            { icon: '📊', text: 'Gráficos Dinámicos' },
            { icon: '🎨', text: '3 Temas' },
            { icon: '💱', text: 'Multi-Moneda' },
            { icon: '🎯', text: 'Metas de Ahorro' },
            { icon: '📱', text: 'Responsive' }
        ],
        en: [
            { icon: '🔐', text: 'JWT Auth' },
            { icon: '📊', text: 'Dynamic Charts' },
            { icon: '🎨', text: '3 Themes' },
            { icon: '💱', text: 'Multi-Currency' },
            { icon: '🎯', text: 'Savings Goals' },
            { icon: '📱', text: 'Responsive' }
        ]
    }
}

// Variantes de animación
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: (direction) => ({ x: direction > 0 ? -300 : 300, opacity: 0, transition: { duration: 0.4, ease: 'easeIn' } })
}

function Projects() {
    const { language } = useLanguage()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(1)
    const [isHovered, setIsHovered] = useState(false)

    // Auto-play del carrusel
    useEffect(() => {
        if (isHovered) return
        const interval = setInterval(() => {
            setDirection(1)
            setCurrentIndex((prev) => (prev + 1) % projectImages.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [isHovered])

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1)
        setCurrentIndex(index)
    }

    const nextSlide = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % projectImages.length)
    }

    const prevSlide = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length)
    }

    const title = language === 'es' ? 'Proyectos' : 'Projects'
    const subtitle = language === 'es' ? 'Mis trabajos más recientes' : 'My most recent work'
    const viewDemo = language === 'es' ? 'Ver Demo' : 'View Demo'
    const viewCode = language === 'es' ? 'Ver Código' : 'View Code'
    const techStackTitle = language === 'es' ? 'Stack Tecnológico' : 'Tech Stack'

    return (
        <section id="projects" className="py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                    <p className="text-text-muted mb-4">{subtitle}</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
                </motion.div>

                {/* Project Card */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass rounded-2xl overflow-hidden border border-neon-purple/20"
                >
                    {/* Gallery Section */}
                    <motion.div
                        variants={itemVariants}
                        className="relative"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Badge */}
                        <div className="absolute top-4 left-4 z-20">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-neon-cyan to-neon-purple text-white rounded-full shadow-lg"
                            >
                                Full Stack App
                            </motion.span>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-dark-bg/80 hover:bg-dark-bg text-white rounded-full transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                            style={{ opacity: isHovered ? 1 : 0 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-dark-bg/80 hover:bg-dark-bg text-white rounded-full transition-all hover:scale-110"
                            style={{ opacity: isHovered ? 1 : 0 }}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Image Carousel */}
                        <div className="relative h-[300px] sm:h-[400px] md:h-[450px] overflow-hidden bg-dark-bg">
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={projectImages[currentIndex].src}
                                    alt={projectImages[currentIndex].label[language]}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="absolute inset-0 w-full h-full object-contain"
                                />
                            </AnimatePresence>
                        </div>

                        {/* Slide Indicators & Label */}
                        <div className="absolute bottom-4 left-0 right-0 z-20 flex flex-col items-center gap-2">
                            <span className="px-3 py-1 bg-dark-bg/80 text-white text-sm rounded-full">
                                {projectImages[currentIndex].label[language]}
                            </span>
                            <div className="flex gap-2">
                                {projectImages.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => goToSlide(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex
                                            ? 'w-6 bg-neon-cyan'
                                            : 'bg-white/50 hover:bg-white/80'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <motion.div
                            key={currentIndex}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: isHovered ? 0 : 1 }}
                            transition={{ duration: 4, ease: 'linear' }}
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple origin-left"
                        />
                    </motion.div>

                    {/* Content Section */}
                    <div className="p-6 md:p-8">
                        {/* Title & Description */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                {projectData.title}
                            </h3>
                            <p className="text-text-muted mb-6 leading-relaxed max-w-3xl">
                                {projectData.description[language]}
                            </p>
                        </motion.div>

                        {/* Features */}
                        <motion.div variants={itemVariants} className="mb-6">
                            <div className="flex flex-wrap gap-3">
                                {projectData.features[language].map((feature, idx) => (
                                    <motion.span
                                        key={idx}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white/5 text-white rounded-full border border-white/10 cursor-default"
                                    >
                                        <span>{feature.icon}</span>
                                        <span>{feature.text}</span>
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Tech Stack */}
                        <motion.div variants={itemVariants} className="mb-8">
                            <h4 className="text-sm font-semibold text-neon-purple uppercase tracking-wider mb-4">
                                {techStackTitle}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="space-y-2">
                                    <span className="text-xs text-neon-cyan font-medium">Frontend</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {projectData.frontend.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-2 py-1 text-xs bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-xs text-neon-purple font-medium">Backend</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {projectData.backend.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-2 py-1 text-xs bg-neon-purple/10 text-neon-purple border border-neon-purple/30 rounded cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-xs text-green-400 font-medium">Database</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {projectData.database.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-2 py-1 text-xs bg-green-400/10 text-green-400 border border-green-400/30 rounded cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <span className="text-xs text-orange-400 font-medium">Deploy</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {projectData.deployment.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-2 py-1 text-xs bg-orange-400/10 text-orange-400 border border-orange-400/30 rounded cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Action Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <motion.a
                                href={projectData.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)' }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg transition-all"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                {viewDemo}
                            </motion.a>
                            <motion.a
                                href={projectData.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, borderColor: 'white' }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 px-6 py-3 border border-text-muted/30 text-text-muted hover:text-white font-semibold rounded-lg transition-all"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                {viewCode}
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
