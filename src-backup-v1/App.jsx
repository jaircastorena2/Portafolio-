// ============================================
// COMPONENTE PRINCIPAL - App.jsx
// ============================================
// Optimizado con lazy loading y mejor rendimiento

import { useState, useEffect, lazy, Suspense, memo } from 'react'
import { useLanguage } from './context/LanguageContext'

// Componentes críticos (carga inmediata)
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'

// Componentes lazy (carga diferida)
const Stats = lazy(() => import('./components/Stats'))
const Experience = lazy(() => import('./components/Experience'))
const Education = lazy(() => import('./components/Education'))
const Skills = lazy(() => import('./components/Skills'))
const Certifications = lazy(() => import('./components/Certifications'))
const Projects = lazy(() => import('./components/Projects'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const WhatsAppFloat = lazy(() => import('./components/WhatsAppFloat'))

// Fallback simple para lazy loading
const SectionFallback = () => (
    <div className="py-20 flex justify-center">
        <div className="w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
    </div>
)

const App = memo(function App() {
    const [loading, setLoading] = useState(true)
    const { t } = useLanguage()

    // Scroll to top on page load - forzado
    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual'
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [])

    return (
        <>
            {/* Loading Screen */}
            {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

            {/* Navbar fijo */}
            <Navbar />

            {/* WhatsApp flotante - lazy */}
            <Suspense fallback={null}>
                <WhatsAppFloat />
            </Suspense>

            {/* Contenedor principal */}
            <div className="min-h-screen bg-dark-bg">
                <main className="overflow-x-hidden">
                    {/* Hero - Crítico, carga inmediata */}
                    <Hero />

                    {/* Secciones con lazy loading */}
                    <Suspense fallback={<SectionFallback />}>
                        <Stats />
                    </Suspense>

                    <Suspense fallback={<SectionFallback />}>
                        <Experience />
                    </Suspense>

                    <Suspense fallback={<SectionFallback />}>
                        <Education />
                    </Suspense>

                    <Suspense fallback={<SectionFallback />}>
                        <Skills />
                    </Suspense>

                    <Suspense fallback={<SectionFallback />}>
                        <Projects />
                    </Suspense>

                    <Suspense fallback={<SectionFallback />}>
                        <Certifications />
                    </Suspense>

                    <Suspense fallback={<SectionFallback />}>
                        <About />
                    </Suspense>

                    <Suspense fallback={<SectionFallback />}>
                        <Contact />
                    </Suspense>
                </main>

                {/* Footer */}
                <footer className="py-8 text-center text-text-muted text-sm border-t border-dark-border">
                    <p>© 2025 Carlos Jair Castorena Jimenez. {t.footer.rights}</p>
                    <p className="mt-2 text-xs">
                        {t.footer.builtWith} <span className="text-neon-cyan">React</span> + <span className="text-neon-purple">Tailwind</span> + <span className="text-neon-cyan">Framer Motion</span>
                    </p>
                </footer>
            </div>
        </>
    )
})

export default App
