import { createGlobalStyle } from "styled-components";
import {
  stAccentColor,
  stBackgroundAccentColor,
  stBackgroundColor,
  stBackgroundSecondaryColor,
  stPrimaryColor,
  stSecondaryColor,
  stSwitchColor,
  stTextColor
} from "../../theme/styledComponentsUtils";

export const RootStyle = createGlobalStyle`
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
`;
