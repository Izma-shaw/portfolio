/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: '#0D47A1', // Nouvelle couleur principale, un bleu profond
        secondary: '#F50057', // Nouvelle couleur secondaire, un rose éclatant
        accent: '#FFD600', // Accent pour attirer l'attention
        background: '#F3F4F6', // Arrière-plan adouci
        textPrimary: '#212121', // Couleur principale du texte, noir léger
        textSecondary: '#757575', // Couleur secondaire du texte, gris doux
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Police moderne et esthétique
        serif: ['Merriweather', 'serif'], // Une police classique pour les titres
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/public/images/hero-pattern.svg')", // Nouveau motif de fond
      },
      spacing: {
        '128': '32rem', // Plus d'espace pour les grandes sections
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
