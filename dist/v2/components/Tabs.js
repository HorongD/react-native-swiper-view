import { View } from "react-native";
import Tab from "./Tab";
import Indicator from "./Indicator";
import React, { useRef } from "react";
export default function Tabs(_a) {
    var _b = _a.tabList, tabList = _b === void 0 ? [] : _b, scrollX = _a.scrollX, onTabPress = _a.onTabPress, measures = _a.measures, setMeasures = _a.setMeasures, setScrollContainerWidth = _a.setScrollContainerWidth;
    var containerRef = useRef(null);
    var measureData = [];
    function addMeasure(e) {
        var _a = e.nativeEvent.layout, width = _a.width, height = _a.height, x = _a.x, y = _a.y;
        measureData.push({
            width: Math.round(width),
            height: Math.round(height),
            x: Math.round(x),
            y: Math.round(y),
        });
        if (measureData.length === tabList.length) {
            setMeasures(measureData);
        }
    }
    return (<View onLayout={function (e) {
        return setScrollContainerWidth(e.nativeEvent.layout.width);
    }}>
      <View ref={containerRef} style={{ flexDirection: 'row' }}>
        {tabList.map(function (tab, i) { return (<Tab key={i} tab={tab} onTabLayout={addMeasure} onTabPress={function () { return onTabPress(i); }}/>); })}
      </View>
      {measures.length > 0 && <Indicator tabList={tabList} measures={measures} scrollX={scrollX}/>}
    </View>);
}
;
//# sourceMappingURL=Tabs.js.map