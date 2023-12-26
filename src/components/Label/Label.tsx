import React from "react";
import "./label.css";

export function Label(props: React.PropsWithChildren) {
  return <label className="label"> {props.children} </label>;
}
