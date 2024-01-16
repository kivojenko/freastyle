import styled from "styled-components";

export interface CheckboxStyleProps {
  backgroundColor: string;
  backgroundColorHover: string;
}

export const StyledCheckbox = styled.input<{ $s: CheckboxStyleProps }>`
  background-color: ${p => p.$s.backgroundColor};

  &:hover {
    background-color: ${p => p.$s.backgroundColorHover};
  }

  &:before {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;
