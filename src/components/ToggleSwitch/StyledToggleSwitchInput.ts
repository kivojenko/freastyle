import styled from "styled-components";

export const StyledToggleSwitchInput = styled.input`
  display: none;

  &:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
