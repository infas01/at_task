/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    colors: {
      customPurple: '#6B3CC9',
      customBlack: '#2F2F2F',
      customOrange: '#F28D35',
      customGrey: '#6F6C90',
    },
    fontFamily: { interFont: ['Inter var', ...defaultTheme.fontFamily.sans] },
  },
};
export const plugins = [];
