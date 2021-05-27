import React from 'react';
import { Animated, Easing } from "react-native";
import { WIDTH } from "../constants";
export default function Indicator(_a) {
    var _b = _a.tabList, tabList = _b === void 0 ? [] : _b, measures = _a.measures, scrollX = _a.scrollX;
    var inputRange = tabList.map(function (_, index) { return index * WIDTH; });
    var indicatorWidth = scrollX.interpolate({
        inputRange: inputRange,
        outputRange: measures.map(function (measure) { return measure.width; }),
        easing: Easing.inOut(Easing.linear),
    });
    var indicatorTranslateX = scrollX.interpolate({
        inputRange: inputRange,
        outputRange: measures.map(function (measure) { return measure.x; }),
        easing: Easing.inOut(Easing.linear),
    });
    return (<Animated.View style={[
        {
            width: indicatorWidth,
            left: 0,
            transform: [{ translateX: indicatorTranslateX }]
        },
        { backgroundColor: "#f57791", height: 3 }
    ]}>
    </Animated.View>);
}
//# sourceMappingURL=Indicator.js.map