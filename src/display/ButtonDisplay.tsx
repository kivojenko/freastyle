import React from "react";
import { Break, Button } from "../components";
import { Checkbox } from "../components/input/switch/Checkbox";
import { Line } from "../grid";

export function ButtonDisplay() {
  return (
    <>
      <Line>
        <Checkbox />
        <Checkbox colorVariant="transparent" />
        <Checkbox colorVariant="primary" />
        <Checkbox colorVariant="secondary" />
        <Checkbox colorVariant="accent" />
      </Line>
      <Line>
        <Checkbox />
        <Checkbox coloredAllTime colorVariant="transparent" />
        <Checkbox coloredAllTime colorVariant="primary" />
        <Checkbox coloredAllTime colorVariant="secondary" />
        <Checkbox coloredAllTime colorVariant="accent" />
      </Line>
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
        <Button textColor="background" colorVariant="transparent">
          Transparent button
        </Button>
        <Button textColor="background" colorVariant="primary">
          Primary button
        </Button>
        <Button textColor="background" colorVariant="secondary">
          Secondary button
        </Button>
        <Button textColor="background" colorVariant="accent">
          Accent button
        </Button>
      </Line>
      <Line>
        <Button outlined>Default button</Button>
        <Button outlined textColor="background" colorVariant="transparent">
          Transparent button
        </Button>
        <Button outlined colorVariant="primary">
          Primary button
        </Button>
        <Button outlined colorVariant="secondary">
          Secondary button
        </Button>
        <Button outlined colorVariant="accent">
          Accent button
        </Button>
      </Line>
      <Line>
        <Button round>Default button</Button>
        <Button round colorVariant="transparent">
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
        <Button round textColor="background" colorVariant="transparent">
          Transparent button
        </Button>
        <Button round textColor="background" colorVariant="primary">
          Primary button
        </Button>
        <Button round textColor="background" colorVariant="secondary">
          Secondary button
        </Button>
        <Button round textColor="background" colorVariant="accent">
          Accent button
        </Button>
      </Line>
      <Line>
        <Button outlined round>
          Default button
        </Button>
        <Button
          outlined
          round
          textColor="background"
          colorVariant="transparent"
        >
          Transparent button
        </Button>
        <Button outlined round colorVariant="primary">
          Primary button
        </Button>
        <Button outlined round colorVariant="secondary">
          Secondary button
        </Button>
        <Button outlined round colorVariant="accent">
          Accent button
        </Button>
      </Line>
    </>
  );
}
