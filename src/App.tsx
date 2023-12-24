import React from 'react';
import './App.css';
import {MainContainer} from "./MainContainer";
import {useAtomValue} from "jotai";
import {ThemeAtom} from "./theme";
import {ThemeSwitch} from "./ThemeSwitch";


function App() {

  const theme = useAtomValue(ThemeAtom)
  console.log(theme)

  return (
    <MainContainer>
      <ThemeSwitch/>
    </MainContainer>
  )
}

export default App;
