import React from "react";
import {useAtom} from "jotai";
import {ThemeAtom} from "../theme";
import {ToggleSwitch} from "../ToggleSwitch";

export type ThemeSwitchType = "toggle"

interface ThemeSwitchProps {
  type?: ThemeSwitchType;
}

export function ThemeSwitch(props: ThemeSwitchProps) {
  const [theme, setTheme] = useAtom(ThemeAtom);

  function onChange(isChecked: boolean) {
    const selectedTheme = isChecked ? "dark" : "light";

    setTheme(theme => ({...theme, current: selectedTheme}));
    localStorage.setItem("theme", selectedTheme)
  }

  switch(props.type){
    case "toggle":
    default: return <ToggleSwitch onChange={onChange} defaultChecked={theme.current == "dark"}/>
  }
}