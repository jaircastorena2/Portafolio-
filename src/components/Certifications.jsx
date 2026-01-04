// ============================================
// COMPONENTE CERTIFICATIONS - Certifications.jsx
// ============================================
// Certificaciones con traducciones completas ES/EN

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

// Datos de certificaciones bilingües
const getCertificationCategories = (language) => [
    {
        id: 1,
        name: "Cisco CCNA",
        issuer: "Cisco Networking Academy",
        icon: "🌐",
        color: "from-cyan-400 to-blue-500",
        description: language === 'es'
            ? "Certificaciones en redes, routing, switching y seguridad empresarial"
            : "Certifications in networking, routing, switching and enterprise security",
        certificates: [
            { name: "CCNA: Introduction to Networks", file: "/certificates/CCNA-_Introduction_to_Networks_certificate_a850240103-my-uvm-edu-mx_e57f5533-8dc5-4346-ac64-4ea971d12bd5.pdf" },
            { name: "CCNA: Switching, Routing, and Wireless", file: "/certificates/CCNA Switching, Routing, and Wireless.pdf" },
            { name: "CCNA: Enterprise Networking, Security & Automation", file: "/certificates/CCNA-_Enterprise_Networking-_Security-_and_Automation_certificate_a850240103-my-uvm-edu-mx_9b6cdf3b-ec43-4114-94e1-e974c2c2c589.pdf" },
            { name: "IT Essentials", file: "/certificates/IT_Essentials_certificate_a850240103-my-uvm-edu-mx_da9bc114-c9e6-45bd-9a5b-5834f1a412ec.pdf" },
        ]
    },
    {
        id: 2,
        name: "Google Cloud",
        issuer: "Google Cloud Platform",
        icon: "☁️",
        color: "from-blue-400 to-green-400",
        description: language === 'es'
            ? "Certificación en infraestructura y servicios de Google Cloud"
            : "Certification in Google Cloud infrastructure and services",
        certificates: [
            { name: "Elastic Google Cloud Infrastructure: Scaling and Automation", file: "/certificates/Elastic Google Cloud Infrastructure Scaling and.pdf" },
        ]
    },
    {
        id: 3,
        name: "Project Management",
        issuer: "Google / Coursera",
        icon: "📊",
        color: "from-purple-400 to-pink-400",
        description: language === 'es'
            ? "Gestión de proyectos, metodologías ágiles y control de proyectos"
            : "Project management, agile methodologies and project control",
        certificates: language === 'es' ? [
            { name: "Gestión de Proyectos", file: "/certificates/Gestión de Proyectos.pdf" },
            { name: "Fundamentos de la Gestión de Proyectos", file: "/certificates/Fundamentos de la gestión de proyectos.pdf" },
            { name: "Introducción a la Gestión de Proyectos", file: "/certificates/Introducción a la gestión de proyectos.pdf" },
            { name: "Introducción a la Gestión Ágil de Proyectos", file: "/certificates/Introducción a la gestión ágil de proyectos.pdf" },
            { name: "Incrementar (Parte 2) y Controlar", file: "/certificates/Incrementar - Parte 2 y Controlar.pdf" },
            { name: "Project Management Control using Earned Value", file: "/certificates/Project Management Control using the Earned.pdf" },
        ] : [
            { name: "Project Management", file: "/certificates/Gestión de Proyectos.pdf" },
            { name: "Project Management Fundamentals", file: "/certificates/Fundamentos de la gestión de proyectos.pdf" },
            { name: "Introduction to Project Management", file: "/certificates/Introducción a la gestión de proyectos.pdf" },
            { name: "Introduction to Agile Project Management", file: "/certificates/Introducción a la gestión ágil de proyectos.pdf" },
            { name: "Scale (Part 2) and Control", file: "/certificates/Incrementar - Parte 2 y Controlar.pdf" },
            { name: "Project Management Control using Earned Value", file: "/certificates/Project Management Control using the Earned.pdf" },
        ]
    },
    {
        id: 4,
        name: "Six Sigma",
        issuer: "Lean Six Sigma",
        icon: "📈",
        color: "from-yellow-400 to-orange-400",
        description: language === 'es'
            ? "Mejora continua, optimización de procesos y análisis de datos"
            : "Continuous improvement, process optimization and data analysis",
        certificates: [
            { name: "Six Sigma Principles", file: "/certificates/Six Sigma Principles.pdf" },
            { name: "Six Sigma Tools for Define and Measure", file: "/certificates/Six Sigma Tools for Define and Measure.pdf" },
            { name: "Six Sigma Tools for Analyze", file: "/certificates/Six Sigma Tools for Analyze.pdf" },
        ]
    },
    {
        id: 5,
        name: "IBM Data Science",
        issuer: "IBM / Credly",
        icon: "🎖️",
        color: "from-indigo-400 to-blue-500",
        description: language === 'es'
            ? "Insignias digitales verificables en análisis de datos y Python"
            : "Verifiable digital badges in data analysis and Python",
        certificates: [
            {
                name: "Data Analysis Using Python",
                file: "https://www.credly.com/badges/416b3a6f-9bae-44aa-8e1e-e20f99ba46c0",
                isCredly: true
            },
            {
                name: "Python for Data Science",
                file: "https://www.credly.com/badges/ae5d81be-a739-43c9-8de4-76e06513f882",
                isCredly: true
            },
        ]
    }
]

// Variantes de animación
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

const listVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
        opacity: 1,
        height: "auto",
        transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.2 }
    }
}

function Certifications() {
    const { t, language } = useLanguage()
    const certificationCategories = getCertificationCategories(language)
    const [expandedCategory, setExpandedCategory] = useState(null)

    const toggleCategory = (id) => {
        setExpandedCategory(expandedCategory === id ? null : id)
    }

    const certificatesLabel = language === 'es' ? 'certificados' : 'certificates'

    return (
        <section id="certifications" className="py-20 px-6">
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
                        {t.certifications.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
                    <p className="text-text-muted mt-4 max-w-2xl mx-auto">
                        {t.certifications.subtitle}
                    </p>
                </motion.div>

                {/* Grid de certificaciones - 2x2 */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {certificationCategories.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={cardVariants}
                            className="group"
                        >
                            <div
                                onClick={() => toggleCategory(category.id)}
                                className={`glass rounded-xl p-6 cursor-pointer transition-all duration-300 ${expandedCategory === category.id
                                        ? 'border-2 border-neon-cyan'
                                        : 'border border-dark-border hover:border-neon-cyan/30'
                                    }`}
                            >
                                {/* Header de categoría */}
                                <div className="flex items-start gap-4 mb-4">
                                    <span className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10`}>
                                        {category.icon}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                            {category.name}
                                        </h3>
                                        <p className="text-neon-purple text-sm">{category.issuer}</p>
                                        <p className="text-text-muted text-sm mt-1">{category.description}</p>
                                    </div>
                                    <div className={`transform transition-transform ${expandedCategory === category.id ? 'rotate-180' : ''}`}>
                                        <svg className="w-5 h-5 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Badge con cantidad */}
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 text-xs font-mono bg-neon-cyan/10 text-neon-cyan rounded-full">
                                        {category.certificates.length} {certificatesLabel}
                                    </span>
                                </div>

                                {/* Lista expandible de certificados */}
                                <AnimatePresence>
                                    {expandedCategory === category.id && (
                                        <motion.div
                                            variants={listVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="mt-4 pt-4 border-t border-dark-border overflow-hidden"
                                        >
                                            <ul className="space-y-2">
                                                {category.certificates.map((cert, index) => (
                                                    <li key={index}>
                                                        <a
                                                            href={cert.file}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 text-sm text-text-muted hover:text-white transition-colors py-1"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            {cert.isCredly ? (
                                                                <span className="text-lg">🎖️</span>
                                                            ) : (
                                                                <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                            )}
                                                            <span className="flex-1">{cert.name}</span>
                                                            {cert.isCredly && (
                                                                <span className="text-xs text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded">Credly</span>
                                                            )}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default Certifications
