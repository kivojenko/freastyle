export type ColorVariant = "primary" | "secondary" | "accent" | "transparent";
export type TextColor = "text" | "background";

export type ColorTheme = {
  [variant in ColorVariant]: string;
} & {
  [text in TextColor]: string;
} & {
  switch: string;

  backgroundSecondary: string;
  backgroundAccent: string;
};

export type BackgroundColor = Extract<keyof ColorTheme, string>;
