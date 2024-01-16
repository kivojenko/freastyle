import {
  getColor,
  getCurrentTheme,
  getHoverColor
} from "../../../../theme/colorUtils";
import { frsColors } from "../../../../theme/frsColors";
import { SwitchProps } from "../SwitchProps";
import { ToggleStyleProps } from "./StyledToggleSwitch";

export function getToggleStyle(
  props: SwitchProps,
  isChecked: boolean
): ToggleStyleProps {
  const currentTheme = getCurrentTheme();
  let color = getColor(props.colorVariant);
  if (color == frsColors.transparent) {
    color = currentTheme.backgroundAccent;
  }

  const backgroundColor =
    isChecked || props.coloredAllTime
      ? color
      : currentTheme.backgroundSecondary;
  const backgroundColorHover = getHoverColor(backgroundColor);

  return { backgroundColor, backgroundColorHover };
}
