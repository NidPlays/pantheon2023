/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "background-shine": "background-shine 2s linear infinite",
                'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)',
                "marquee": "marquee 40s linear infinite"
            },
            keyframes: {
                "background-shine": {
                    from: {
                        backgroundPosition: "0 0"
                    },
                    to: {
                        backgroundPosition: "-200% 0"
                    }
                },
                "marquee": {
                    from: { transform: "translateX(0%)" },
                    to: { transform: "translateX(-100%)" }
                }
            }
        }
    },
    plugins: [],
}
