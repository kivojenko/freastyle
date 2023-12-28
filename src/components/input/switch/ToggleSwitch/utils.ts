import { ColorTheme } from "../../../../theme";
import { getColor, getFocusColor } from "../../../../theme/utils";
import { ToggleStyleProps } from "./StyledToggle";
import { ToggleProps } from "./ToggleSwitch";

export function getToggleStyle(
  props: ToggleProps,
  currentTheme: ColorTheme,
  isChecked: boolean
): ToggleStyleProps {
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
