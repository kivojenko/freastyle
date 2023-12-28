import React from "react";
import { useAtomValue } from "jotai";
import { ThemeAtom, ThemeProps } from "../../theme";
import { getColor, getCurrentTheme } from "../../theme/utils";
import { StyledBreak } from "./StyledBreak";

export function Break(props: ThemeProps) {
  const theme = useAtomValue(ThemeAtom);
  const backgroundColor = getColor(props.colorVariant, getCurrentTheme(theme));

  return <StyledBreak $s={{ backgroundColor }} />;
}
