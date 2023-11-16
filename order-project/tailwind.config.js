/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'textColor': '#E3D3C4',
        'backGround': '#1f4335',
        'itemsBackground': '#808080',
        'textWarning': '#d05757',
        'textTitle': '#fcd451'
      },
    },
    fontFamily: {
      "ShadowsIntoLight": ["Shadows Into Light"],
      "Changa": ["Changa"],
      "DancingScript": ["Dancing Script"],
      "Montserrat": ["Montserrat"],
    },
    screens: {
      'mobileSmall': '320px',
      // => @media (min-width: 320px) { ... }
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }
      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1280px) { ... }
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}
