import { Animated } from 'react-native';
import { IMeasure, ITab } from '../types';
import React from 'react';
interface TabsProps {
    tabList: ITab[];
    scrollX: Animated.Value;
    onTabPress: (index: number) => void;
    measures: IMeasure[];
    setMeasures: React.Dispatch<React.SetStateAction<IMeasure[]>>;
    setScrollContainerWidth: React.Dispatch<React.SetStateAction<number>>;
    currentIndex: number;
    tabButtonStyles: object;
    tabButtonActiveStyles: object;
    tabButtonTextStyles: object;
    tabButtonTextActiveStyles: object;
    tabBarContainerStyles: object;
    tabBarLineStyles: object;
    tabBarStyles: object;
    tabTextColor: string;
    tabBarColor: string;
    tabTextSelectedColor: string;
}
export default function Tabs({ tabList, scrollX, onTabPress, measures, setMeasures, setScrollContainerWidth, currentIndex, tabButtonStyles, tabButtonActiveStyles, tabButtonTextStyles, tabButtonTextActiveStyles, tabBarStyles, tabTextColor, tabBarColor, tabTextSelectedColor, }: TabsProps): JSX.Element;
export {};
//# sourceMappingURL=Tabs.d.ts.map