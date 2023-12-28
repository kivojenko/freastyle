import { ThemeProps } from "../../../theme";

export interface SwitchProps extends ThemeProps {
  onChange?: (isChecked: boolean) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  coloredAllTime?: boolean;
}
