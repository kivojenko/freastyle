import React from "react";
import { getColor } from "../../theme/colorUtils";
import { ThemeProps } from "../../theme/types/ThemeProps";
import { StyledBreak } from "./StyledBreak";

export function Break(props: ThemeProps) {
  const backgroundColor = getColor(props.colorVariant);

  return (
    <StyledBreak className="frs-break frs-margin-y" $s={{ backgroundColor }} />
  );
}
