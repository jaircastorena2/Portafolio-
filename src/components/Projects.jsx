// ============================================
// COMPONENTE PROJECTS - Projects.jsx
// ============================================
// Sección de proyectos - En construcción

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function Projects() {
    const { language } = useLanguage()

    const title = language === 'es' ? 'Proyectos' : 'Projects'
    const subtitle = language === 'es'
        ? 'Algunos de mis trabajos más recientes'
        : 'Some of my most recent work'
    const workingTitle = language === 'es'
        ? '🚧 En Construcción'
        : '🚧 Under Construction'
    const workingMessage = language === 'es'
        ? 'Estoy trabajando en proyectos increíbles que pronto estarán disponibles aquí. ¡Mantente atento!'
        : "I'm working on amazing projects that will be available here soon. Stay tuned!"
    const comingSoon = language === 'es' ? 'Próximamente...' : 'Coming Soon...'

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">

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

                {/* Tarjeta de "En Construcción" */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="glass glass-hover rounded-2xl p-12 text-center border border-neon-purple/20">
                        {/* Icono animado */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="text-6xl mb-6"
                        >
                            🛠️
                        </motion.div>

                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            {workingTitle}
                        </h3>

                        <p className="text-text-muted text-lg mb-8 max-w-md mx-auto">
                            {workingMessage}
                        </p>

                        {/* Indicador de progreso animado */}
                        <div className="flex items-center justify-center gap-2 mb-6">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    className="w-3 h-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: i * 0.3
                                    }}
                                />
                            ))}
                        </div>

                        <p className="text-neon-cyan font-mono text-sm">
                            {comingSoon}
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Projects
