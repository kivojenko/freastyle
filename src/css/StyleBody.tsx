import React from "react";
import { BreakStyle } from "./components/break";
import { ButtonStyle } from "./components/button";
import { CheckboxStyle } from "./components/checkbox";
import { LabelStyle } from "./components/label";
import { ToggleSwitchStyle } from "./components/toggleSwitch";
import { BodyStyle } from "./main/body";
import { RootStyle } from "./main/root";
import { MarginStyle } from "./style/margin";
import { PaddingStyle } from "./style/padding";

export function StyleBody() {
  return (
    <>
      <RootStyle />
      <BodyStyle />

      <MarginStyle />
      <PaddingStyle />

      <ButtonStyle />
      <BreakStyle />
      <CheckboxStyle />
      <LabelStyle />
      <ToggleSwitchStyle />
    </>
  );
}
