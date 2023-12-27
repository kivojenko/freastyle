import React from "react";
import { useAtomValue } from "jotai";
import { TextProps, ThemeAtom, ThemeProps } from "../../theme";
import { getColor } from "../../theme/utils";
import { StyleButton } from "./StyleButton";
import "./button.css";

export interface ButtonProps
  extends ThemeProps,
    TextProps,
    React.PropsWithChildren {
  onClick?: (event: any) => void;
  outlined?: boolean;
  round?: boolean;
}

export function Button(props: ButtonProps) {
  const theme = useAtomValue(ThemeAtom);
  const currentTheme = theme[theme.current];
  const colorVariant = props.colorVariant;
  const textColorVariant = props.textColor;

  let color = getColor(colorVariant, currentTheme);
  let textColor = currentTheme[textColorVariant ?? "text"];

  if (colorVariant == "none" && textColorVariant == "background") {
    color = currentTheme.text;
    textColor = currentTheme.background;
  }

  if (colorVariant == undefined && textColorVariant == "background") {
    color = currentTheme.backgroundAccent;
    textColor = currentTheme.background;
  }

  return (
    <StyleButton
      className="button"
      theme={theme}
      onClick={props.onClick}
      textColor={textColor}
      color={color}
      outlined={props.outlined}
      round={props.round}
    >
      {props.children}
    </StyleButton>
  );
}
