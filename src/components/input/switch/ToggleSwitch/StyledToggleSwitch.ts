import styled from "styled-components";
import { stActionTransition } from "../../../../theme/styledComponentsUtils";

export interface ToggleStyleProps {
  backgroundColor: string;
  backgroundColorHover: string;
}

export const StyledToggleSwitch = styled.input<{ $s: ToggleStyleProps }>`
  background-color: ${p => p.$s.backgroundColor};


  &:before {
    transition: ${stActionTransition};
    position: relative;
    content: "";
    height: ${p => p.theme.switch.toggleSize + "rem"};
    width: ${p => p.theme.switch.toggleSize + "rem"};
    left: ${p =>
      (p.theme.switch.size - p.theme.switch.toggleSize) * 0.5 + "rem"};
    background-color: var(--switch-color);
    border-radius: 50%;
    transform: ${p =>
      p.checked
        ? "translateX(" + p.theme.switch.size + "rem)"
        : "translate(0)"};
  }

  &:hover {
    background-color: ${p => p.$s.backgroundColorHover};
  }
}
`;
