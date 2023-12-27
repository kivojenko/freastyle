import tinycolor from "tinycolor2";
import { ColorTheme, ColorVariant, Theme } from "./ThemeTypes";

export function getCurrentTheme(theme: Theme): ColorTheme {
  return theme[theme.current];
}

export function getColor(color: ColorVariant, theme: ColorTheme): string {
  return color == "none"
    ? "transparent"
    : theme[color ?? "backgroundSecondary"];
}

export function getFocusColor(color: string): string {
  return tinycolor(color).lighten(3).toHexString();
}
