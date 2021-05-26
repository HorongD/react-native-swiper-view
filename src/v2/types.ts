import { ReactElement, RefObject } from "react";
import { View } from "react-native";

export interface ITab {
  name: string,
  component: ReactElement,
  ref?: RefObject<View>;
}

export interface IMeasure {
  x: number;
  y: number;
  width: number;
  height: number;
}