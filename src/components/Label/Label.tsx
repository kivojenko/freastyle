import React from "react";
import { useAtomValue } from "jotai";
import { ThemeAtom } from "../../theme";
import "./label.css";

export function Label(props: React.PropsWithChildren) {
  const theme = useAtomValue(ThemeAtom);
  const currentTheme = theme[theme.current];

  return (
    <label
      className="label"
      style={{
        backgroundColor: "transparent",
        color: currentTheme.text,
        margin: `${theme.minYMargin}rem ${theme.minXMargin}rem`
      }}
    >
      {" "}
      {props.children}{" "}
    </label>
  );
}
