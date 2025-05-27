/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#ffffff",
                secondary: "#669966",
                accent: "#cc6633",
                light: "#f5f5dc",
                dark: "#333333",
                crt: "#00ff66",
                terminal: "#121212",
            },
            fontFamily: {
                sans: ["'Space Grotesk'", "sans-serif"],
                mono: ["'IBM Plex Mono'", "monospace"],
                display: ["'VT323'", "monospace"],
                retro: ["'Press Start 2P'", "cursive"],
            },
            // Add other theme extensions as needed
        },
    },
    plugins: [],
};

export default config;