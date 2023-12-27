import React from "react";
import { useAtomValue } from "jotai";
import { ThemeAtom } from "../../theme";
import { StyleBody } from "./StyleBody";
import "./main-container.css";

export function MainContainer(props: React.PropsWithChildren) {
  const theme = useAtomValue(ThemeAtom);

  return (
    <div className="main-container">
      <StyleBody theme={theme} />
      {props.children}
    </div>
  );
}
