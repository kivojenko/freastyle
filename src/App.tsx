import React from "react";
import {
  Break,
  Button,
  Label,
  MainContainer,
  ThemeSwitch,
  ToggleSwitch
} from "./components";
import { Line } from "./grid";
import "./App.css";


// prettier-ignore
function App() {
  return (
    <MainContainer>
      <Line justify="end">
        <Label>Dark mode: </Label>
        <ThemeSwitch />
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
      <Break colorVariant="secondary" />
      <Line>
        <Button>Default button</Button>
        <Button colorVariant="transparent">Transparent button</Button>
        <Button colorVariant="primary">Primary button</Button>
        <Button colorVariant="secondary">Secondary button</Button>
        <Button colorVariant="accent">Accent button</Button>
      </Line>
      <Line>
        <Button textColor="background">Default button</Button>
        <Button textColor="background" colorVariant="transparent">Transparent button</Button>
        <Button textColor="background" colorVariant="primary">Primary button</Button>
        <Button textColor="background" colorVariant="secondary">Secondary button</Button>
        <Button textColor="background" colorVariant="accent">Accent button</Button>
      </Line>
      <Line>
        <Button outlined>Default button</Button>
        <Button outlined textColor="background" colorVariant="transparent">Transparent button</Button>
        <Button outlined colorVariant="primary">Primary button</Button>
        <Button outlined colorVariant="secondary">Secondary button</Button>
        <Button outlined colorVariant="accent">Accent button</Button>
      </Line>
      <Line>
        <Button round>Default button</Button>
        <Button round colorVariant="transparent">Transparent button</Button>
        <Button round colorVariant="primary">Primary button</Button>
        <Button round colorVariant="secondary">Secondary button</Button>
        <Button round colorVariant="accent">Accent button</Button>
      </Line>
      <Line>
        <Button round textColor="background">Default button</Button>
        <Button round textColor="background" colorVariant="transparent">Transparent button</Button>
        <Button round textColor="background" colorVariant="primary">Primary button</Button>
        <Button round textColor="background" colorVariant="secondary">Secondary button</Button>
        <Button round textColor="background" colorVariant="accent">Accent button</Button>
      </Line>
      <Line>
        <Button outlined round>Default button</Button>
        <Button outlined round textColor="background" colorVariant="transparent">Transparent button</Button>
        <Button outlined round colorVariant="primary">Primary button</Button>
        <Button outlined round colorVariant="secondary">Secondary button</Button>
        <Button outlined round colorVariant="accent">Accent button</Button>
      </Line>
      <Break colorVariant="accent" />
    </MainContainer>
  );
}

export default App;
