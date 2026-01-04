// ============================================
// CONTEXTO DE TEMA - ThemeContext.jsx
// ============================================
// Provider para manejar tema oscuro/claro

import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // Obtener tema guardado o usar 'dark' por defecto
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'dark'
        }
        return 'dark'
    })

    useEffect(() => {
        // Guardar en localStorage
        localStorage.setItem('theme', theme)

        // Aplicar clase al documento
        if (theme === 'light') {
            document.documentElement.classList.add('light-theme')
        } else {
            document.documentElement.classList.remove('light-theme')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}
