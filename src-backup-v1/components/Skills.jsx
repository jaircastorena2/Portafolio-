// ============================================
// COMPONENTE SKILLS - Skills.jsx
// ============================================
// Grid de habilidades técnicas con traducciones

import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

// Habilidades principales con iconos Devicon
const mainSkills = [
    // Fila 1: Lenguajes y Bases de Datos
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", level: 55, category: "Backend", isImage: true },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", level: 50, category: "Scripting", isImage: true },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", level: 55, category: "Frontend", isImage: true },
    { name: "C# .NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", level: 35, category: "Backend", isImage: true },
    { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", level: 65, category: "Databases", isImage: true },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", level: 60, category: "Databases", isImage: true },

    // Fila 2: Frontend y Cloud
    { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", level: 70, category: "Frontend", isImage: true },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", level: 45, category: "Frontend", isImage: true },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: 50, category: "Frontend", isImage: true },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", level: 55, category: "Cloud", isImage: true },
    { name: "CCNA/Redes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cisco/cisco-original.svg", level: 70, category: "Networking", isImage: true },
    { name: "Git/GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", level: 60, category: "Tools", isImage: true },

    // Fila 3: Herramientas y Stack del Portafolio
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", level: 75, category: "Tools", isImage: true },
    { name: "Agile/PM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", level: 45, categoryEs: "Metodologías", categoryEn: "Methodologies", isImage: true },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", level: 40, category: "Build Tools", isImage: true },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", level: 35, categoryEs: "Animaciones", categoryEn: "Animations", isImage: true },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", level: 40, category: "Backend", isImage: true },
    { name: "APIs REST", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", level: 45, category: "Backend", isImage: true },
]

// Variantes de animación
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.06, delayChildren: 0.2 }
    }
}

const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1, scale: 1, y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    }
}

function Skills() {
    const { t, language } = useLanguage()

    return (
        <section id="skills" className="py-20 px-6 relative">
            {/* Fondo decorativo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Título de sección */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t.skills.title}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
                    <p className="text-text-muted mt-4 max-w-2xl mx-auto">
                        {t.skills.subtitle}
                    </p>
                </motion.div>

                {/* Grid de skills - 6 columnas en desktop */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                    {mainSkills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={skillVariants}
                            whileHover={{
                                scale: 1.05,
                                y: -3,
                                transition: { duration: 0.2 }
                            }}
                            className="group"
                        >
                            <div className="glass glass-hover rounded-xl p-4 h-full flex flex-col items-center justify-center text-center cursor-pointer relative overflow-hidden min-h-[140px]">
                                {/* Efecto de brillo en hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 to-neon-purple/0 group-hover:from-neon-cyan/10 group-hover:to-neon-purple/10 transition-all duration-300" />

                                {/* Icono - SVG o Emoji */}
                                {skill.isImage ? (
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-10 h-10 mb-2 transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <span className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                                        {skill.icon}
                                    </span>
                                )}

                                {/* Nombre */}
                                <h4 className="font-semibold text-white text-sm group-hover:text-neon-cyan transition-colors duration-300">
                                    {skill.name}
                                </h4>

                                {/* Categoría */}
                                <span className="text-xs text-text-muted mt-0.5">
                                    {language === 'es' ? (skill.categoryEs || skill.category) : (skill.categoryEn || skill.category)}
                                </span>

                                {/* Barra de nivel con porcentaje */}
                                <div className="w-full mt-2">
                                    <div className="text-right">
                                        <span className="font-mono text-xs text-neon-cyan">{skill.level}%</span>
                                    </div>
                                    <div className="w-full h-1 bg-dark-bg/50 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.3 }}
                                            className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Nota sobre el portafolio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-cyan/10 rounded-full text-sm">
                        <span className="text-neon-cyan">✨</span>
                        <span className="text-text-muted">
                            {t.skills.builtWith}
                            <span className="text-white font-medium"> React</span> +
                            <span className="text-white font-medium"> Vite</span> +
                            <span className="text-white font-medium"> Tailwind</span> +
                            <span className="text-white font-medium"> Framer Motion</span>
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Skills
