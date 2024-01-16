import { colors } from "../../../../theme/colors";
import { ColorTheme } from "../../../../theme/types/subThemes";
import { getColor, getFocusColor } from "../../../../theme/utils";
import { SwitchProps } from "../SwitchProps";
import { ToggleStyleProps } from "./StyledToggleSwitchInput";

export function getToggleStyle(
  props: SwitchProps,
  currentTheme: ColorTheme,
  isChecked: boolean
): ToggleStyleProps {
  let color = getColor(props.colorVariant);
  if (color == colors.transparent) {
    color = currentTheme.backgroundAccent;
  }

  const backgroundColor =
    isChecked || props.coloredAllTime
      ? color
      : currentTheme.backgroundSecondary;
  const backgroundColorHover = getFocusColor(backgroundColor);

  return { backgroundColor, backgroundColorHover };
}
