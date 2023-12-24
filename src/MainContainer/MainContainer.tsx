import React, {useEffect} from "react";
import {ThemeAtom} from "../theme";
import {useAtomValue} from "jotai";

export function MainContainer(props: React.PropsWithChildren) {

  const theme = useAtomValue(ThemeAtom);

  document.body.style.margin = "0";
  document.body.style.height = "100vh"
  useEffect(() => {document.body.style.background = theme[theme.current].background}, [theme]);

  const styles: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: theme[theme.current].background,
    color: theme[theme.current].text,
    height: "inherit"
  };

  return (
    <div style={styles}>
      {props.children}
    </div>
  )
}