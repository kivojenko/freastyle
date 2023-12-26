import React from "react";
import { useAtomValue } from "jotai";
import { ThemeAtom } from "../../theme";
import "./label.css";

export function Label(props: React.PropsWithChildren) {
  const theme = useAtomValue(ThemeAtom);

  return (
    <label
      className="label"
      style={{
        padding: "10px 20px",
        backgroundColor: "transparent",
        color: theme[theme.current].background,
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}
    >
      {" "}
      {props.children}{" "}
    </label>
  );
}
