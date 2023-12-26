import React from 'react';
import './App.css';
import {MainContainer} from "./components/MainContainer";
import {ThemeSwitch} from "./components/ThemeSwitch";
import {ToggleSwitch} from "./components/ToggleSwitch";
import {Break} from "./components/Break";
import {Label} from "./components/Label";


function App() {

  return (
    <MainContainer>
      <Label>Dark mode: </Label><ThemeSwitch/>
      <Break colorVariant="primary"/>
      <ToggleSwitch/>
    </MainContainer>
  )
}

export default App;
