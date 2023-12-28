import { Theme } from "../../../theme";
import { colors } from "../../../theme/colors";
import { getColor, getCurrentTheme, getFocusColor } from "../../../theme/utils";
import { ButtonProps } from "./Button";
import { ButtonStyle } from "./StyledButton";

export function getButtonStyle(props: ButtonProps, theme: Theme): ButtonStyle {
  const currentTheme = getCurrentTheme(theme);
  const colorVariant = props.colorVariant;
  const textColorVariant = props.textColor;

  let backgroundColor = getColor(colorVariant, currentTheme);

  if (textColorVariant == "background") {
    if (colorVariant == undefined) {
      backgroundColor = currentTheme.backgroundAccent;
    } else if (colorVariant == "transparent") {
      backgroundColor = currentTheme.text;
    }
  }

  let textColor = currentTheme[textColorVariant ?? "text"];
  let borderColor = colors.transparent;
  let borderColorHover = colors.transparent;

  if (props.outlined) {
    textColor = backgroundColor;
    borderColor = backgroundColor;
    borderColorHover = backgroundColor;
    backgroundColor = colors.transparent;
  }

  const borderRadius = props.round
    ? theme.borderRadiusRound
    : theme.borderRadiusSharp;

  const backgroundColorHover = getFocusColor(backgroundColor);

  return {
    backgroundColor,
    textColor,
    borderColor,
    backgroundColorHover,
    textColorHover: textColor,
    borderColorHover,
    borderRadius
  };
}
