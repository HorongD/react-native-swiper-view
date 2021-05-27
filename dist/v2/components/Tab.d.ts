/// <reference types="react" />
import { LayoutChangeEvent } from "react-native";
import { ITab } from "../types";
interface TabProps {
    tab: ITab;
    onTabPress: () => void;
    onTabLayout: (e: LayoutChangeEvent) => void;
}
export default function Tab({ tab, onTabPress, onTabLayout }: TabProps): JSX.Element;
export {};
//# sourceMappingURL=Tab.d.ts.map