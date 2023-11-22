/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css}'],
    theme: {
        font: {
            sans: ['Quicksand', 'Arial', 'Helvetica'],
            display: ['Roboto Condensed', 'monospace'],
        },
        extend: {},
    },
    plugins: [],
};
