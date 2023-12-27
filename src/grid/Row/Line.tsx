import React from "react";
import "./row.css";

export interface LineProps extends React.PropsWithChildren {
  direction?: "column" | "row";
  justify?: "start" | "center" | "end" | "space-between" | "space-around";
}

export function Line(props: LineProps) {
  return (
    <div
      className="row"
      style={{
        flexDirection: props.direction ?? "row",
        justifyContent: props.justify ?? "center"
      }}
    >
      {props.children}
    </div>
  );
}
