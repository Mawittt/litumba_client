/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors : {
            "border" : "#D2D2D2"
        },
        boxShadow : {
            "comp" :"0px 1px 5px 1px rgba(0, 0, 0, 0.09),0px 0px 0px rgba(0, 0, 0, 0.09)",
            "icon" : "0px 12px 5px rgba(0, 0, 0, 0.01),0px 7px 4px rgba(0, 0, 0, 0.05),0px 3px 3px rgba(0, 0, 0, 0.09),0px 1px 2px rgba(0, 0, 0, 0.1),0px 0px 0px rgba(0, 0, 0, 0.1)",
            "comp_lg" : "14px 10px 11px rgba(0, 0, 0, 0.05), 2px 2px 4px rgba(0, 0, 0, 0.1)" ,
            "outer_comp" : " 0px 48px 48px rgba(0, 0, 0, 0.21), 0px 12px 14px 3px rgba(0, 0, 0, 0.25), 0px 0px 0px rgba(0, 0, 0, 0.25)" 
        }
    },
  },
  plugins: [],
}
