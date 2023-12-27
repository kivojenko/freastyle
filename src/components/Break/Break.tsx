import React from "react";
import { useAtomValue } from "jotai";
import { ThemeAtom, ThemeProps } from "../../theme";
import { getColor } from "../../theme/utils";
import "./break.css";

export interface BreakProps extends ThemeProps {
  height?: number;
}

export function Break(props: BreakProps) {
  const theme = useAtomValue(ThemeAtom);
  const currentTheme = theme[theme.current];
  const colorVariant = props.colorVariant;
  const color = getColor(colorVariant, currentTheme);

  const styles: React.CSSProperties = {
    height: `${props.height ?? 2}px`,
    backgroundColor: color
  };

  return <hr style={styles} className="break" />;
}
