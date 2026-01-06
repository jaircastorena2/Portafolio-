import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const mainSkills = [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", level: 55, category: "Backend" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", level: 50, category: "Scripting" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", level: 55, category: "Frontend" },
    { name: "C# .NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg", level: 35, category: "Backend" },
    { name: "SQL Server", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg", level: 65, category: "Databases" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", level: 60, category: "Databases" },
    { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", level: 70, category: "Frontend" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", level: 45, category: "Frontend" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", level: 50, category: "Frontend" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", level: 55, category: "Cloud" },
    { name: "CCNA/Redes", icon: "/cisco-logo.png", level: 70, category: "Networking" },
    { name: "Git/GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", level: 60, category: "Tools" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", level: 75, category: "Tools" },
    { name: "Agile/PM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg", level: 45, category: "Methodologies" },
    { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", level: 40, category: "Build Tools" },
    { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", level: 35, category: "Animations" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", level: 40, category: "Backend" },
    { name: "APIs REST", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", level: 45, category: "Backend" },
]

function Skills() {
    const { t, language } = useLanguage()

    const getSkillLevel = (level) => {
        if (level <= 40) return { label: language === 'es' ? 'Básico' : 'Basic', color: 'text-yellow-400' }
        if (level <= 65) return { label: language === 'es' ? 'Intermedio' : 'Intermediate', color: 'text-neon-cyan' }
        return { label: language === 'es' ? 'Avanzado' : 'Advanced', color: 'text-green-400' }
    }

    return (
        <section id="skills" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.skills.title}</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
                    <p className="text-text-muted mt-4 max-w-2xl mx-auto">{t.skills.subtitle}</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
                >
                    {mainSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03 }}
                            className="glass rounded-xl p-4 text-center hover:border-neon-cyan/30 transition-all group"
                        >
                            <img src={skill.icon} alt={skill.name} className="w-10 h-10 mx-auto mb-3" loading="lazy" />
                            <h4 className="font-semibold text-white text-sm mb-1">{skill.name}</h4>
                            <span className="text-xs text-neon-cyan/70">{skill.category}</span>

                            <div className="w-full mt-3">
                                <div className="h-1 bg-dark-border rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                    />
                                </div>
                                <div className="flex justify-between items-center mt-1">
                                    <span className={`text-xs font-medium ${getSkillLevel(skill.level).color}`}>
                                        {getSkillLevel(skill.level).label}
                                    </span>
                                    <span className="text-xs text-text-muted">{skill.level}%</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-10 text-text-muted text-sm"
                >
                    <span className="text-neon-cyan">✨</span> {t.skills.builtWith}
                </motion.p>
            </div>
        </section>
    )
}

export default Skills
