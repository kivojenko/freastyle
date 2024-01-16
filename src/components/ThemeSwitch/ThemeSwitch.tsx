import React from "react";
import { useAtom } from "jotai";
import { ThemeAtom } from "../../theme";
import { Checkbox } from "../input/switch/Checkbox/Checkbox";
import { ToggleSwitch } from "../input/switch/ToggleSwitch/ToggleSwitch";

export type ThemeSwitchType = "toggle" | "checkbox";

interface ThemeSwitchProps {
  type?: ThemeSwitchType;
}

export function ThemeSwitch(props: ThemeSwitchProps) {
  const [theme, setTheme] = useAtom(ThemeAtom);

  function onChange(isChecked: boolean) {
    const selectedTheme = isChecked ? "dark" : "light";

    setTheme(theme => ({ ...theme, current: selectedTheme }));
    localStorage.setItem("theme", selectedTheme);
  }

  switch (props.type) {
    case "checkbox":
      return (
        <Checkbox
          onChange={onChange}
          checked={theme.current == "dark"}
          defaultChecked={theme.current == "dark"}
        />
      );
    case "toggle":
    default:
      return (
        <ToggleSwitch
          onChange={onChange}
          checked={theme.current == "dark"}
          defaultChecked={theme.current == "dark"}
        />
      );
  }
}
