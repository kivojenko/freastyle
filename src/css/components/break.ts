import { createGlobalStyle } from "styled-components";
import { stBorderWidth } from "../../theme/styledComponentsUtils";

export const BreakStyle = createGlobalStyle`
  .frs-break {
    border: none;
    height: ${stBorderWidth};
  }
`;
