import React from "react";
import { ThemeProps } from "../../../theme/types/subThemes";
import { StyledButton } from "./StyledButton";
import { getButtonStyle } from "./utils";

export interface ButtonProps extends ThemeProps, React.PropsWithChildren {
  onClick?: (event: any) => void;
  outlined?: boolean;
  round?: boolean;
}

export function Button(props: ButtonProps) {
  const buttonStyle = getButtonStyle(props);

  return (
    <StyledButton className="margin padding" $s={buttonStyle}>
      {props.children}
    </StyledButton>
  );
}
