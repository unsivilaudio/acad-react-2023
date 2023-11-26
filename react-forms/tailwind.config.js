/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Lato', 'serif'],
                title: ['Quicksand', 'Helvetica', 'Arial'],
            },
        },
    },
    plugins: [],
};
