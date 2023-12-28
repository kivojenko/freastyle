import styled from "styled-components";

export interface ToggleStyleProps {
  backgroundColor: string;
  backgroundColorHover: string;
}

export const StyledToggleSwitchInput = styled.input<{ $s: ToggleStyleProps }>`
  appearance: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  width: ${p => p.theme.switch.size * 2 + "rem"};
  height: ${p => p.theme.switch.size + "rem"};
  border-radius: 34px;
  background-color: ${p => p.$s.backgroundColor};

  &:before {
    position: relative;
    content: "";
    height: ${p => p.theme.switch.toggleSize + "rem"};
    width: ${p => p.theme.switch.toggleSize + "rem"};
    left: ${p =>
      (p.theme.switch.size - p.theme.switch.toggleSize) * 0.5 + "rem"};
    background-color: var(--switch-color);
    -webkit-transition: 0.4s;
    transition: 0.4s;
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
