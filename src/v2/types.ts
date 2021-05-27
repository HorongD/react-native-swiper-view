import { ReactElement, RefObject } from "react";
import { View } from "react-native";

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