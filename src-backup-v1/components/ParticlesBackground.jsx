// ============================================
// COMPONENTE PARTICLES - ParticlesBackground.jsx
// ============================================
// Fondo con partículas ultra-optimizadas

import { useCallback, useMemo, memo } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const ParticlesBackground = memo(function ParticlesBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine)
    }, [])

    // Opciones ultra-optimizadas
    const options = useMemo(() => ({
        background: {
            color: { value: 'transparent' }
        },
        fpsLimit: 24, // Reducido a 24 FPS (cine)
        interactivity: {
            events: {
                onHover: {
                    enable: false, // Desactivar interacción para mejor rendimiento
                    mode: 'grab'
                }
            }
        },
        particles: {
            color: { value: '#00D9FF' },
            links: {
                color: '#00D9FF',
                distance: 180,
                enable: true,
                opacity: 0.12,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.3, // Más lento = menos CPU
                direction: 'none',
                random: false,
                straight: false,
                outModes: { default: 'out' }
            },
            number: {
                density: { enable: true, area: 1200 },
                value: 20 // Solo 20 partículas
            },
            opacity: {
                value: 0.35
            },
            shape: { type: 'circle' },
            size: {
                value: { min: 1, max: 2 }
            }
        },
        detectRetina: false,
        smooth: true
    }), [])

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            className="absolute inset-0 -z-10"
        />
    )
})

export default ParticlesBackground
