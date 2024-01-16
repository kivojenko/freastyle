import { createGlobalStyle } from "styled-components";
import {
  stAccentColor,
  stBackgroundAccentColor,
  stBackgroundColor,
  stBackgroundSecondaryColor,
  stMinXMargin,
  stMinXPadding,
  stMinYMargin,
  stMinYPadding,
  stPrimaryColor,
  stSecondaryColor,
  stSwitchColor,
  stTextColor
} from "../../theme/styledComponentsUtils";

// prettier-ignore
export const StyleBody = createGlobalStyle`
  :root {
    --primary-color: ${stPrimaryColor};
    --secondary-color: ${stSecondaryColor};
    --accent-color: ${stAccentColor};
    --text-color: ${stTextColor};
    --switch-color: ${stSwitchColor};
    --background-color: ${stBackgroundColor};
    --background-secondary-color: ${stBackgroundSecondaryColor};
    --background-accent-color: ${stBackgroundAccentColor};
  }


  body {
    margin: 0;
    height: 100vh;
    background-color: var(--background-color);
  }

  .margin {
    margin-left: ${stMinXMargin};
    margin-right: ${stMinXMargin};
    margin-top: ${stMinYMargin};
    margin-bottom: ${stMinYMargin};
  }

  .margin-x {
    margin-left: ${stMinXMargin};
    margin-right: ${stMinXMargin};
  }

  .margin-y {
    margin-top: ${stMinYMargin};
    margin-bottom: ${stMinYMargin};
  }

  .padding {
    padding-left: ${stMinXPadding};
    padding-right: ${stMinXPadding};
    padding-top: ${stMinYPadding};
    padding-bottom: ${stMinYPadding};
  }

  .padding-x {
    padding-left: ${stMinXPadding};
    padding-right: ${stMinXPadding};
  }

  .padding-y {
    padding-top: ${stMinYPadding};
    padding-bottom: ${stMinYPadding};
  }
`;
