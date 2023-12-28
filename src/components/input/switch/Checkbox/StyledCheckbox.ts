import styled from "styled-components";

export interface CheckboxStyleProps {
  backgroundColor: string;
  backgroundColorHover: string;
}

export const StyledCheckbox = styled.input<{ $s: CheckboxStyleProps }>`
  width: ${p => p.theme.switch.size + "rem"};
  height: ${p => p.theme.switch.size + "rem"};
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-transition: 0.4s;
  border: none;
  border-radius: ${p => p.theme.borderRadiusSharp};
  background-color: ${p => p.$s.backgroundColor};

  &:hover {
    background-color: ${p => p.$s.backgroundColorHover};
  }

  &:before {
    content: "\\2713"; /* Unicode character for checkmark */
    font-size: 27px;
    font-weight: bold;
    color: var(--switch-color); /* Checkmark color when checked */
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;
