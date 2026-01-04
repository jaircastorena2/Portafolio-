// ============================================
// COMPONENTE LOADING SCREEN - LoadingScreen.jsx
// ============================================
// Pantalla de bienvenida con iconos flotantes y animaciones

import { motion } from 'framer-motion'
import { memo, useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

// Iconos de tecnología para flotar alrededor
const floatingIcons = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', delay: 0, x: -150, y: -100 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', delay: 0.2, x: 150, y: -80 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', delay: 0.4, x: -180, y: 60 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', delay: 0.6, x: 170, y: 80 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', delay: 0.3, x: -100, y: -150 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', delay: 0.5, x: 100, y: -140 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', delay: 0.7, x: 0, y: 150 },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', delay: 0.1, x: -200, y: 0 },
]

const LoadingScreen = memo(function LoadingScreen({ onComplete }) {
    const { language } = useLanguage()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const duration = 2500 // 2.5 segundos
        const startTime = Date.now()

        const updateProgress = () => {
            const elapsed = Date.now() - startTime
            const newProgress = Math.min((elapsed / duration) * 100, 100)
            setProgress(newProgress)

            if (newProgress < 100) {
                requestAnimationFrame(updateProgress)
            } else {
                setTimeout(onComplete, 400)
            }
        }

        requestAnimationFrame(updateProgress)
    }, [onComplete])

    const welcomeText = language === 'es' ? 'Bienvenido' : 'Welcome'

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center overflow-hidden"
        >
            {/* Gradientes de fondo */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Iconos flotantes */}
            {floatingIcons.map((item, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    initial={{
                        opacity: 0,
                        x: 0,
                        y: 0,
                        scale: 0
                    }}
                    animate={{
                        opacity: [0, 0.7, 0.5],
                        x: item.x,
                        y: item.y,
                        scale: 1,
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        duration: 1.5,
                        delay: item.delay,
                        rotate: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <motion.img
                        src={item.icon}
                        alt=""
                        className="w-10 h-10 md:w-14 md:h-14 opacity-60 drop-shadow-lg"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 2 + index * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            ))}

            {/* Contenido central */}
            <div className="text-center relative z-10">
                {/* Texto Bienvenido con animación letra por letra */}
                <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-wider">
                    {welcomeText.split('').map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 50, rotateX: -90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3 + index * 0.08,
                                ease: "easeOut"
                            }}
                            className="inline-block"
                            style={{
                                textShadow: '0 0 30px rgba(0, 245, 255, 0.3)'
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-text-muted text-lg mb-6"
                >
                    {language === 'es' ? 'A MI PORTAFOLIO PROFESIONAL' : 'TO MY PROFESSIONAL PORTFOLIO'}
                </motion.p>

                {/* Spinner de carga */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col items-center gap-4"
                >
                    {/* Spinner circular */}
                    <div className="relative w-12 h-12">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-2 border-transparent border-t-neon-cyan border-r-neon-purple"
                        />
                    </div>
                    <p className="text-text-muted text-sm font-mono uppercase tracking-widest">
                        {language === 'es' ? 'Cargando...' : 'Loading...'}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
})

export default LoadingScreen
