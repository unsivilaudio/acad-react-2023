/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,html,css}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Raleway', 'sans-serif'],
                title: ['Lato', 'Arial'],
            },
        },
    },
    plugins: [],
};
