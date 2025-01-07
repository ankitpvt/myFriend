// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [  "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        animation: {
          "fade-in": "fadeIn 1s ease-in-out",
          shake: "shake 0.5s ease-in-out",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0, transform: "translateY(-20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          shake: {
            "0%, 100%": { transform: "translateX(0)" },
            "25%": { transform: "translateX(-10px)" },
            "50%": { transform: "translateX(10px)" },
            "75%": { transform: "translateX(-10px)" },
          },
        },
      },
    },
    plugins: [],
  };
  