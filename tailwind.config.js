/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Kid-friendly color palette
        'primary': '#4D96FF', // Bright blue
        'secondary': '#FF6B6B', // Coral red
        'accent': '#FFD166', // Sunny yellow
        'success': '#06D6A0', // Mint green
        'warning': '#FFC233', // Amber
        'error': '#FF5C5C', // Light red
        'info': '#5CE1E6', // Sky blue
        
        // Background colors
        'background': {
          'light': '#F8FAFF',
          'DEFAULT': '#F0F4FF',
          'dark': '#E6EEFF',
        },
        
        // Fun colors for kids
        'fun': {
          'purple': '#9C6ADE',
          'pink': '#FF70A6',
          'orange': '#FF9E40',
          'green': '#7ED957',
          'teal': '#4ECDC4',
          'indigo': '#6610F2',
        },
      },
      fontFamily: {
        'display': ['Comic Neue', 'Comic Sans MS', 'cursive'],
        'body': ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '3rem',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pop': 'pop 0.5s ease-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'fun': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 5px rgba(255, 214, 102, 0.4)',
        'card': '0 10px 20px rgba(77, 150, 255, 0.1), 0 3px 6px rgba(77, 150, 255, 0.05)',
        'button': '0 4px 0 0 #3A7BD5',
        'button-pressed': '0 2px 0 0 #3A7BD5',
      },
    },
  },
  plugins: [],
};