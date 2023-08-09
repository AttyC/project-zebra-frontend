/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            outline: {
                green: '2px solid #09814A',
            },
        },
        maxWidth: {
            overview: '13rem',
        },
    },
    plugins: [],
};
