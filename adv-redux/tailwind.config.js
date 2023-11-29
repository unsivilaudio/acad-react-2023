/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css,html}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans JP', 'Helvetica', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
