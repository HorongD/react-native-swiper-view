import React from 'react';
import { Animated, Easing } from 'react-native';
import { WIDTH } from '../constants';
import styles from '../styles';
export default function Indicator(_a) {
    var _b = _a.tabList, tabList = _b === void 0 ? [] : _b, measures = _a.measures, scrollX = _a.scrollX, tabBarStyles = _a.tabBarStyles, tabBarColor = _a.tabBarColor;
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
        styles.tabBar,
        tabBarStyles,
        {
            width: indicatorWidth,
            left: 0,
            transform: [{ translateX: indicatorTranslateX }],
            height: 3,
        },
        { backgroundColor: tabBarColor }
    ]}></Animated.View>);
}
//# sourceMappingURL=Indicator.js.map