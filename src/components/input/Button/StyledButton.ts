import styled from "styled-components";

export interface ButtonStyle {
  backgroundColor: string;
  textColor: string;
  borderColor: string;

  backgroundColorHover: string;
  textColorHover: string;
  borderColorHover: string;

  borderRadius: string;
}

export const StyledButton = styled.button<{ $s: ButtonStyle }>`
  background-color: ${p => p.$s.backgroundColor};
  color: ${p => p.$s.textColor};
  border-color: ${p => p.$s.borderColor};
  border-radius: ${p => p.$s.borderRadius};

  &:hover {
    background-color: ${p => p.$s.backgroundColorHover};
    color: ${p => p.$s.textColorHover};
    border-color: ${p => p.$s.borderColorHover};
  }
`;
