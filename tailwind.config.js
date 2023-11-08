/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            gray: "#e5e5e5",
            lightblue: '#fbfdfe',
            white: '#FFFFFF'

        },
        extend: {
            fontFamily: {
                sans: ['Manrope'],
            },
        },
    },
    plugins: [],
};
