/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css,html}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Lato', 'sans-serif'],
                title: ['Quicksand', 'Helvetica', 'Arial'],
            },
        },
    },
    plugins: [],
};
