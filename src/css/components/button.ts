import { createGlobalStyle } from "styled-components";
import {
  stBorderWidth,
  stFocusTransition
} from "../../theme/styledComponentsUtils";

export const ButtonStyle = createGlobalStyle`
  .frs-button {
    cursor: pointer;
    font-weight: bold;
    border-style: solid;
    border-width: ${stBorderWidth};
    transition: ${stFocusTransition};
  }
`;
