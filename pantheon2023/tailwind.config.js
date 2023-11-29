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
                "marquee": "marquee 40s linear infinite",
                'slidehorizontal': 'slide-horizontal 12s linear infinite backwards',
                "border-width": "border-width 3s infinite alternate",
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
                },
                'slide-horizontal': {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },

                },
                "border-width": {
                    "from": {
                        "width": "10px",
                        "opacity": "0"
                    },
                    "to": {
                        "width": "100px",
                        "opacity": "1"
                    }
                },
            }
        }
    },
    plugins: [],
}
