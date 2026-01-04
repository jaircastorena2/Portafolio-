import { motion } from 'framer-motion'
import { memo, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const floatingIcons = [
    // Esquina superior izquierda
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', x: -280, y: -150 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', x: -320, y: -50 },
    // Esquina superior derecha
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', x: 280, y: -140 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', x: 320, y: -40 },
    // Izquierda centro
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', x: -350, y: 60 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', x: -280, y: 140 },
    // Derecha centro  
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', x: 350, y: 50 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', x: 280, y: 130 },
    // Abajo
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', x: -180, y: 180 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg', x: 0, y: 200 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', x: 180, y: 180 },
    // Arriba centro
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', x: -100, y: -200 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', x: 100, y: -200 },
]

const LoadingScreen = memo(function LoadingScreen({ onComplete }) {
    const { language } = useLanguage()

    useEffect(() => {
        const timer = setTimeout(onComplete, 3500)
        return () => clearTimeout(timer)
    }, [onComplete])

    const welcomeText = language === 'es' ? 'Bienvenido' : 'Welcome'

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl" />
            </div>

            {floatingIcons.map((item, index) => (
                <motion.img
                    key={index}
                    src={item.icon}
                    alt=""
                    className="absolute w-10 h-10 md:w-12 md:h-12"
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.7, 0.5],
                        x: item.x,
                        y: [item.y, item.y - 15, item.y],
                        scale: 1,
                    }}
                    transition={{
                        duration: 1,
                        delay: index * 0.1,
                        y: { duration: 2 + index * 0.3, repeat: Infinity, ease: "easeInOut" }
                    }}
                />
            ))}

            <div className="text-center relative z-10">
                <motion.h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
                    {welcomeText.split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
                            className="inline-block"
                            style={{ textShadow: '0 0 20px rgba(0, 245, 255, 0.3)' }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-text-muted text-base mb-6"
                >
                    {language === 'es' ? 'A MI PORTAFOLIO PROFESIONAL' : 'TO MY PROFESSIONAL PORTFOLIO'}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="w-10 h-10 rounded-full border-2 border-t-neon-cyan border-r-neon-purple border-transparent animate-spin" />
                    <p className="text-text-muted text-sm font-mono uppercase tracking-widest">
                        {language === 'es' ? 'Cargando...' : 'Loading...'}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
})

export default LoadingScreen
