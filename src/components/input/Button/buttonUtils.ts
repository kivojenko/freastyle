import {
  getColor,
  getCurrentTheme,
  getHoverColor,
  getTheme
} from "../../../theme/colorUtils";
import { frsColors } from "../../../theme/frsColors";
import { ButtonProps } from "./Button";
import { ButtonStyle } from "./StyledButton";

export function getButtonStyle(props: ButtonProps): ButtonStyle {
  const theme = getTheme();
  const currentTheme = getCurrentTheme();
  const colorVariant = props.colorVariant;
  const textColorVariant = props.textColor;

  let backgroundColor = getColor(colorVariant);

  if (textColorVariant == "background") {
    if (colorVariant == undefined) {
      backgroundColor = currentTheme.backgroundAccent;
    } else if (colorVariant == "transparent") {
      backgroundColor = currentTheme.text;
    }
  }

  let textColor = currentTheme[textColorVariant ?? "text"];
  let borderColor = frsColors.transparent;
  let borderColorHover = frsColors.transparent;

  if (props.outlined) {
    textColor = backgroundColor;
    borderColor = backgroundColor;
    borderColorHover = backgroundColor;
    backgroundColor = frsColors.transparent;
  }

  const borderRadius = props.round
    ? theme.borderRadiusRound
    : theme.borderRadiusSharp + "rem";

  const backgroundColorHover = getHoverColor(backgroundColor);

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
