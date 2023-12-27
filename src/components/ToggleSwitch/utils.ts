import { ColorTheme } from "../../theme";
import { getColor } from "../../theme/utils";
import { ToggleStyle } from "./StyledToggle";
import { ToggleProps } from "./ToggleSwitch";

export function getToggleStyle(
  props: ToggleProps,
  currentTheme: ColorTheme,
  isChecked: boolean
): ToggleStyle {
  const colorVariant = props.colorVariant;

  let color = getColor(colorVariant, currentTheme);
  if (color == "transparent") {
    color = currentTheme.backgroundAccent;
  }

  const backgroundColor =
    isChecked || props.coloredAllTime
      ? color
      : currentTheme.backgroundSecondary;

  return { backgroundColor };
}
