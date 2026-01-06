import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('hero')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const { theme, toggleTheme } = useTheme()
    const { language, toggleLanguage, t } = useLanguage()

    const navLinks = [
        { name: t.nav.home, href: '#hero' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.skills, href: '#skills' },
        { name: language === 'es' ? 'Proyectos' : 'Projects', href: '#projects' },
        { name: t.nav.certifications, href: '#certifications' },
        { name: t.nav.profile, href: '#about' },
        { name: t.nav.contact, href: '#contact' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Detectar sección activa
            const sections = navLinks.map(link => link.href.replace('#', ''))
            for (const section of sections.reverse()) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top <= 150) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [navLinks])

    const scrollToSection = (href) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileMenuOpen(false)
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'py-3 bg-dark-bg/80 backdrop-blur-xl border-b border-white/5'
                    : 'py-5 bg-transparent'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        onClick={(e) => { e.preventDefault(); scrollToSection('#hero') }}
                        className="flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            src="/images/carlos-jair.jpg"
                            alt="Carlos Jair"
                            className="w-10 h-10 rounded-lg object-cover object-top border-2 border-neon-cyan/30"
                        />
                        <span className="font-semibold text-white hidden sm:block group-hover:text-neon-cyan transition-colors">
                            Carlos Jair
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <motion.button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === link.href.replace('#', '')
                                    ? 'text-neon-cyan bg-neon-cyan/10'
                                    : 'text-text-muted hover:text-white hover:bg-white/5'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.name}
                            </motion.button>
                        ))}
                    </div>

                    {/* Settings & CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Language Toggle - Banderas con imágenes */}
                        <motion.button
                            onClick={toggleLanguage}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10"
                            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                        >
                            <img
                                src={language === 'es'
                                    ? 'https://flagcdn.com/w40/mx.png'
                                    : 'https://flagcdn.com/w40/us.png'
                                }
                                alt={language === 'es' ? 'México' : 'USA'}
                                className="w-6 h-4 object-cover rounded-sm"
                            />
                            <span className="text-white font-medium text-sm">{language === 'es' ? 'ES' : 'EN'}</span>
                        </motion.button>

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-9 h-9 rounded-lg hover:bg-white/5 transition-all flex items-center justify-center"
                            title={theme === 'dark' ? 'Tema claro' : 'Dark theme'}
                        >
                            {theme === 'dark' ? '🌙' : '☀️'}
                        </motion.button>

                        {/* CV Button */}
                        <motion.a
                            href="/cv-carlos-castorena.pdf"
                            download
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/25 transition-all text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📄 {t.nav.downloadCV}
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5"
                    >
                        <motion.span
                            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
                            className="w-6 h-0.5 bg-white rounded-full"
                        />
                        <motion.span
                            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                            className="w-6 h-0.5 bg-white rounded-full"
                        />
                        <motion.span
                            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
                            className="w-6 h-0.5 bg-white rounded-full"
                        />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-xl pt-24 px-6 lg:hidden"
                    >
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-left py-4 px-4 text-lg font-medium text-white hover:text-neon-cyan hover:bg-white/5 rounded-lg transition-all"
                                >
                                    {link.name}
                                </motion.button>
                            ))}

                            {/* Mobile Settings */}
                            <div className="flex items-center gap-4 mt-4 py-4 px-4 border-t border-dark-border">
                                <button onClick={toggleLanguage} className="flex items-center gap-2 text-white">
                                    <img
                                        src={language === 'es'
                                            ? 'https://flagcdn.com/w40/mx.png'
                                            : 'https://flagcdn.com/w40/us.png'
                                        }
                                        alt={language === 'es' ? 'México' : 'USA'}
                                        className="w-6 h-4 object-cover rounded-sm"
                                    />
                                    <span>{language === 'es' ? 'Español' : 'English'}</span>
                                </button>
                                <button onClick={toggleTheme} className="flex items-center gap-2 text-white">
                                    <span className="text-xl">{theme === 'dark' ? '🌙' : '☀️'}</span>
                                    <span>{theme === 'dark' ? t.theme.dark : t.theme.light}</span>
                                </button>
                            </div>

                            <motion.a
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                href="/cv-carlos-castorena.pdf"
                                download
                                className="mt-2 py-4 px-4 text-center bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-bg font-semibold rounded-lg"
                            >
                                📄 {t.nav.downloadCV}
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
