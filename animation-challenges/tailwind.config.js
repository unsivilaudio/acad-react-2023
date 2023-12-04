/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css,html}'],
    theme: {
        extend: {
            fontFamily: {
                title: ['Quicksand', 'Monospace', 'serif'],
                sans: ['Lato', 'Helvetica', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
