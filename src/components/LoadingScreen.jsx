import { motion } from 'framer-motion'
import { memo, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

const floatingIcons = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', x: -40, y: -35 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', x: 40, y: -35 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', x: 40, y: 35 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', x: -40, y: 35 },
]

const LoadingScreen = memo(function LoadingScreen({ onComplete }) {
    const { language } = useLanguage()

    useEffect(() => {
        const timer = setTimeout(onComplete, 2800)
        return () => clearTimeout(timer)
    }, [onComplete])

    const welcomeText = language === 'es' ? 'Bienvenido' : 'Welcome'

    return (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-48 md:w-72 h-48 md:h-72 bg-neon-cyan/8 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-48 md:w-72 h-48 md:h-72 bg-neon-purple/8 rounded-full blur-3xl" />
            </div>

            <div className="hidden md:block">
                {floatingIcons.map((item, index) => (
                    <motion.img
                        key={index}
                        src={item.icon}
                        alt=""
                        className="absolute w-10 h-10 opacity-30"
                        style={{ left: `calc(50% + ${item.x * 3}px)`, top: `calc(50% + ${item.y * 3}px)` }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.3, scale: 1, y: [0, -8, 0] }}
                        transition={{ duration: 0.6, delay: index * 0.15, y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                    />
                ))}
            </div>

            <div className="text-center relative z-10 px-6">
                <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 tracking-wide">
                    {welcomeText.split('').map((letter, index) => (
                        <motion.span key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }} className="inline-block" style={{ textShadow: '0 0 30px rgba(0, 245, 255, 0.4)' }}>{letter}</motion.span>
                    ))}
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-text-muted text-sm md:text-base mb-6 tracking-widest">
                    {language === 'es' ? 'PORTAFOLIO PROFESIONAL' : 'PROFESSIONAL PORTFOLIO'}
                </motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-t-neon-cyan border-r-neon-purple border-b-transparent border-l-transparent animate-spin" />
                </motion.div>
            </div>
        </motion.div>
    )
})

export default LoadingScreen
