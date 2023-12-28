import React from "react";
import { StyledLabel } from "./StyledLabel";

export function Label(props: React.PropsWithChildren) {
  return <StyledLabel className="margin">{props.children}</StyledLabel>;
}
