import React from "react";
import "./App.css";
import { Break, Label, MainContainer, ThemeSwitch, ToggleSwitch } from "./components";

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
