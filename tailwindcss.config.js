module.exports = {
  content: [
    './frontend/**/*.liquid',
    './frontend/entrypoints/**/*.ts',
    './frontend/entrypoints/**/*.scss',
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
      },
      spacing: {
        // Customize spacing values
      },
    },
  },
  plugins: [
    // Add any plugins you might need, like forms, typography, etc.
  ],
}