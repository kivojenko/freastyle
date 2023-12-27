import styled from "styled-components";

export interface ToggleStyle {
  backgroundColor: string;
}

export const StyledToggle = styled.span<{ $s: ToggleStyle }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  background-color: ${p => p.$s.backgroundColor};

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
