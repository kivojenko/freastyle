import React, {useState, ChangeEvent} from 'react';
import "./toggle-switch.css"

interface ToggleProps {
  onChange?: (isChecked: boolean) => void;
  defaultChecked?: boolean;
}

export function ToggleSwitch(props: ToggleProps) {
  const [isChecked, setChecked] = useState(props.defaultChecked ?? false);

  const handleToggleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    props.onChange(newChecked);
  };

  return (
    <label className="switch">
      <input type="checkbox"
             checked={isChecked}
             onChange={handleToggleChange}/>
      <span className="slider round"></span>
    </label>
  );
}