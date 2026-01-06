import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

// Datos bilingües
const getTechnicalSkills = (language) => [
    {
        category: language === 'es' ? "Lenguajes de Programación" : "Programming Languages",
        icon: "💻",
        skills: [
            { name: "Java", detail: language === 'es' ? "Fundamentos / POO" : "Fundamentals / OOP" },
            { name: "Python", detail: language === 'es' ? "Análisis de Datos / Scripting" : "Data Analysis / Scripting" },
            { name: "JavaScript", detail: "ES6+" },
            { name: "C# .NET", detail: language === 'es' ? "Nociones" : "Basic knowledge" },
        ]
    },
    {
        category: language === 'es' ? "Bases de Datos" : "Databases",
        icon: "🗃️",
        skills: [
            { name: "Microsoft SQL Server", detail: language === 'es' ? "Consultas, Scripts, Corrección de datos" : "Queries, Scripts, Data correction" },
            { name: "MySQL", detail: language === 'es' ? "Gestión de datos" : "Data management" },
        ]
    },
    {
        category: language === 'es' ? "Desarrollo Web" : "Web Development",
        icon: "🌐",
        skills: [
            { name: "HTML5 & CSS3", detail: language === 'es' ? "Maquetación moderna" : "Modern layout" },
            { name: "React", detail: language === 'es' ? "Componentes básicos" : "Basic components" },
            { name: "APIs", detail: language === 'es' ? "Nociones de integración" : "Integration basics" },
        ]
    },
    {
        category: language === 'es' ? "Herramientas & Metodologías" : "Tools & Methodologies",
        icon: "🔧",
        skills: [
            { name: "Git / GitHub", detail: language === 'es' ? "Control de versiones" : "Version control" },
            { name: "VS Code", detail: language === 'es' ? "IDE principal" : "Main IDE" },
            { name: language === 'es' ? "Metodologías Ágiles" : "Agile Methodologies", detail: "Project Management" },
        ]
    },
    {
        category: language === 'es' ? "Infraestructura" : "Infrastructure",
        icon: "☁️",
        skills: [
            { name: "Google Cloud Platform", detail: "GCP Certified" },
            { name: language === 'es' ? "Redes" : "Networks", detail: "CCNA Certified" },
        ]
    }
]

function Education() {
    const { t, language } = useLanguage()
    const technicalSkills = getTechnicalSkills(language)

    // Textos de la tarjeta de universidad
    const degreeTitle = language === 'es'
        ? "Licenciatura en Ingeniería en Tecnologías y Sistemas de Información"
        : "Bachelor's Degree in Information Technology and Systems Engineering"

    const graduatedText = language === 'es'
        ? "Egresado – Diciembre 2025"
        : "Graduated – December 2025"

    return (
        <section id="education" className="py-20 px-6 relative">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">

                {/* Título de sección */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t.education.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
                </motion.div>

                {/* Tarjeta de Universidad */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="glass rounded-xl p-8 border-gradient">
                        <div className="flex flex-col md:flex-row md:items-center gap-6">
                            {/* Logo UVM */}
                            <div className="w-32 h-20 rounded-xl bg-white flex items-center justify-center p-2 flex-shrink-0">
                                <img
                                    src="/images/uvm-logo.png"
                                    alt="Universidad del Valle de México"
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {degreeTitle}
                                </h3>
                                <p className="text-neon-purple font-medium text-lg mb-2">
                                    Universidad del Valle de México (UVM)
                                </p>
                                <div className="flex flex-wrap gap-4 text-text-muted text-sm">
                                    <span className="flex items-center gap-2">
                                        <span className="text-green-400">✓</span>
                                        {graduatedText}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Habilidades Técnicas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <h3 className="text-2xl font-bold text-center mb-8">
                        <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                            {t.education.technicalKnowledge}
                        </span>
                    </h3>
                </motion.div>

                {/* Grid de habilidades */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technicalSkills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass glass-hover rounded-xl p-5"
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-2xl">{skillGroup.icon}</span>
                                <h4 className="font-semibold text-white">{skillGroup.category}</h4>
                            </div>

                            {/* Skills */}
                            <ul className="space-y-3">
                                {skillGroup.skills.map((skill, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-neon-cyan text-xs mt-1">●</span>
                                        <div>
                                            <span className="text-white font-medium text-sm">{skill.name}</span>
                                            <span className="text-text-muted text-xs ml-2">({skill.detail})</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Education
