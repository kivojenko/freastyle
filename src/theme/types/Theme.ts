import { ColorTheme } from "./subThemes/ColorTheme";
import { HoverTheme } from "./subThemes/HoverTheme";
import { MarginTheme } from "./subThemes/MarginTheme";
import { PaddingTheme } from "./subThemes/PaddingTheme";
import { SwitchTheme } from "./subThemes/SwitchTheme";
import { TransitionTheme } from "./subThemes/TransitionTheme";

export type ThemeType = "light" | "dark";

export interface Theme {
  current: ThemeType;
  light: ColorTheme;
  dark: ColorTheme;

  switch: SwitchTheme;

  margin: MarginTheme;
  padding: PaddingTheme;

  transition: TransitionTheme;
  hover: HoverTheme;

  borderRadiusRound: string;
  borderRadiusSharp: number;

  borderWidth: number;
}
