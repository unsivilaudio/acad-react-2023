/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['Poppins', 'Arial', 'sans-serif'],
                title: ['Kanit', 'monospace', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
