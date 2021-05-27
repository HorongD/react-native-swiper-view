import { ReactElement } from "react";

export interface ITab {
  name: string,
  component: ReactElement,
}

export interface IMeasure {
  x: number;
  y: number;
  width: number;
  height: number;
}