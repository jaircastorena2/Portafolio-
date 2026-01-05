// ============================================
// COMPONENTE PROJECTS - Projects.jsx
// ============================================
// Sección de proyectos del portafolio

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

// Datos del proyecto con información completa
const projectData = {
    title: 'Gestión Financiera',
    image: '/gestion-financiera.png',
    demoUrl: 'https://gesti-n-financiera-euzp.vercel.app/',
    repoUrl: 'https://github.com/jaircastorena2/Gesti-n-financiera',

    // Stack tecnológico organizado por categoría
    frontend: ['React 18', 'Vite', 'Styled Components', 'Recharts', 'React Router', 'Axios'],
    backend: ['Node.js', 'Express', 'JWT', 'bcryptjs'],
    database: ['MySQL'],
    deployment: ['Vercel', 'Render', 'Railway'],

    description: {
        es: 'Aplicación Full Stack para gestión de finanzas personales con dashboard interactivo, autenticación segura y visualización de datos en tiempo real.',
        en: 'Full Stack application for personal finance management with interactive dashboard, secure authentication and real-time data visualization.'
    },

    // Características principales
    features: {
        es: [
            { icon: '🔐', text: 'Autenticación JWT' },
            { icon: '📊', text: 'Gráficos Dinámicos (Pie, Barras, Área)' },
            { icon: '🎨', text: '3 Temas Personalizables' },
            { icon: '💱', text: 'Multi-Moneda (MXN/USD/EUR)' },
            { icon: '🎯', text: 'Metas de Ahorro' },
            { icon: '📱', text: 'Diseño 100% Responsive' },
            { icon: '📅', text: 'Filtros por Fecha' },
            { icon: '📈', text: 'Reportes Mensuales' }
        ],
        en: [
            { icon: '🔐', text: 'JWT Authentication' },
            { icon: '📊', text: 'Dynamic Charts (Pie, Bar, Area)' },
            { icon: '🎨', text: '3 Customizable Themes' },
            { icon: '💱', text: 'Multi-Currency (MXN/USD/EUR)' },
            { icon: '🎯', text: 'Savings Goals' },
            { icon: '📱', text: '100% Responsive Design' },
            { icon: '📅', text: 'Date Filters' },
            { icon: '📈', text: 'Monthly Reports' }
        ]
    }
}

// Iconos para categorías de tecnología
const techCategories = {
    frontend: { label: { es: 'Frontend', en: 'Frontend' }, color: 'neon-cyan' },
    backend: { label: { es: 'Backend', en: 'Backend' }, color: 'neon-purple' },
    database: { label: { es: 'Base de Datos', en: 'Database' }, color: 'green-400' },
    deployment: { label: { es: 'Despliegue', en: 'Deployment' }, color: 'orange-400' }
}

function Projects() {
    const { language } = useLanguage()

    const title = language === 'es' ? 'Proyectos' : 'Projects'
    const subtitle = language === 'es'
        ? 'Algunos de mis trabajos más recientes'
        : 'Some of my most recent work'
    const viewDemo = language === 'es' ? 'Ver Demo' : 'View Demo'
    const viewCode = language === 'es' ? 'Ver Código' : 'View Code'
    const techStackTitle = language === 'es' ? 'Stack Tecnológico' : 'Tech Stack'
    const featuresTitle = language === 'es' ? 'Características' : 'Features'

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Título de sección */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {title}
                    </h2>
                    <p className="text-text-muted mb-4">{subtitle}</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
                </motion.div>

                {/* Tarjeta del Proyecto */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="glass rounded-2xl overflow-hidden border border-neon-purple/20 hover:border-neon-cyan/40 transition-all duration-300">

                        {/* Layout: Imagen + Contenido */}
                        <div className="grid lg:grid-cols-2 gap-0">

                            {/* Imagen del proyecto */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={projectData.image}
                                    alt={projectData.title}
                                    className="w-full h-full min-h-[300px] lg:min-h-[500px] object-cover object-top"
                                />
                                {/* Overlay con gradiente */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-bg-primary/50 lg:block hidden" />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent lg:hidden" />

                                {/* Badge Full Stack */}
                                <div className="absolute top-4 left-4">
                                    <span className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-neon-cyan to-neon-purple text-white rounded-full shadow-lg">
                                        Full Stack App
                                    </span>
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="p-6 md:p-8 flex flex-col justify-center">
                                {/* Título */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                    {projectData.title}
                                </h3>

                                {/* Descripción */}
                                <p className="text-text-muted mb-6 leading-relaxed">
                                    {projectData.description[language]}
                                </p>

                                {/* Características */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-neon-cyan uppercase tracking-wider mb-3">
                                        {featuresTitle}
                                    </h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {projectData.features[language].map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-text-muted">
                                                <span>{feature.icon}</span>
                                                <span>{feature.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stack Tecnológico */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-neon-purple uppercase tracking-wider mb-3">
                                        {techStackTitle}
                                    </h4>

                                    {/* Frontend */}
                                    <div className="mb-3">
                                        <span className="text-xs text-neon-cyan font-medium">Frontend:</span>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {projectData.frontend.map((tech, idx) => (
                                                <span key={idx} className="px-2 py-0.5 text-xs bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Backend */}
                                    <div className="mb-3">
                                        <span className="text-xs text-neon-purple font-medium">Backend:</span>
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {projectData.backend.map((tech, idx) => (
                                                <span key={idx} className="px-2 py-0.5 text-xs bg-neon-purple/10 text-neon-purple border border-neon-purple/30 rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Database & Deployment */}
                                    <div className="flex flex-wrap gap-4">
                                        <div>
                                            <span className="text-xs text-green-400 font-medium">Database:</span>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                {projectData.database.map((tech, idx) => (
                                                    <span key={idx} className="px-2 py-0.5 text-xs bg-green-400/10 text-green-400 border border-green-400/30 rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs text-orange-400 font-medium">Deploy:</span>
                                            <div className="flex flex-wrap gap-1 mt-1">
                                                {projectData.deployment.map((tech, idx) => (
                                                    <span key={idx} className="px-2 py-0.5 text-xs bg-orange-400/10 text-orange-400 border border-orange-400/30 rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Botones */}
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={projectData.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        {viewDemo}
                                    </a>
                                    <a
                                        href={projectData.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-6 py-3 border border-text-muted/30 text-text-muted hover:text-white hover:border-white font-semibold rounded-lg transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        {viewCode}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Projects
