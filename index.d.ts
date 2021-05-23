import { ReactElement } from 'react';
interface Tab {
    name: string;
    component: ReactElement;
}
interface Props {
    tabList: Tab[];
    tabHeaderStyles: object;
    tabButtonStyles: object;
    tabButtonActiveStyles: object;
    tabButtonTextStyles: object;
    tabButtonTextActiveStyles: object;
    tabBarContainerStyles: object;
    tabBarLineStyles: object;
    tabBarStyles: object;
}
declare const SwiperView: ({ tabList, tabHeaderStyles, tabButtonStyles, tabButtonActiveStyles, tabButtonTextStyles, tabButtonTextActiveStyles, tabBarContainerStyles, tabBarLineStyles, tabBarStyles, }: Props) => JSX.Element;
export default SwiperView;
//# sourceMappingURL=index.d.ts.map