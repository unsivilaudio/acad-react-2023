import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx,css}'],
    theme: {
        fontFamily: {
            sans: ['Roboto', 'Arial', 'san-serif'],
            title: ['Roboto Condensed', 'Helvetica'],
        },
        extend: {},
    },
    plugins: [
        // adds .progress-bar-[color] and .progress-value-[color] classes
        plugin(function ({ matchUtilities, theme }) {
            const flattenedColors = Object.entries(theme('colors')).reduce(
                (acc, [key, value]) => {
                    if (typeof value === 'string') acc[key] = value;
                    else {
                        Object.entries(value).forEach(([number, color]) => {
                            acc[`${key}-${number}`] = color;
                        });
                    }
                    return acc;
                },
                {},
            );
            matchUtilities(
                {
                    'progress-bar': (value) => ({
                        backgroundColor: value,
                        '&::-webkit-progress-bar': {
                            backgroundColor: value,
                        },
                    }),
                    'progress-value': (value) => ({
                        color: value,
                        '&::-webkit-progress-value': {
                            backgroundColor: value,
                        },
                        '&::-moz-progress-bar': {
                            backgroundColor: value,
                        },
                    }),
                },
                {
                    values: flattenedColors,
                    variants: ['responsive'],
                },
            );
        }),
    ],
};
