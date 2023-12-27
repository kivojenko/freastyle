import React, { ChangeEvent, useState } from "react";
import { useAtomValue } from "jotai";
import { ThemeAtom, ThemeProps } from "../../theme";
import { getCurrentTheme } from "../../theme/utils";
import { StyledSwitch } from "./StyledSwitch";
import { StyledToggle } from "./StyledToggle";
import { StyledToggleSwitchInput } from "./StyledToggleSwitchInput";
import { getToggleStyle } from "./utils";

export interface ToggleProps extends ThemeProps {
  onChange?: (isChecked: boolean) => void;
  defaultChecked?: boolean;
  coloredAllTime?: boolean;
}

export function ToggleSwitch(props: ToggleProps) {
  const theme = useAtomValue(ThemeAtom);
  const [isChecked, setChecked] = useState(props.defaultChecked ?? false);

  const handleToggleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    if (props.onChange) {
      props.onChange(event.target.checked);
    }
  };

  const toggleStyle = getToggleStyle(props, getCurrentTheme(theme), isChecked);

  return (
    <StyledSwitch className="margin">
      <StyledToggleSwitchInput
        type="checkbox"
        checked={isChecked}
        onChange={handleToggleChange}
      />
      <StyledToggle $s={toggleStyle} />
    </StyledSwitch>
  );
}
