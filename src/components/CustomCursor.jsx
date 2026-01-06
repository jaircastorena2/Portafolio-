import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea, [role="button"]')) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', updateMousePosition)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    // Solo mostrar en desktop
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
        return null
    }

    return (
        <>
            {/* Cursor principal */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-neon-cyan rounded-full pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isHovering ? 2 : 1
                }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />

            {/* Glow/Trail */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border-2 border-neon-purple rounded-full pointer-events-none z-[9998] opacity-50"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
            />
        </>
    )
}

export default CustomCursor
