// ============================================
// CONTEXTO DE IDIOMA - LanguageContext.jsx
// ============================================
// Provider para manejar idioma español/inglés

import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        // Obtener idioma guardado o usar 'es' por defecto
        if (typeof window !== 'undefined') {
            return localStorage.getItem('language') || 'es'
        }
        return 'es'
    })

    useEffect(() => {
        // Guardar en localStorage
        localStorage.setItem('language', language)
        // Actualizar atributo lang del HTML
        document.documentElement.lang = language
    }, [language])

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'es' ? 'en' : 'es')
    }

    // Función helper para obtener traducciones
    const t = translations[language]

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}
