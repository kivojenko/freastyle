import { Theme, ThemeType } from "./ThemeTypes";

export const defaultTheme: Theme = {
  current: (localStorage.getItem("theme") as ThemeType) ?? "light",
  light: {
    primary: "#3da3f8",
    secondary: "#F47DB7",
    accent: "#F17358",

    text: "#092646",
    background: "#f0f1f6",
    backgroundSecondary: "#c1c3c9",
    backgroundAccent: "#a1a4ab"
  },
  dark: {
    primary: "#188ae7",
    secondary: "#d22377",
    accent: "#d03f1e",

    text: "#d0d4d9",
    background: "#27303d",
    backgroundSecondary: "#666e7a",
    backgroundAccent: "#9ca5b4"
  },
  minXMargin: 0.75,
  minYMargin: 0.5
};
