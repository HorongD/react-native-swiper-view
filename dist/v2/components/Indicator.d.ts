/// <reference types="react" />
import { Animated } from "react-native";
import { IMeasure, ITab } from "../types";
interface IndicatorProps {
    tabList: ITab[];
    measures: IMeasure[];
    scrollX: Animated.Value;
}
export default function Indicator({ tabList, measures, scrollX }: IndicatorProps): JSX.Element;
export {};
//# sourceMappingURL=Indicator.d.ts.map