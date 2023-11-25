/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,html,css}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Lato', 'serif'],
                title: ['Quicksand', 'san-serif'],
            },
        },
    },
    plugins: [],
};
