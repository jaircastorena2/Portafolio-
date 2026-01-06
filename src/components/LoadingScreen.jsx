import { motion } from 'framer-motion'
import { memo, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const floatingIcons = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', x: '15%', y: '20%' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', x: '80%', y: '15%' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', x: '85%', y: '70%' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', x: '10%', y: '75%' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', x: '25%', y: '80%' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', x: '70%', y: '25%' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', x: '75%', y: '85%' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', x: '20%', y: '30%' },
]

const LoadingScreen = memo(function LoadingScreen({ onComplete }) {
    const { language } = useLanguage()

    useEffect(() => {
        const timer = setTimeout(onComplete, 2500)
        return () => clearTimeout(timer)
    }, [onComplete])

    const welcomeText = language === 'es' ? 'Bienvenido' : 'Welcome'

    return (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }} className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center overflow-hidden">
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />
            </div>

            {/* Floating icons */}
            {floatingIcons.map((item, index) => (
                <motion.img
                    key={index}
                    src={item.icon}
                    alt=""
                    className="absolute w-8 h-8 sm:w-10 sm:h-10 will-change-transform"
                    style={{ left: item.x, top: item.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 0.4, 0.4],
                        scale: [0, 1, 1],
                        y: [0, -15, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        y: { duration: 3 + index * 0.3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }
                    }}
                />
            ))}

            {/* Center content */}
            <div className="text-center relative z-10 px-6">
                <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
                    {welcomeText.split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 + index * 0.04, ease: "easeOut" }}
                            className="inline-block"
                            style={{ textShadow: '0 0 40px rgba(0, 245, 255, 0.5)' }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.4 }}
                    className="text-text-muted text-sm md:text-base mb-8 tracking-widest uppercase"
                >
                    {language === 'es' ? 'Portafolio Profesional' : 'Professional Portfolio'}
                </motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex justify-center">
                    <div className="w-10 h-10 rounded-full border-2 border-t-neon-cyan border-r-neon-purple border-b-transparent border-l-transparent animate-spin" />
                </motion.div>
            </div>
        </motion.div>
    )
})

export default LoadingScreen
