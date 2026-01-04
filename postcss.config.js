// ============================================
// CONFIGURACIÓN DE POSTCSS
// ============================================
// PostCSS es un procesador de CSS que transforma tu código
// - Tailwind: Genera todas las clases de utilidad
// - Autoprefixer: Añade prefijos para compatibilidad
//   (ej: -webkit-, -moz-) automáticamente
export default {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
}
