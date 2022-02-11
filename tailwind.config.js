module.exports = {
    content: ["./public/index.html", "./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                'banner': "url('../img/banner.jpg')",
                'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
                'yosemite': "url('../img/yosemite.jpg')",
                'ciclamen': "url('../img/ciclamen.jpg')",
                'artemisa': "url('../img/artemisa.jpg')",
                'manzanilla': "url('../img/manzanilla.jpg')",
                'hierbabuena': "url('../img/hierbabuena.jpg')",
                'stevia': "url('../img/stevia.jpg')",
                'sabila': "url('../img/sabila.jpg')",
                'arnica': "url('../img/arnica.jpg')",
                'bacopa': "url('../img/bacopa.jpg')",
                'gaulteria': "url('../img/gaulteria.jpg')",
                'europe': "url('../img/europe.jpg')",
                'iceland': "url('../img/iceland.jpg')",
            },
            backgroundColor: theme => ({
                ...theme('colors'),
                'primary': '#CC2D4A',
                'secondary': '#8FA206',
                'terciary': '#61AEC9'
            }),
            textColor: {
                'primary': '#CC2D4A',
                'secondary': '#8FA206',
                'terciary': '#61AEC9'
            },
            fontFamily: {
                Montserrat: ['Montserrat', 'sans-serif']
            }
        },
    },
    variants: {
        width: ["responsive", "hover", "focus"],
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
    ],
}