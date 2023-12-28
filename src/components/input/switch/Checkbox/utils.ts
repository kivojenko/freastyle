import { ColorTheme } from "../../../../theme";
import { getColor, getFocusColor } from "../../../../theme/utils";
import { SwitchProps } from "../SwitchProps";
import { CheckboxStyleProps } from "./StyledCheckbox";

export function getToggleStyle(
  props: SwitchProps,
  currentTheme: ColorTheme,
  isChecked: boolean
): CheckboxStyleProps {
  let color = getColor(props.colorVariant, currentTheme);
  if (color == "transparent") {
    color = currentTheme.backgroundAccent;
  }

  const backgroundColor =
    isChecked || props.coloredAllTime
      ? color
      : currentTheme.backgroundSecondary;
  const backgroundColorHover = getFocusColor(backgroundColor);

  return { backgroundColor, backgroundColorHover };
}
