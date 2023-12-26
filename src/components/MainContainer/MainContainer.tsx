import React, {useEffect} from "react";

import {useAtomValue} from "jotai";

import {ThemeAtom} from "../../theme";
import "./body.css";
import "./main-container.css";

export function MainContainer(props: React.PropsWithChildren) {
  const theme = useAtomValue(ThemeAtom);

  useEffect(() => {
    document.body.style.backgroundColor = theme[theme.current].background;
  }, [theme]);

  return <div className="main-container">{props.children}</div>;
}
