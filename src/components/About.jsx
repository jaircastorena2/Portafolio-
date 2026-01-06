import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

function About() {
    const { t, language } = useLanguage()

    const highlights = [
        { icon: "🎓", text: t.about.highlights.graduated },
        { icon: "💻", text: t.about.highlights.software },
        { icon: "🗃️", text: t.about.highlights.data },
        { icon: "🐍", text: t.about.highlights.languages },
    ]

    return (
        <section id="about" className="py-20 px-6 relative">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Título de sección */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t.about.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
                </motion.div>

                {/* Tarjeta de perfil */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass rounded-2xl p-8 md:p-10 border border-neon-cyan/20"
                >
                    {/* Tags de destacados */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {highlights.map((item, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-dark-bg/50 rounded-full text-sm border border-dark-border"
                            >
                                <span>{item.icon}</span>
                                <span className="text-white">{item.text}</span>
                            </motion.span>
                        ))}
                    </div>

                    {/* Texto del perfil */}
                    <p className="text-text-muted text-lg leading-relaxed">
                        {language === 'es' ? (
                            <>
                                <span className="text-neon-cyan font-semibold">Ingeniero en Tecnologías y Sistemas de Información</span>{' '}
                                (Egresado Diciembre 2025) con un perfil técnico orientado al{' '}
                                <span className="text-white font-medium">Desarrollo de Software</span> y{' '}
                                <span className="text-white font-medium">Gestión de Datos</span>.{' '}
                                Cuento con experiencia operativa en la manipulación de bases de datos críticas mediante scripts en{' '}
                                <span className="text-neon-purple">SQL Server</span> y sólidos fundamentos en{' '}
                                <span className="text-white font-medium">Lógica de Programación y POO</span>{' '}
                                (<span className="text-neon-cyan">Java</span>/<span className="text-neon-cyan">Python</span>).
                            </>
                        ) : (
                            <>
                                <span className="text-neon-cyan font-semibold">Information Technology and Systems Engineer</span>{' '}
                                (Graduated December 2025) with a technical profile focused on{' '}
                                <span className="text-white font-medium">Software Development</span> and{' '}
                                <span className="text-white font-medium">Data Management</span>.{' '}
                                I have operational experience in handling critical databases through{' '}
                                <span className="text-neon-purple">SQL Server</span> scripts and solid foundations in{' '}
                                <span className="text-white font-medium">Programming Logic and OOP</span>{' '}
                                (<span className="text-neon-cyan">Java</span>/<span className="text-neon-cyan">Python</span>).
                            </>
                        )}
                    </p>

                    <p className="text-text-muted text-lg leading-relaxed mt-4">
                        {language === 'es' ? (
                            <>
                                Poseo competencias en tecnologías web{' '}
                                (<span className="text-neon-purple">HTML/CSS/JS</span>) y capacidad probada para el{' '}
                                <span className="text-white font-medium">diagnóstico técnico (debugging)</span> y{' '}
                                documentación de incidencias.
                            </>
                        ) : (
                            <>
                                I have competencies in web technologies{' '}
                                (<span className="text-neon-purple">HTML/CSS/JS</span>) and proven ability for{' '}
                                <span className="text-white font-medium">technical diagnosis (debugging)</span> and{' '}
                                incident documentation.
                            </>
                        )}
                    </p>

                    {/* Objetivo */}
                    <div className="mt-6 pt-6 border-t border-dark-border">
                        <p className="text-white text-lg">
                            <span className="text-neon-cyan">🎯 {t.about.objective}</span>{' '}
                            {language === 'es' ? (
                                <>
                                    Integrarme como <span className="font-semibold">Desarrollador de Software</span>, aportando una{' '}
                                    <span className="text-neon-purple">rápida curva de aprendizaje</span>, adaptabilidad a nuevos lenguajes y{' '}
                                    <span className="text-neon-cyan">enfoque en la calidad del código</span>.
                                </>
                            ) : (
                                <>
                                    Join as a <span className="font-semibold">Software Developer</span>, bringing a{' '}
                                    <span className="text-neon-purple">fast learning curve</span>, adaptability to new languages, and{' '}
                                    <span className="text-neon-cyan">focus on code quality</span>.
                                </>
                            )}
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default About
