import {
  getColor,
  getCurrentTheme,
  getHoverColor
} from "../../../../theme/colorUtils";
import { SwitchProps } from "../SwitchProps";
import { CheckboxStyleProps } from "./StyledCheckbox";

export function getToggleStyle(
  props: SwitchProps,
  isChecked: boolean
): CheckboxStyleProps {
  const currentTheme = getCurrentTheme();
  let color = getColor(props.colorVariant);
  if (color == "transparent") {
    color = currentTheme.backgroundAccent;
  }

  const backgroundColor =
    isChecked || props.coloredAllTime
      ? color
      : currentTheme.backgroundSecondary;
  const backgroundColorHover = getHoverColor(backgroundColor);

  return { backgroundColor, backgroundColorHover };
}
