export interface ColorTheme {
  primary: string;
  secondary: string;
  accent: string;

  text: string;
  background: string;
}

export type ThemeType = "light" | "dark";

export interface Theme {
  current: ThemeType,
  light: ColorTheme;
  dark: ColorTheme;
}