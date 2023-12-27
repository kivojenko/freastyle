import tinycolor from "tinycolor2";
import { ColorTheme, ColorVariant, Theme } from "./ThemeTypes";

export function getCurrentTheme(theme: Theme | any): ColorTheme {
  if (!theme?.current) {
    return undefined;
  }
  return theme[theme.current];
}

export function getColor(color: ColorVariant, theme: ColorTheme): string {
  return color == "transparent"
    ? "transparent"
    : theme[color ?? "backgroundSecondary"];
}

export function getFocusColor(color: string): string {
  if (!color || color == "transparent") return color;
  return tinycolor(color).lighten(3).toHexString();
}
