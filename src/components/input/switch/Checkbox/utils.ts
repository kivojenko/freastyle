import { ColorTheme } from "../../../../theme/types/subThemes";
import { getColor, getFocusColor } from "../../../../theme/utils";
import { SwitchProps } from "../SwitchProps";
import { CheckboxStyleProps } from "./StyledCheckbox";

export function getToggleStyle(
  props: SwitchProps,
  currentTheme: ColorTheme,
  isChecked: boolean
): CheckboxStyleProps {
  let color = getColor(props.colorVariant);
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
