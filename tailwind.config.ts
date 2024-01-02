import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xs: '425px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        brand: '#068FFF',
        'brand-2': '#777DFE',
        select: '#4E4FEB',
        'select-2': '#6BC0FF',
        darkest: '#111827',
        dark: '#23304B',
        mid: '#BDA9D4',
        light: '#EFE8F6',
        lightest: '#FFFFFF'
      },
      width: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      aspectRatio: {
        '9/16': '9 / 16'
      }
    }
  },
  darkMode: 'class',
  plugins: []
}
export default config
