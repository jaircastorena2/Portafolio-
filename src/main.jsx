// ============================================
// PUNTO DE ENTRADA DE REACT (main.jsx)
// ============================================
// Este es el primer archivo JavaScript que se ejecuta.
// Su única función es "montar" React en el DOM.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Importamos los estilos globales
import App from './App.jsx'  // Importamos el componente principal
import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'

// createRoot() es la nueva API de React 18
// Encuentra el elemento con id="root" en index.html
// y renderiza nuestra aplicación dentro de él
createRoot(document.getElementById('root')).render(
    // StrictMode activa verificaciones adicionales durante desarrollo
    // para ayudarte a encontrar bugs comunes (no afecta producción)
    <StrictMode>
        <ThemeProvider>
            <LanguageProvider>
                <App />
            </LanguageProvider>
        </ThemeProvider>
    </StrictMode>,
)
