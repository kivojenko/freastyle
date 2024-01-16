import React from "react";
import { ThemeProps } from "../../theme";
import { getColor } from "../../theme/utils";
import { StyledBreak } from "./StyledBreak";

export function Break(props: ThemeProps) {
  const backgroundColor = getColor(props.colorVariant);

  return <StyledBreak className="margin-Y" $s={{ backgroundColor }} />;
}
