import React from "react";
import { useAtomValue } from "jotai";
import { ThemeProvider } from "styled-components";
import { ThemeAtom } from "../../theme";
import { StyleBody } from "./StyleBody";
import { StyledMainContainer } from "./StyledMainContainer";

export function MainContainer(props: React.PropsWithChildren) {
  const theme = useAtomValue(ThemeAtom);

  return (
    <ThemeProvider theme={{ ...theme }}>
      <StyledMainContainer className="main-container">
        <StyleBody theme={theme} />
        {props.children}
      </StyledMainContainer>
    </ThemeProvider>
  );
}
