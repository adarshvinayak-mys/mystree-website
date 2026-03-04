/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Shared
        primary: "#ED5B2D", // Coral/Flame
        "primary-light": "#FF8A65",
        secondary: "#9A3412",

        // Luxury Palette (V1 Refinement)
        "warm-ivory": "#F6F1EA",
        "soft-sage": "#DDE5DC",
        "sage-light": "#EAF0EA",
        "deep-green": "#2F4F4F",
        "warm-coral": "#ED5B2D", // Match primary
        "soft-charcoal": "#3A3A3A",
        "text-main": "#2F4F4F",
        "text-muted": "#5A7070",

        // Updated Palette for Readability
        "cadet-gray": "#5A7070", // Updated to match text-muted for consistency
        "cadet-gray-light": "#8BA4BF",
        "uranian-blue": "#BFE2FE",
        "uranian-blue-light": "#e0f2fe",
        "corn-silk": "#FCF4D9",

        // New Additions for Adolescent Page
        "mint": "#D1F2EB",
        "lavender": "#E8DAEF",

        // God Mode Colors: Warm Glass & Sunset Gradients
        "bg-warm": "#FCF4D9",
        "glass-surface": "#BFE2FE",
        "text-primary": "#EF6A40",
        "text-secondary": "#8BA4BF",
        "accent-flame": "#ED5B2D",
        "accent-pumpkin": "#FF833C",

        // New Theme Additions
        tertiary: "#B2DDF7",
        quaternary: "#FFF8DC",
        "background-light": "#f8f6f6",
        "background-dark": "#221410",
        "surface-light": "#FFFFFF",
        "surface-dark": "#1E293B",
        "text-light": "#333333",
        "text-dark": "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "Source Sans 3", "Lato", "sans-serif"],
        display: ["Inter", "Source Sans 3", "Lato", "sans-serif"],
        serif: ["Inter", "Source Sans 3", "Lato", "sans-serif"],
        body: ["Inter", "Source Sans 3", "Lato", "sans-serif"],
        hand: ["Gloria Hallelujah", "cursive"],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'glow': '0 0 15px rgba(237, 91, 45, 0.3)',
        'sticker': '4px 4px 0px rgba(58, 80, 107, 0.2)',
        'blob': '0 20px 50px -12px rgba(0,0,0,0.1)',
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\\' fill=\\'%239C92AC\\' fill-opacity=\\'0.05\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')"
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        morph2: {
          '0%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '50%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
        }
      }
    },
  },
  plugins: [],
}
