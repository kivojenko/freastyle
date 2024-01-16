import { createGlobalStyle } from "styled-components";
import { stMinXMargin, stMinYMargin } from "../../theme/styledComponentsUtils";

export const MarginStyle = createGlobalStyle`
  .frs-margin {
    margin-left: ${stMinXMargin};
    margin-right: ${stMinXMargin};
    margin-top: ${stMinYMargin};
    margin-bottom: ${stMinYMargin};
  }

  .frs-margin-x {
    margin-left: ${stMinXMargin};
    margin-right: ${stMinXMargin};
  }

  .frs-margin-y {
    margin-top: ${stMinYMargin};
    margin-bottom: ${stMinYMargin};
  }
`;
