const path = require('path');
const nativewind = require('nativewind/preset');
const uiPreset = require('@app/ui/tailwind.preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // nativewind/preset is required by withNativeWind (see nativewind metro tailwindConfigV3).
  presets: [nativewind, uiPreset],
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    path.join(__dirname, '../../packages/ui/src/**/*.{ts,tsx}'),
  ],
};
