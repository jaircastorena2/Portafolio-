import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// ============================================
// CONFIGURACIÓN DE VITE
// ============================================
// Vite es nuestro "build tool" - se encarga de:
// 1. Servir los archivos durante desarrollo (npm run dev)
// 2. Empaquetar todo para producción (npm run build)
// 3. Hot Module Replacement (HMR) - actualiza la página sin recargar
export default defineConfig({
    plugins: [react()], // Plugin de React para que Vite entienda JSX
})
