import styled from "styled-components";

export interface BreakStyleProps {
  backgroundColor: string;
}

export const StyledBreak = styled.hr<{ $s: BreakStyleProps }>`
  border: none;
  height: 2px;
  background-color: ${p => p.$s.backgroundColor};
`;
