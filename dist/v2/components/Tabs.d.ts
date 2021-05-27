import { Animated } from "react-native";
import { IMeasure, ITab } from "../types";
import React from "react";
interface TabsProps {
    tabList: ITab[];
    scrollX: Animated.Value;
    onTabPress: (index: number) => void;
    measures: IMeasure[];
    setMeasures: React.Dispatch<React.SetStateAction<IMeasure[]>>;
    setScrollContainerWidth: React.Dispatch<React.SetStateAction<number>>;
}
export default function Tabs({ tabList, scrollX, onTabPress, measures, setMeasures, setScrollContainerWidth }: TabsProps): JSX.Element;
export {};
//# sourceMappingURL=Tabs.d.ts.map