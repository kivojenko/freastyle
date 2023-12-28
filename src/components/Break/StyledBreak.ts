import styled from "styled-components";

export interface BreakStyleProps {
  backgroundColor: string;
}

export const StyledBreak = styled.hr<{ $s: BreakStyleProps }>`
  margin: 20px 0;
  border: none;
  height: 2px;
  background-color: ${p => p.$s.backgroundColor};
`;
