/**
 * Root ESLint flat config. Per-workspace `eslint.config.cjs` files extend
 * the appropriate preset from @app/config so this root file only needs
 * the base + global ignores.
 */
module.exports = require('@app/config/eslint/base');
