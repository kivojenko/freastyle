import { useAtomValue } from "jotai/index";
import tinycolor from "tinycolor2";
import { ThemeAtom } from "./ThemeAtom";
import { ColorTheme, ColorVariant } from "./types/subThemes";
import { Theme } from "./types/Theme";

export function getColorTheme(theme: Theme | any): ColorTheme {
  if (!theme?.current) {
    return undefined;
  }
  return theme[theme.current];
}

export function getCurrentTheme(): ColorTheme {
  const theme = useAtomValue(ThemeAtom);
  return getColorTheme(theme);
}

export function getColor(color: ColorVariant): string {
  const theme = getCurrentTheme();
  return color == "transparent"
    ? "transparent"
    : theme[color ?? "backgroundSecondary"];
}

export function getFocusColor(color: string): string {
  if (!color || color == "transparent") return color;
  return tinycolor(color).lighten(3).toHexString();
}
