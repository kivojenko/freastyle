import React from "react";
import "./break.css"
import {ThemeAtom, ThemeProps} from "../../theme";
import {useAtomValue} from "jotai/index";

export function Break(props: ThemeProps) {

  const theme = useAtomValue(ThemeAtom);

  const styles: React.CSSProperties = {
    height: '2px',
    backgroundColor: theme[theme.current][props.colorVariant]
  };

  return (
    <hr style={styles} className="break"/>
  );
}