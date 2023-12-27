import { createGlobalStyle } from "styled-components";
import { StyleProps } from "../../theme";
import { getCurrentTheme } from "../../theme/utils";

export const StyleBody = createGlobalStyle<StyleProps>`
  body {
    margin: 0;
    height: 100vh;
    background-color: ${props => getCurrentTheme(props.theme).background};
  }
`;
