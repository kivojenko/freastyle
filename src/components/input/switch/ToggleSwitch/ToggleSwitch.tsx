import React, { ChangeEvent, useEffect, useState } from "react";
import { SwitchProps } from "../SwitchProps";
import { StyledToggleSwitch } from "./StyledToggleSwitch";
import { getToggleStyle } from "./toggleSwitchUtils";

export function ToggleSwitch(props: SwitchProps) {
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

  const toggleStyle = getToggleStyle(props, isChecked);

  return (
    <StyledToggleSwitch
      className="frs-toggle-switch frs-margin"
      type="checkbox"
      checked={isChecked}
      onChange={handleToggleChange}
      $s={toggleStyle}
    />
  );
}
