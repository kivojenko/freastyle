export type ColorVariant = "primary" | "secondary" | "accent" | "transparent";
export type TextColor = "text" | "background";
export type BackgroundColor = Extract<keyof ColorTheme, string>;
export type ThemeType = "light" | "dark";

export interface ThemeProps {
  colorVariant?: ColorVariant;
  textColor?: TextColor;
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

export interface PaddingTheme {
  minXPadding: number;
  minYPadding: number;
}

export interface MarginTheme {
  minXMargin: number;
  minYMargin: number;
}

export interface SwitchTheme {
  size: number;
  toggleSize: number;
}

export interface TransitionTheme {
  focusTransition: number;
  actionTransition: number;
}
