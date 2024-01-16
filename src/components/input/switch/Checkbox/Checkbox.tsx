import React, { ChangeEvent, useEffect, useState } from "react";
import { SwitchProps } from "../SwitchProps";
import { getToggleStyle } from "./checkboxUtils";
import { StyledCheckbox } from "./StyledCheckbox";

export function Checkbox(props: SwitchProps) {
  const [isChecked, setIsChecked] = useState(
    props.checked ?? props.defaultChecked ?? false
  );

  const toggleStyle = getToggleStyle(props, isChecked);

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

  return (
    <StyledCheckbox
      className="frs-checkbox frs-margin"
      type="checkbox"
      checked={isChecked}
      onChange={handleToggleChange}
      $s={toggleStyle}
    />
  );
}
