import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector', // enable sử dụng dark mode
  theme: {
    extend: {
      /** Screen Responsive */
      screens: {
        'sm': '575.98px',   //  min-width: 575.98px
        'md': '767.98px',   //  min-width: 767.98px
        'lg': '991.98px',   //  min-width: 991.98px
        'xl': '1239.98px',  //  min-width: 1239.98px
        '2xl': '1239.98px', //  min-width: 1536.98px
      },

      /** Màu sắc */
      colors: {
        // dark mode
        darkModeBackground: '#292929',
        darkModePrimary: '#212121',
        darkModeSecondary: '#EFEEE0',
        
        darkModeActive: '#00ADEF',

        darkModeLogoBg: '#1C1C1C',

        darkModeText: '#FFFFFF',
        darkModeSubText: '#FFFFFF70',

        // light mode
        // lightModeBackground: '#FFFFFF',
        // lightModePrimary: '#212121',
        // lightModeSecondary: '#EFEEE0',
        // lightModeText: '#FFFFFF',
        // lightModeActive: '#00ADEF',
      },
    },
  },
  plugins: [],
} satisfies Config;
