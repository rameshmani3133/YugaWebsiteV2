/** @type {import('tailwindcss').Config} */

export default {

    content: [

        "./index.html",

        "./src/**/*.{js,ts,jsx,tsx}"

    ],

    theme: {

        extend: {

            colors: {

                primary: "#0A2E63",

                secondary: "#164A92",

                gold: "#D4AF37",

                dark: "#1E293B"

            }

        }

    },

    plugins: []

}