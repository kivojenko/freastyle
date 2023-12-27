export type ColorVariant = "primary" | "secondary" | "accent" | "none";
export type TextColor = "text" | "background";

export interface StyleProps {
  theme: Theme;
}

export interface TextProps {
  textColor?: TextColor;
}

export interface ThemeProps {
  colorVariant?: ColorVariant;
}

export interface ColorTheme {
  primary: string;
  secondary: string;
  accent: string;

  text: string;
  background: string;
  backgroundSecondary: string;
  backgroundAccent: string;
}

export type ThemeType = "light" | "dark";

export interface Theme {
  current: ThemeType;
  light: ColorTheme;
  dark: ColorTheme;
  minXMargin: number;
  minYMargin: number;
}
