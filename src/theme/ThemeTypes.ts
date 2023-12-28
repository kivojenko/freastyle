export type ColorVariant = "primary" | "secondary" | "accent" | "transparent";
export type TextColor = "text" | "background";

export type BackgroundColor = Extract<keyof ColorTheme, string>;

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
  switch: string;

  background: string;
  backgroundSecondary: string;
  backgroundAccent: string;
}

export type ThemeType = "light" | "dark";

export interface MarginTheme {
  minXMargin: number;
  minYMargin: number;
}

export interface SwitchTheme {
  size: number;
  toggleSize: number;
}

export interface Theme {
  current: ThemeType;
  light: ColorTheme;
  dark: ColorTheme;

  switch: SwitchTheme;

  margin: MarginTheme;

  borderRadiusRound: string;
  borderRadiusSharp: string;
}
