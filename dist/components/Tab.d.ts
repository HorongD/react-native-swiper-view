/// <reference types="react" />
import { LayoutChangeEvent } from 'react-native';
import { ITab } from '../types';
interface TabProps {
    isSelected: boolean;
    tab: ITab;
    tabButtonStyles: object;
    tabButtonActiveStyles: object;
    tabButtonTextStyles: object;
    tabButtonTextActiveStyles: object;
    onTabPress: () => void;
    onTabLayout: (e: LayoutChangeEvent) => void;
    tabTextColor: string;
    tabTextSelectedColor: string;
}
export default function Tab({ isSelected, tab, tabButtonStyles, tabButtonActiveStyles, tabButtonTextStyles, tabButtonTextActiveStyles, onTabPress, onTabLayout, tabTextColor, tabTextSelectedColor, }: TabProps): JSX.Element;
export {};
//# sourceMappingURL=Tab.d.ts.map