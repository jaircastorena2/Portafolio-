import { useState, useEffect, lazy, Suspense, memo } from 'react'
import { useLanguage } from './context/LanguageContext'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'

const Stats = lazy(() => import('./components/Stats'))
const Experience = lazy(() => import('./components/Experience'))
const Education = lazy(() => import('./components/Education'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const WhatsAppFloat = lazy(() => import('./components/WhatsAppFloat'))

const SectionFallback = () => (
    <div className="py-20 flex justify-center">
        <div className="w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
    </div>
)

const App = memo(function App() {
    const [loading, setLoading] = useState(true)
    const { t } = useLanguage()

    useEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual'
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [])

    return (
        <>
            {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

            <Navbar />

            <Suspense fallback={null}>
                <WhatsAppFloat />
            </Suspense>

            <div className="min-h-screen bg-dark-bg">
                <main className="overflow-x-hidden">
                    <Hero />

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

                <footer className="py-8 text-center border-t border-dark-border">
                    <p className="text-text-muted text-sm">
                        © {new Date().getFullYear()} Carlos Jair Castorena. {t.footer.rights}
                    </p>
                </footer>
            </div>
        </>
    )
})

export default App
