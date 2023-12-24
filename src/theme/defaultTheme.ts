import {Theme, ThemeType} from "./Theme";

export const defaultTheme: Theme = {
  current: localStorage.getItem("theme") as ThemeType ?? "light",
  light: {
    primary: "#2893EC",
    secondary: "#F47DB7",
    accent: "#F17358",

    text: "#020A13",
    background: "#FAFCFF"
  },
  dark: {
    primary: "#137FD8",
    secondary: "#840B45",
    accent: "#A5290D",

    text: "#EDF4FD",
    background: "#000205"
  }
}