import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'

function SettingsToggle() {
    const { theme, toggleTheme } = useTheme()
    const { language, toggleLanguage } = useLanguage()

    return (
        <div className="flex items-center gap-2">
            {/* Toggle de Idioma */}
            <motion.button
                onClick={toggleLanguage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dark-card/50 border border-dark-border hover:border-neon-cyan/30 transition-all text-sm"
                title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
                <span className="text-lg">{language === 'es' ? '🇲🇽' : '🇺🇸'}</span>
                <span className="text-text-muted font-medium">{language.toUpperCase()}</span>
            </motion.button>

            {/* Toggle de Tema */}
            <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-dark-card/50 border border-dark-border hover:border-neon-purple/30 transition-all flex items-center justify-center"
                title={theme === 'dark' ? 'Cambiar a tema claro' : 'Switch to dark theme'}
            >
                {theme === 'dark' ? (
                    <span className="text-xl">🌙</span>
                ) : (
                    <span className="text-xl">☀️</span>
                )}
            </motion.button>
        </div>
    )
}

export default SettingsToggle
