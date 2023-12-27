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

function App() {
  return (
    <MainContainer>
      <Line justify="end">
        <Label>Dark mode: </Label>
        <ThemeSwitch />
      </Line>
      <Break />
      <Line>
        <ToggleSwitch />
        <ToggleSwitch colorVariant="none" />
        <ToggleSwitch colorVariant="primary" />
        <ToggleSwitch colorVariant="secondary" />
        <ToggleSwitch colorVariant="accent" />
      </Line>
      <Line>
        <ToggleSwitch />
        <ToggleSwitch coloredAllTime colorVariant="none" />
        <ToggleSwitch coloredAllTime colorVariant="primary" />
        <ToggleSwitch coloredAllTime colorVariant="secondary" />
        <ToggleSwitch coloredAllTime colorVariant="accent" />
      </Line>
      <Break colorVariant="primary" />
      <Break colorVariant="secondary" />
      <Line>
        <Button>Default button</Button>
        <Button colorVariant="none">Transparent button</Button>
        <Button colorVariant="primary">Primary button</Button>
        <Button colorVariant="secondary">Secondary button</Button>
        <Button colorVariant="accent">Accent button</Button>
      </Line>
      <Line>
        <Button textColor="background">Default button</Button>
        <Button colorVariant="none" textColor="background">
          Transparent button
        </Button>
        <Button colorVariant="primary" textColor="background">
          Primary button
        </Button>
        <Button colorVariant="secondary" textColor="background">
          Secondary button
        </Button>
        <Button colorVariant="accent" textColor="background">
          Accent button
        </Button>
      </Line>
      <Line>
        <Button textColor="background" outlined>
          Default button
        </Button>
        <Button colorVariant="none" textColor="background" outlined>
          Transparent button
        </Button>
        <Button colorVariant="primary" textColor="background" outlined>
          Primary button
        </Button>
        <Button colorVariant="secondary" textColor="background" outlined>
          Secondary button
        </Button>
        <Button colorVariant="accent" textColor="background" outlined>
          Accent button
        </Button>
      </Line>
      <Line>
        <Button round>Default button</Button>
        <Button round colorVariant="none">
          Transparent button
        </Button>
        <Button round colorVariant="primary">
          Primary button
        </Button>
        <Button round colorVariant="secondary">
          Secondary button
        </Button>
        <Button round colorVariant="accent">
          Accent button
        </Button>
      </Line>
      <Line>
        <Button round textColor="background">
          Default button
        </Button>
        <Button round colorVariant="none" textColor="background">
          Transparent button
        </Button>
        <Button round colorVariant="primary" textColor="background">
          Primary button
        </Button>
        <Button round colorVariant="secondary" textColor="background">
          Secondary button
        </Button>
        <Button round colorVariant="accent" textColor="background">
          Accent button
        </Button>
      </Line>
      <Line>
        <Button round textColor="background" outlined>
          Default button
        </Button>
        <Button round colorVariant="none" textColor="background" outlined>
          Transparent button
        </Button>
        <Button round colorVariant="primary" textColor="background" outlined>
          Primary button
        </Button>
        <Button round colorVariant="secondary" textColor="background" outlined>
          Secondary button
        </Button>
        <Button round colorVariant="accent" textColor="background" outlined>
          Accent button
        </Button>
      </Line>
      <Break colorVariant="accent" />
    </MainContainer>
  );
}

export default App;
