module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    scale:{
      70:".70",
      90:".90",
      120:"1.2"
    },
    screens: {
      sm: '480px',
      md: {'max': '767px'},
      lg: '1024px',
      xl: '1340px',
    },
    container: {
      screens: {
        sm: "1200px",
        md: "1200px",
        lg: "1200px",
        xl: "1200px",
      },
    },
    fontFamily: {
      display: ["Inter", "system-ui"],
      sans: [
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    extend: {
      width: {
        15.1: "15.1rem",
      },
      colors: {
        transparent: "transparent",
        agility: "#222",
        gray: {
          lightest: "#fff",
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        primary: {
          capri:"#1CB7F8",
          blue: "#1C58F8",
          darkblue: "#0F1847",
          grey: "#04182e",
          white: "#FFFFFF",
          100: "#a273ff",
          200: "#935bff",
          300: "#8344ff",
          400: "#742cff",
          500: "#6415FF",
          600: "#5a13e6",
          700: "#5011cc",
          800: "#460fb3",
          900: "#3c0d99",
        },
        soft:{
          blue: "#F0F9FF",
          green: "#E6FaF5",
          yellow: "#FEF5C4",
          orange: "#FFF5F0",
          purple: "#F2F5FF"

        },
        secondary: {
          100: "#7c8ba1",
          200: "#667892",
          300: "#506582",
          400: "#3a5173",
          500: "#243E63",
          600: "#203859",
          700: "#1d324f",
          800: "#192b45",
          900: "#16253b",
          blue: "#C9D5FD",
          green: "#7ED2BF"
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
