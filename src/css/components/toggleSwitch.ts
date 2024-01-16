import { createGlobalStyle } from "styled-components";
import {
  stActionTransition,
  stSwitchSize,
  stSwitchToggleSize
} from "../../theme/styledComponentsUtils";

export const ToggleSwitchStyle = createGlobalStyle`
  .frs-toggle-switch {
    transition: ${stActionTransition};
    appearance: none;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    width: ${p => p.theme.switch.size * 2 + "rem"};
    height: ${stSwitchSize};
    border-radius: ${stSwitchSize};

    &:before {
      -webkit-transition: ${stActionTransition};
      transition: ${stActionTransition};
      position: relative;
      content: "";
      height: ${stSwitchToggleSize};
      width: ${stSwitchToggleSize};
      left: ${p =>
        (p.theme.switch.size - p.theme.switch.toggleSize) * 0.5 + "rem"};
      background-color: var(--switch-color);
      border-radius: 50%;
    }
  }
`;
