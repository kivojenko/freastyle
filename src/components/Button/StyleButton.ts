import styled from "styled-components";
import { StyleProps } from "../../theme";
import { getFocusColor } from "../../theme/utils";

export interface StyleButtonProps extends StyleProps {
  outlined: boolean;
  round: boolean;
  textColor: string;
}

export const StyleButton = styled.button<StyleButtonProps>`
  margin: ${props =>
    `${props.theme.minYMargin}rem ${props.theme.minXMargin}rem`};
  background-color: ${props => (props.outlined ? "transparent" : props.color)};
  color: ${props => (props.outlined ? props.color : props.textColor)};
  border-color: ${props => (props.outlined ? props.color : "transparent")};
  border-radius: ${props => (props.round ? "25px" : "4px")};

  &:hover {
    background-color: ${props =>
    props.outlined ? "transparent" : getFocusColor(props.color)};
  }
`;
