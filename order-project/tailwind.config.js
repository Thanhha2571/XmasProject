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
        'itemsBackground': '#808080'
      },
    },
    fontFamily: {
      "ShadowsIntoLight": ["Shadows Into Light"],
      "Changa": ["Changa"],
      "DancingScript": ["Dancing Script"],
      "Montserrat": ["Montserrat"],
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
