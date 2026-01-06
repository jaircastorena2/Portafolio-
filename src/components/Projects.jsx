// ============================================
// COMPONENTE PROJECTS - Projects.jsx
// ============================================
// Sección de proyectos con diseño premium

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

// Datos del proyecto
const projectData = {
    title: 'Gestión Financiera',
    image: '/gestion-financiera.png',
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

const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } }
}

function Projects() {
    const { language } = useLanguage()

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
                    {/* Image Section */}
                    <motion.div variants={itemVariants} className="relative">
                        {/* Badge */}
                        <div className="absolute top-4 left-4 z-10">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-neon-cyan to-neon-purple text-white rounded-full shadow-lg"
                            >
                                Full Stack App
                            </motion.span>
                        </div>

                        <img
                            src={projectData.image}
                            alt={projectData.title}
                            className="w-full h-auto max-h-[500px] object-contain bg-dark-bg"
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
                                        variants={badgeVariants}
                                        className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white/5 text-white rounded-full border border-white/10"
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
                                {/* Frontend */}
                                <div className="space-y-2">
                                    <span className="text-xs text-neon-cyan font-medium">Frontend</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {projectData.frontend.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                variants={badgeVariants}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-2 py-1 text-xs bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                {/* Backend */}
                                <div className="space-y-2">
                                    <span className="text-xs text-neon-purple font-medium">Backend</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {projectData.backend.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                variants={badgeVariants}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-2 py-1 text-xs bg-neon-purple/10 text-neon-purple border border-neon-purple/30 rounded cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                {/* Database */}
                                <div className="space-y-2">
                                    <span className="text-xs text-green-400 font-medium">Database</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {projectData.database.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                variants={badgeVariants}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-2 py-1 text-xs bg-green-400/10 text-green-400 border border-green-400/30 rounded cursor-default"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                                {/* Deploy */}
                                <div className="space-y-2">
                                    <span className="text-xs text-orange-400 font-medium">Deploy</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {projectData.deployment.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                variants={badgeVariants}
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
