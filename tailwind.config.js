module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: ['dark'], //specific classes
    },
    },
  darkMode: "class",
  theme: {
    // typography: (theme) => ({}),
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
                color: theme('colors.gray.300'),
          a: {
            color: theme('colors.blue.200'),
            '&:hover': {
              color: theme('colors.blue.100'),
            },
          },
          h1:{
            color: theme('colors.gray.100'),
          },
          h2:{
            color: theme('colors.gray.100'),
          },
          h3:{
            color: theme('colors.gray.100'),
          },
          h4:{
            color: theme('colors.gray.100'),
          },
          h5:{
            color: theme('colors.gray.100'),
          },
          h6:{
            color: theme('colors.gray.100'),
          },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
