/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Maven Pro', 'Arial', 'sans-serif'],
                title: ['Oswald', 'monospace', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
