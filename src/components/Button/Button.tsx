import React from "react";
import { useAtomValue } from "jotai";
import { TextProps, ThemeAtom, ThemeProps } from "../../theme";
import { getCurrentTheme } from "../../theme/utils";
import { StyledButton } from "./StyledButton";
import { getButtonStyle } from "./utils";

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
  const buttonStyle = getButtonStyle(props, getCurrentTheme(theme));

  return (
    <StyledButton className="button margin" $s={buttonStyle}>
      {props.children}
    </StyledButton>
  );
}
