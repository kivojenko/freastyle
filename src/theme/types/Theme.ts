import {
  ColorTheme,
  MarginTheme,
  PaddingTheme,
  SwitchTheme,
  ThemeType,
  TransitionTheme
} from "./subThemes";

export interface Theme {
  current: ThemeType;
  light: ColorTheme;
  dark: ColorTheme;

  switch: SwitchTheme;

  margin: MarginTheme;
  padding: PaddingTheme;

  transition: TransitionTheme;

  borderRadiusRound: string;
  borderRadiusSharp: string;
}
