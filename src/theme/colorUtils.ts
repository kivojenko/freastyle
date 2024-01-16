import { useAtomValue } from "jotai/index";
import tinycolor from "tinycolor2";
import { ThemeAtom } from "./ThemeAtom";
import { ColorTheme, ColorVariant } from "./types/subThemes/ColorTheme";
import { Theme } from "./types/Theme";

export function getColorTheme(theme: Theme | any): ColorTheme {
  if (!theme?.current) {
    return undefined;
  }
  return theme[theme.current];
}

export function getCurrentTheme(): ColorTheme {
  const theme = getTheme();
  return getColorTheme(theme);
}

export function getTheme(): Theme {
  return useAtomValue(ThemeAtom);
}

export function getColorVariant(color: ColorVariant, theme: ColorTheme) {
  return color == "transparent"
    ? "transparent"
    : theme[color ?? "backgroundSecondary"];
}

export function getColor(color: ColorVariant): string {
  const theme = getCurrentTheme();
  return getColorVariant(color, theme);
}

export function getHoverColor(color: string): string {
  if (!color || color == "transparent") return color;

  const theme = getTheme().hover;
  switch (theme.change) {
    case "darken":
      return tinycolor(color).darken(theme.amount).toHexString();
    case "lighten":
    default:
      return tinycolor(color).lighten(theme.amount).toHexString();
  }
}
