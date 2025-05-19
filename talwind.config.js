/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            keyframes: {
            slideInLeft: {
                "0%": { transform: "translateX(-100px)", opacity: "0" },
                "100%": { transform: "translateX(0)", opacity: "1" },
            },
            slideInRight: {
                "0%": { transform: "translateX(100px)", opacity: "0" },
                "100%": { transform: "translateX(0)", opacity: "1" },
            },
            },
            animation: {
            slideInLeft: "slideInLeft 0.8s ease-out forwards",
            slideInRight: "slideInRight 0.8s ease-out forwards",
            },
        },
    },
    plugins: []
}