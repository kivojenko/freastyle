import React from "react";
import { ThemeProps } from "../../../theme/types/ThemeProps";
import { getButtonStyle } from "./buttonUtils";
import { StyledButton } from "./StyledButton";

export interface ButtonProps extends ThemeProps, React.PropsWithChildren {
  onClick?: (event: any) => void;
  outlined?: boolean;
  round?: boolean;
}

export function Button(props: ButtonProps) {
  const buttonStyle = getButtonStyle(props);

  return (
    <StyledButton
      className="frs-button frs-margin frs-padding"
      $s={buttonStyle}
    >
      {props.children}
    </StyledButton>
  );
}
