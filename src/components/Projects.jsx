import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const projectImages = [
    { src: '/gestion-financiera.png', label: { es: 'Dashboard Principal', en: 'Main Dashboard' } },
    { src: '/project-login.png', label: { es: 'Inicio de Sesión', en: 'Login' } },
    { src: '/project-dashboard-lavanda.png', label: { es: 'Tema Lavanda', en: 'Lavender Theme' } },
    { src: '/project-atardecer.png', label: { es: 'Tema Atardecer', en: 'Sunset Theme' } },
    { src: '/project-reportes.png', label: { es: 'Reportes Mensuales', en: 'Monthly Reports' } },
    { src: '/project-metas.png', label: { es: 'Metas de Ahorro', en: 'Savings Goals' } },
    { src: '/project-ajustes.png', label: { es: 'Ajustes y Temas', en: 'Settings & Themes' } },
    { src: '/project-monedas.png', label: { es: 'Multi-Moneda', en: 'Multi-Currency' } },
    { src: '/project-modal.png', label: { es: 'Nuevo Gasto', en: 'New Expense' } },
    { src: '/project-nueva-meta.png', label: { es: 'Crear Meta', en: 'Create Goal' } }
]

const projectData = {
    title: 'Gestión Financiera',
    demoUrl: 'https://gesti-n-financiera-euzp.vercel.app/',
    repoUrl: 'https://github.com/jaircastorena2/Gesti-n-financiera',
    techStack: [
        { category: 'Frontend', color: 'cyan', items: ['React 18', 'Vite', 'Styled Components', 'Recharts'] },
        { category: 'Backend', color: 'purple', items: ['Node.js', 'Express', 'JWT'] },
        { category: 'Database', color: 'green', items: ['MySQL'] },
        { category: 'Deploy', color: 'orange', items: ['Vercel', 'Render', 'Railway'] },
    ],
    description: {
        es: 'Aplicación Full Stack para gestión de finanzas personales con dashboard interactivo, autenticación segura y visualización de datos en tiempo real.',
        en: 'Full Stack application for personal finance management with interactive dashboard, secure authentication and real-time data visualization.'
    },
    features: {
        es: ['🔐 Auth JWT', '📊 Gráficos', '🎨 3 Temas', '💱 Multi-Moneda', '🎯 Metas', '📱 Responsive'],
        en: ['🔐 JWT Auth', '📊 Charts', '🎨 3 Themes', '💱 Multi-Currency', '🎯 Goals', '📱 Responsive']
    }
}

const colorMap = {
    cyan: { bg: 'bg-neon-cyan/10', text: 'text-neon-cyan', border: 'border-neon-cyan/30' },
    purple: { bg: 'bg-neon-purple/10', text: 'text-neon-purple', border: 'border-neon-purple/30' },
    green: { bg: 'bg-green-400/10', text: 'text-green-400', border: 'border-green-400/30' },
    orange: { bg: 'bg-orange-400/10', text: 'text-orange-400', border: 'border-orange-400/30' },
}

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }
const itemVariants = { hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }

function Projects() {
    const { language } = useLanguage()
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(1)
    const [isHovered, setIsHovered] = useState(false)

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

    const title = language === 'es' ? 'Proyectos' : 'Projects'
    const viewDemo = language === 'es' ? 'Ver Demo' : 'View Demo'
    const viewCode = language === 'es' ? 'Ver Código' : 'View Code'

    return (
        <section id="projects" className="py-16 md:py-20 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
                </motion.div>

                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-2xl overflow-hidden border border-white/10">
                    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <div className="absolute top-3 left-3 z-20">
                            <span className="px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-neon-cyan to-neon-purple text-white rounded-full">Full Stack</span>
                        </div>

                        <div className="relative h-[220px] sm:h-[320px] md:h-[400px] overflow-hidden bg-dark-bg/50">
                            <AnimatePresence initial={false} mode="wait">
                                <motion.img
                                    key={currentIndex}
                                    src={projectImages[currentIndex].src}
                                    alt={projectImages[currentIndex].label[language]}
                                    initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 w-full h-full object-contain"
                                />
                            </AnimatePresence>
                        </div>

                        <div className="absolute bottom-3 left-0 right-0 z-20 flex flex-col items-center gap-2">
                            <span className="px-2 py-1 bg-dark-bg/80 text-white text-xs rounded-full">{projectImages[currentIndex].label[language]}</span>
                            <div className="flex gap-1.5">
                                {projectImages.map((_, idx) => (
                                    <button key={idx} onClick={() => goToSlide(idx)} className={`h-1.5 rounded-full transition-all ${idx === currentIndex ? 'w-4 bg-neon-cyan' : 'w-1.5 bg-white/40'}`} />
                                ))}
                            </div>
                        </div>

                        {!isHovered && (
                            <motion.div key={currentIndex} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 4, ease: 'linear' }} className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple origin-left" />
                        )}
                    </div>

                    <div className="p-4 sm:p-6">
                        <motion.h3 variants={itemVariants} className="text-xl sm:text-2xl font-bold text-white mb-2">{projectData.title}</motion.h3>
                        <motion.p variants={itemVariants} className="text-text-muted text-sm mb-4 leading-relaxed">{projectData.description[language]}</motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-4">
                            {projectData.features[language].map((feature, idx) => (
                                <span key={idx} className="text-xs text-white/80 bg-white/5 px-2 py-1 rounded-full">{feature}</span>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-5">
                            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                {projectData.techStack.map((stack, idx) => (
                                    <div key={idx} className="flex-shrink-0">
                                        <span className={`text-xs font-medium ${colorMap[stack.color].text} block mb-1.5`}>{stack.category}</span>
                                        <div className="flex gap-1">
                                            {stack.items.map((tech, i) => (
                                                <span key={i} className={`px-2 py-0.5 text-xs ${colorMap[stack.color].bg} ${colorMap[stack.color].text} border ${colorMap[stack.color].border} rounded whitespace-nowrap`}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex gap-3">
                            <a href={projectData.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neon-cyan to-neon-purple text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/20 transition-all">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                {viewDemo}
                            </a>
                            <a href={projectData.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 border border-white/20 text-white/80 hover:text-white text-sm font-semibold rounded-lg hover:border-white/40 transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                {viewCode}
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
