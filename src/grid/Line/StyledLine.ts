import styled from "styled-components";
import { LineProps } from "./Line";

export const StyledLine = styled.div<{ $s: LineProps }>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: ${p => p.$s.direction ?? "row"};
  justify-content: ${p => p.$s.justify ?? "center"};
`;
