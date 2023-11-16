/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
        
            "primary": "#EEFF25",
                    
            "secondary": "#3688f4",
                    
            "accent": "#f43688",
                    
            "neutral": "#44403c",
                    
            "base-100": "#ffffff",
                    
            "info": "#fda4af",
                    
            "success": "#18b47b",
                    
            "warning": "#f0d447",
                    
            "error": "#f41042",
        },
      },
    ],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'cinzel': 'Cinzel',
     
    },
  },
  plugins: [require("daisyui")],
}