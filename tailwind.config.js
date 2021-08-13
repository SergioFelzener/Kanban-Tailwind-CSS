const { colors } = require('tailwindcss/defaultTheme')



module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        extend: {
            colors: {
                cor1: '#03F25C',
                'cor2': '#FF336E'
            }
        },
    },
    variants: {},
    plugins: [],
}