import React, { ChangeEvent, useState } from "react";
import { useAtomValue } from "jotai";
import { ThemeAtom, ThemeProps } from "../../theme";
import { getColor } from "../../theme/utils";
import "./toggle-switch.css";

interface ToggleProps extends ThemeProps {
  onChange?: (isChecked: boolean) => void;
  defaultChecked?: boolean;
  coloredAllTime?: boolean;
}

export function ToggleSwitch(props: ToggleProps) {
  const theme = useAtomValue(ThemeAtom);
  const currentTheme = theme[theme.current];
  const colorVariant = props.colorVariant;
  let color = getColor(colorVariant, currentTheme);
  if (color == "transparent") {
    color = currentTheme.backgroundAccent;
  }

  const [isChecked, setChecked] = useState(props.defaultChecked ?? false);

  const handleToggleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setChecked(newChecked);
    props.onChange(newChecked);
  };

  return (
    <label
      className="switch"
      style={{ margin: `${theme.minYMargin}rem ${theme.minXMargin}rem` }}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggleChange}
      />
      <span
        className="slider"
        style={{
          backgroundColor:
            isChecked || props.coloredAllTime
              ? color
              : currentTheme.backgroundSecondary
        }}
      />
    </label>
  );
}
