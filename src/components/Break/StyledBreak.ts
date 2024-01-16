import styled from "styled-components";

export interface BreakStyleProps {
  backgroundColor: string;
}

export const StyledBreak = styled.hr<{ $s: BreakStyleProps }>`
  background-color: ${p => p.$s.backgroundColor};
`;
