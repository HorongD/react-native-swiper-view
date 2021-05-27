import { ReactElement } from 'react';
import { ITab } from './types';
interface SwiperViewProps {
    tabList: ITab[];
    tabHeaderStyles: object;
    tabButtonStyles: object;
    tabButtonActiveStyles: object;
    tabButtonTextStyles: object;
    tabButtonTextActiveStyles: object;
    tabBarContainerStyles: object;
    tabBarLineStyles: object;
    tabBarStyles: object;
    tabHeaderColor: string;
    tabTextColor: string;
    tabBarColor: string;
    tabTextSelectedColor: string;
}
export default function SwiperView({ tabList, tabHeaderStyles, tabButtonStyles, tabButtonActiveStyles, tabButtonTextStyles, tabButtonTextActiveStyles, tabBarContainerStyles, tabBarLineStyles, tabBarStyles, tabHeaderColor, tabTextColor, tabBarColor, tabTextSelectedColor, }: SwiperViewProps): ReactElement;
export {};
//# sourceMappingURL=index.d.ts.map