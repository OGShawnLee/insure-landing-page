import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    colors: {
      gray: {
        50: "hsl(0, 0%, 98%)"
      },
      primary: {
        violet: "hsl(256, 26%, 20%)",
        blue: "hsl(216, 30%, 68%)"
      },
      violet: {
        900: "hsl(270, 9%, 17%)",
        400: "hsl(273, 4%, 51%)"
      },
      transparent: "transparent",
      white: "hsl(0, 0%, 100%)"
    },
    fontFamily: {
      dm: ["DM Serif Display", "sans-serif"],
      karla: ["Karla", "sans-serif"]
    },
    extend: {
      scale: {
        flip: "-1"
      }
    }
  }
});
