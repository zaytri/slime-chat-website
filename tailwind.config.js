const { fontFamily } = require('tailwindcss/defaultTheme')
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')

const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-radio-canada)', ...fontFamily.sans],
        thin: ['var(--font-finlandica)', ...fontFamily.sans],
        round: ['var(--font-fredoka)', ...fontFamily.sans],
        display: ['var(--font-grandstander)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, matchUtilities, theme }) => {
      addUtilities({
        '.text-shadow': {
          'text-shadow': `var(--tw-text-shadow-x-offset, 0) var(--tw-text-shadow-y-offset, 0) var(--tw-text-shadow-blur,) var(--tw-text-shadow-color,)`,
        },
      })

      matchUtilities(
        {
          'text-shadow-c': value => ({
            '--tw-text-shadow-color': value,
          }),
        },
        {
          values: flattenColorPalette(theme('colors')),
          type: ['color'],
        },
      )

      matchUtilities(
        {
          'text-shadow-x': value => ({
            '--tw-text-shadow-x-offset': value,
          }),
          'text-shadow-y': value => ({
            '--tw-text-shadow-y-offset': value,
          }),
        },
        { values: theme('spacing'), supportsNegativeValues: true },
      )

      matchUtilities(
        {
          'text-shadow-b': value => ({
            '--tw-text-shadow-blur': value,
          }),
        },
        { values: theme('spacing') },
      )
    }),
  ],
}
