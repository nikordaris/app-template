/**
 * Tailwind preset shared by `@app/ui` and `apps/mobile`.
 * Design tokens live in `./src/tokens/global.css` as CSS variables.
 */
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--ds-color-bg) / <alpha-value>)',
        surface: 'rgb(var(--ds-color-surface) / <alpha-value>)',
        text: 'rgb(var(--ds-color-text) / <alpha-value>)',
        muted: 'rgb(var(--ds-color-muted) / <alpha-value>)',
        primary: 'rgb(var(--ds-color-primary) / <alpha-value>)',
        'primary-contrast': 'rgb(var(--ds-color-primary-contrast) / <alpha-value>)',
        border: 'rgb(var(--ds-color-border) / <alpha-value>)',
        danger: 'rgb(var(--ds-color-danger) / <alpha-value>)',
      },
      borderRadius: {
        sm: 'var(--ds-radius-sm)',
        md: 'var(--ds-radius-md)',
        lg: 'var(--ds-radius-lg)',
      },
    },
  },
  plugins: [],
};
