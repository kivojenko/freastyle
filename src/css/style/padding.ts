import { createGlobalStyle } from "styled-components";
import {
  stMinXPadding,
  stMinYPadding
} from "../../theme/styledComponentsUtils";

export const PaddingStyle = createGlobalStyle`
  .frs-padding {
    padding-left: ${stMinXPadding};
    padding-right: ${stMinXPadding};
    padding-top: ${stMinYPadding};
    padding-bottom: ${stMinYPadding};
  }

  .frs-padding-x {
    padding-left: ${stMinXPadding};
    padding-right: ${stMinXPadding};
  }

  .frs-padding-y {
    padding-top: ${stMinYPadding};
    padding-bottom: ${stMinYPadding};
  }
`;
