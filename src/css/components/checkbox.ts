import { createGlobalStyle } from "styled-components";
import {
  stActionTransition,
  stBorderRadiusSharp,
  stSwitchSize
} from "../../theme/styledComponentsUtils";

export const CheckboxStyle = createGlobalStyle`
  .frs-checkbox {
    width: ${stSwitchSize};
    height: ${stSwitchSize};
    appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: ${stActionTransition};
    border: none;
    border-radius: ${stBorderRadiusSharp};

    &:before {
      content: "\\2713"; /* Unicode character for checkmark */
      font-size: 27px;
      font-weight: bold;
      color: var(--switch-color); /* Checkmark color when checked */
    }
  }
`;
