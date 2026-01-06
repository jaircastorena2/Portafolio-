// ============================================
// COMPONENTE LOADING SCREEN - LoadingScreen.jsx
// ============================================
// Pantalla de carga con iconos flotantes optimizados para móvil

import { motion } from 'framer-motion'
import { memo, useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

// Iconos flotantes con posiciones relativas (porcentaje del viewport)
const floatingIcons = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', x: -35, y: -25 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', x: -40, y: -8 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', x: 35, y: -22 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', x: 40, y: -5 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', x: -42, y: 10 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', x: -35, y: 22 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', x: 42, y: 8 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', x: 35, y: 20 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', x: -22, y: 28 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg', x: 0, y: 32 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', x: 22, y: 28 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', x: -15, y: -32 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', x: 15, y: -32 },
]

const LoadingScreen = memo(function LoadingScreen({ onComplete }) {
    const { language } = useLanguage()
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Detectar si es móvil
        setIsMobile(window.innerWidth < 768)

        const timer = setTimeout(onComplete, 3500)
        return () => clearTimeout(timer)
    }, [onComplete])

    const welcomeText = language === 'es' ? 'Bienvenido' : 'Welcome'

    // Calcular posiciones basadas en viewport
    const getPosition = (percentX, percentY) => {
        const maxX = isMobile ? 120 : 280
        const maxY = isMobile ? 100 : 180
        return {
            x: (percentX / 100) * maxX * 2.5,
            y: (percentY / 100) * maxY * 2.5
        }
    }

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-60 md:w-80 h-60 md:h-80 bg-neon-cyan/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-60 md:w-80 h-60 md:h-80 bg-neon-purple/10 rounded-full blur-3xl" />
            </div>

            {/* Floating icons */}
            {floatingIcons.map((item, index) => {
                const pos = getPosition(item.x, item.y)
                return (
                    <motion.img
                        key={index}
                        src={item.icon}
                        alt=""
                        className="absolute w-8 h-8 md:w-12 md:h-12"
                        initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.6, 0.4],
                            x: pos.x,
                            y: [pos.y, pos.y - 10, pos.y],
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.08,
                            y: { duration: 2.5 + index * 0.2, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />
                )
            })}

            {/* Center content */}
            <div className="text-center relative z-10 px-4">
                <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide">
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
                    className="text-text-muted text-sm md:text-base mb-6"
                >
                    {language === 'es'
                        ? 'A MI PORTAFOLIO PROFESIONAL'
                        : 'TO MY PROFESSIONAL PORTFOLIO'}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="w-10 h-10 rounded-full border-2 border-t-neon-cyan border-r-neon-purple border-transparent animate-spin" />
                    <p className="text-text-muted text-xs md:text-sm font-mono uppercase tracking-widest">
                        {language === 'es' ? 'Cargando...' : 'Loading...'}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
})

export default LoadingScreen
