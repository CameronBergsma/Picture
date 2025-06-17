/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "variable-collection-blue-highlight": "rgba(25, 88, 247, 1)",
        "variable-collection-dark-main": "rgba(16, 18, 19, 1)",
        "variable-collection-gray-1": "rgba(229, 229, 229, 1)",
        "variable-collection-gray-2": "rgba(226, 226, 228, 1)",
        "variable-collection-gray-3": "rgba(244, 244, 244, 1)",
        "variable-collection-gray-secondary": "rgba(96, 103, 111, 1)",
        "variable-collection-gray-text": "rgba(155, 159, 164, 1)",
        "variable-collection-gray-txt": "rgba(184, 187, 190, 1)",
        "variable-collection-green": "rgba(30, 158, 84, 1)",
        "variable-collection-orange": "rgba(243, 140, 29, 1)",
        "variable-collection-red": "rgba(255, 80, 80, 1)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      boxShadow: {
        "drop-1": "0px 1px 2px 0px rgba(150, 151, 156, 0.1), 1px 3px 4px 0px rgba(150, 151, 156, 0.09), 2px 8px 5px 0px rgba(150, 151, 156, 0.05), 4px 13px 6px 0px rgba(150, 151, 156, 0.01), 7px 21px 6px 0px rgba(150, 151, 156, 0)",
        "drop-project": "0px 0px 1px 0px rgba(46, 61, 97, 0.06), 1px 2px 2px 0px rgba(46, 61, 97, 0.05), 3px 4px 3px 0px rgba(46, 61, 97, 0.03), 5px 8px 4px 0px rgba(46, 61, 97, 0.01), 8px 12px 4px 0px rgba(46, 61, 97, 0)",
        "small-btn-drop": "0px 0px 1px 0px rgba(93, 98, 105, 0.54), 1px 1px 2px 0px rgba(93, 98, 105, 0.47), 1px 3px 2px 0px rgba(93, 98, 105, 0.28), 2px 6px 3px 0px rgba(93, 98, 105, 0.08), 3px 9px 3px 0px rgba(93, 98, 105, 0.01)",
        "text-box-3d": "0px -1px 0px -3px rgba(208, 208, 208, 1), 0px 1px 0px 0px rgba(255, 255, 255, 1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'helvetica-medium': ['Helvetica Now Text -Medium', 'Helvetica', 'sans-serif'],
        'helvetica-regular': ['Helvetica Now Text -Regular', 'Helvetica', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-left": {
          "0%": { transform: "translateX(50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-left": "slide-left 0.5s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};