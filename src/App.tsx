import React from "react";
import {
  Break,
  Label,
  MainContainer,
  ThemeSwitch,
  ToggleSwitch
} from "./components";
import "./App.css";

function App() {
  return (
    <MainContainer>
      <Label>Dark mode: </Label>
      <ThemeSwitch />
      <Break colorVariant="primary" />
      <ToggleSwitch />
    </MainContainer>
  );
}

export default App;
