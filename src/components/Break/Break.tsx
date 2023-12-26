import React from "react";
import { useAtomValue } from "jotai";
import { ThemeAtom, ThemeProps } from "../../theme";
import "./break.css";

export function Break(props: ThemeProps) {
  const theme = useAtomValue(ThemeAtom);

  const styles: React.CSSProperties = {
    height: "2px",
    backgroundColor: theme[theme.current][props.colorVariant]
  };

  return <hr style={styles} className="break" />;
}
