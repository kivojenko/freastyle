import { ThemeType } from "./types/subThemes";
import { Theme } from "./types/Theme";

export const defaultTheme: Theme = {
  current: (localStorage.getItem("theme") as ThemeType) ?? "light",
  light: {
    primary: "#3DA3F8",
    secondary: "#F47DB7",
    accent: "#F17358",

    text: "#092646",
    switch: "#F7F7FA",

    background: "#F2F3F8",
    backgroundSecondary: "#C1C3C9",
    backgroundAccent: "#A1A4AB"
  },
  dark: {
    primary: "#188AE7",
    secondary: "#D22377",
    accent: "#D03F1E",

    text: "#D0D4D9",
    switch: "#181F28",

    background: "#27303D",
    backgroundSecondary: "#666E7A",
    backgroundAccent: "#9CA5B4"
  },
  switch: {
    size: 2,
    toggleSize: 1.4
  },
  transition: {
    focusTransition: 0.1,
    actionTransition: 0.5
  },
  margin: {
    minXMargin: 0.75,
    minYMargin: 0.5
  },
  padding: {
    minXPadding: 0.75,
    minYPadding: 0.5
  },
  borderRadiusSharp: "4px",
  borderRadiusRound: "25px"
};
