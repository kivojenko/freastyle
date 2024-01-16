import React from "react";
import { StyledLabel } from "./StyledLabel";

export function Label(props: React.PropsWithChildren) {
  return (
    <StyledLabel className="frs-label frs-margin">{props.children}</StyledLabel>
  );
}
