import { ThemeProps } from "../../../theme/types/ThemeProps";

export interface SwitchProps extends ThemeProps {
  onChange?: (isChecked: boolean) => void;
  checked?: boolean;
  defaultChecked?: boolean;
  coloredAllTime?: boolean;
}
