import React from "react";
import {
  Break,
  Label,
  MainContainer,
  ThemeSwitch,
  ToggleSwitch
} from "./components";
import { ButtonDisplay } from "./display/ButtonDisplay";
import { Line } from "./grid";


// prettier-ignore
function App() {
  return (
    <MainContainer>
      <Line justify="end">
        <Label>Dark mode: </Label>
        <ThemeSwitch type="checkbox" />
        <Label>Dark mode: </Label>
        <ThemeSwitch type="toggle" />
      </Line>
      <Break />
      <Line direction="column">
        <Line>
          <ToggleSwitch />
          <ToggleSwitch colorVariant="transparent" />
          <ToggleSwitch colorVariant="primary" />
          <ToggleSwitch colorVariant="secondary" />
          <ToggleSwitch colorVariant="accent" />
        </Line>
        <Line>
          <ToggleSwitch />
          <ToggleSwitch coloredAllTime colorVariant="transparent" />
          <ToggleSwitch coloredAllTime colorVariant="primary" />
          <ToggleSwitch coloredAllTime colorVariant="secondary" />
          <ToggleSwitch coloredAllTime colorVariant="accent" />
        </Line>
      </Line>
      <Break colorVariant="primary" />
      <ButtonDisplay />
      <Break colorVariant="accent" />
    </MainContainer>
  );
}

export default App;
