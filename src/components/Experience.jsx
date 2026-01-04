// ============================================
// COMPONENTE EXPERIENCE - Experience.jsx
// ============================================
// Experiencia laboral con traducciones completas ES/EN

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

// Datos de experiencia laboral bilingües
const getExperiences = (language) => [
    {
        id: 1,
        title: language === 'es' ? "Help Desk / Soporte de Sistemas" : "Help Desk / Systems Support",
        company: "Apymsa - Centro de Atención Exodus",
        location: language === 'es' ? "México" : "Mexico",
        period: language === 'es' ? "Septiembre 2025 – Diciembre 2025" : "September 2025 – December 2025",
        description: language === 'es'
            ? "Soporte técnico de primer nivel con atención multicanal y gestión de incidencias."
            : "First-level technical support with multichannel service and incident management.",
        responsibilities: language === 'es' ? [
            "Atención y seguimiento de tickets de soporte vía sistema interno, Teams, WhatsApp y llamadas",
            "Soporte a usuarios finales: instalación de software, configuración y resolución de errores",
            "Uso de Microsoft SQL Server para consultas y corrección básica de datos",
            "Escalación de incidencias y documentación de bugs y reportes técnicos"
        ] : [
            "Support ticket handling and tracking via internal system, Teams, WhatsApp and calls",
            "End-user support: software installation, configuration and troubleshooting",
            "Microsoft SQL Server for queries and basic data correction",
            "Incident escalation and technical bug/report documentation"
        ],
        technologies: ["SQL Server", "Windows", "Teams", "ITIL", "Help Desk"],
        logos: ["/images/apymsa-logo.png", "/images/exodus-logo.png"],
        icon: "🖥️",
        featured: false
    },
    {
        id: 2,
        title: language === 'es' ? "Especialista en Operaciones Tecnológicas" : "Technology Operations Specialist",
        company: language === 'es' ? "CASFID – Festivales y Conciertos" : "CASFID – Festivals & Concerts",
        location: "Guadalajara, Jalisco",
        period: language === 'es' ? "Octubre 2023 – Mayo 2025" : "October 2023 – May 2025",
        description: language === 'es'
            ? "Implementación y soporte de sistemas de misión crítica para pagos cashless en eventos masivos de alta concurrencia."
            : "Implementation and support of mission-critical systems for cashless payments at high-attendance massive events.",
        responsibilities: language === 'es' ? [
            "Configuración, despliegue y soporte de sistemas de misión crítica (pagos cashless) en eventos de alta concurrencia",
            "Gestión y soporte de redes de alta densidad, garantizando continuidad operativa en tiempo real",
            "Diagnóstico y resolución de incidencias técnicas bajo entornos de alta presión operativa",
            "Soporte en sitio a usuarios y personal operativo durante eventos masivos"
        ] : [
            "Configuration, deployment and support of mission-critical systems (cashless payments) at high-attendance events",
            "High-density network management and support, ensuring real-time operational continuity",
            "Technical incident diagnosis and resolution under high-pressure operational environments",
            "On-site support for users and operational staff during massive events"
        ],
        technologies: ["Cisco Networks", "POS Systems", "Cashless Payments", "Networking", "24/7 Support"],
        highlights: language === 'es' ? [
            "Cero downtime en sistemas de pago críticos",
            "Gestión de redes para +50,000 usuarios simultáneos",
            "Trabajo bajo presión extrema en eventos en vivo"
        ] : [
            "Zero downtime in critical payment systems",
            "Network management for +50,000 simultaneous users",
            "Working under extreme pressure at live events"
        ],
        logos: ["/images/casfid-logo.png", "/images/idasfest-logo.png"],
        icon: "🎪",
        featured: true,
        featuredBadge: language === 'es' ? "Alta presión • Misión crítica" : "High pressure • Mission critical"
    }
]

// Variantes de animación
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
}

const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1, x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

function Experience() {
    const { t, language } = useLanguage()
    const experiences = getExperiences(language)

    const responsibilitiesLabel = language === 'es' ? 'Responsabilidades:' : 'Responsibilities:'
    const highlightsLabel = language === 'es' ? '🏆 Logros Destacados:' : '🏆 Key Achievements:'

    return (
        <section id="experience" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Título de sección */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t.experience.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
                </motion.div>

                {/* Timeline de experiencias */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative"
                >
                    {/* Timeline sin línea - solo círculos con iconos */}

                    {/* Experiencias */}
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            variants={cardVariants}
                            className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'}`}
                        >
                            {/* Punto en el timeline */}
                            <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-2xl ${exp.featured
                                ? 'bg-gradient-to-br from-neon-cyan to-neon-purple pulse-glow'
                                : 'bg-dark-card border-2 border-neon-purple'
                                } z-10`}>
                                {exp.icon}
                            </div>

                            {/* Tarjeta de experiencia */}
                            <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                <div className="glass glass-hover rounded-xl p-6 border-gradient text-left">

                                    {/* Logos de empresas */}
                                    {exp.logos && (
                                        <div className="flex items-center gap-6 mb-4 p-4 bg-white/5 rounded-lg">
                                            {exp.logos.map((logo, i) => (
                                                <div key={i} className="h-12 w-24 flex items-center justify-center">
                                                    <img
                                                        src={logo}
                                                        alt="Company logo"
                                                        className="max-h-full max-w-full object-contain"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                        <span className="text-neon-cyan font-mono text-sm">{exp.period}</span>
                                        <span className="text-text-muted text-xs">📍 {exp.location}</span>
                                    </div>

                                    {/* Título y empresa */}
                                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                    <p className="text-neon-purple font-medium mb-3">{exp.company}</p>

                                    {/* Descripción */}
                                    <p className="text-text-muted mb-4">{exp.description}</p>

                                    {/* Responsabilidades */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-white mb-2">{responsibilitiesLabel}</h4>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                                                    <span className="text-neon-cyan mt-0.5">▹</span>
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Logros destacados */}
                                    {exp.highlights && (
                                        <div className="mb-4 p-3 bg-neon-cyan/5 rounded-lg border border-neon-cyan/20">
                                            <h4 className="text-sm font-semibold text-neon-cyan mb-2">{highlightsLabel}</h4>
                                            <ul className="space-y-1">
                                                {exp.highlights.map((highlight, i) => (
                                                    <li key={i} className="text-sm text-white flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full"></span>
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Tecnologías */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs font-mono bg-dark-bg/50 text-neon-cyan rounded-full border border-neon-cyan/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Badge de destacado */}
                                    {exp.featured && (
                                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-neon-purple/10 text-neon-purple text-xs font-mono rounded-full">
                                            <span className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" />
                                            {exp.featuredBadge}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default Experience
