import React, { ChangeEvent, useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { ThemeAtom } from "../../../../theme";
import { getCurrentTheme } from "../../../../theme/utils";
import { SwitchProps } from "../SwitchProps";
import { StyledToggleSwitchInput } from "./StyledToggleSwitchInput";
import { getToggleStyle } from "./utils";

export function ToggleSwitch(props: SwitchProps) {
  const theme = useAtomValue(ThemeAtom);
  const [isChecked, setIsChecked] = useState(
    props.checked ?? props.defaultChecked ?? false
  );

  function setChecked(isChecked: boolean) {
    setIsChecked(isChecked);
    if (props.onChange) {
      props.onChange(isChecked);
    }
  }

  useEffect(
    () => (props.checked != undefined ? setChecked(props.checked) : undefined),
    [props.checked]
  );

  function handleToggleChange(event: ChangeEvent<HTMLInputElement>) {
    setChecked(event.target.checked);
  }

  const toggleStyle = getToggleStyle(props, getCurrentTheme(theme), isChecked);

  return (
    <StyledToggleSwitchInput
      className="margin"
      type="checkbox"
      checked={isChecked}
      onChange={handleToggleChange}
      $s={toggleStyle}
    />
  );
}
