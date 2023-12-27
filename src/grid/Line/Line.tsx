import React from "react";
import { StyledLine } from "./StyledLine";

export interface LineProps extends React.PropsWithChildren {
  direction?: "column" | "row";
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
}

export function Line(props: LineProps) {
  return (
    <StyledLine className="line" $s={props}>
      {props.children}
    </StyledLine>
  );
}
