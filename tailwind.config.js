/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark': {
                    'bg': '#0a0a0f',
                    'card': '#12121a',
                    'border': '#1e1e2e',
                },
                'neon': {
                    'cyan': '#00f5ff',
                    'purple': '#bf00ff',
                    'pink': '#ff00ff',
                },
                'text': {
                    'primary': '#ffffff',
                    'muted': '#8b8b9a',
                    'accent': '#00f5ff',
                }
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff' },
                    '100%': { boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            },
            backdropBlur: {
                'xs': '2px',
            }
        },
    },
    plugins: [],
}
