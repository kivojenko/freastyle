import { createGlobalStyle } from "styled-components";
import { getCurrentTheme } from "../../theme/utils";

export const StyleBody = createGlobalStyle`
  :root {
    --primary-color: ${props => getCurrentTheme(props.theme).primary};
    --secondary-color: ${props => getCurrentTheme(props.theme).secondary};
    --accent-color: ${props => getCurrentTheme(props.theme).accent};
    --text-color: ${props => getCurrentTheme(props.theme).text};
    --background-color: ${props => getCurrentTheme(props.theme).background};
    --background-secondary-color: ${props =>
    getCurrentTheme(props.theme).backgroundSecondary};
    --background-accent-color: ${props =>
    getCurrentTheme(props.theme).backgroundAccent};
  }


  body {
    margin: 0;
    height: 100vh;
    background-color: var(--background-color);
  }

  .margin {
    margin: ${p =>
    `${p.theme.margin.minYMargin}rem ${p.theme.margin.minXMargin}rem`};
  }
`;
