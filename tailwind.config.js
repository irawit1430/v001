/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                taupe: '#6F6864',
                black: '#000000',
                white: '#FFFFFF',
                peach: '#FF9E80',
                'light-grey': '#F9FAFB',
                'light-alt': '#F5F5F5',
            },
            fontFamily: {
                sans: ['"SF Pro Display"', 'system-ui', 'sans-serif'],
            },
            maxWidth: {
                'container': '1440px',
            },
        },
    },
    plugins: [],
}
