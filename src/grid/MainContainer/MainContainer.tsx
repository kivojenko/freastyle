import React from "react";
import { useAtomValue } from "jotai";
import { ThemeProvider } from "styled-components";
import { StyleBody } from "../../css/StyleBody";
import { ThemeAtom } from "../../theme";
import { StyledMainContainer } from "./StyledMainContainer";

export function MainContainer(props: React.PropsWithChildren) {
  const theme = useAtomValue(ThemeAtom);

  return (
    <ThemeProvider theme={theme}>
      <StyledMainContainer className="main-container">
        <StyleBody />
        {props.children}
      </StyledMainContainer>
    </ThemeProvider>
  );
}
