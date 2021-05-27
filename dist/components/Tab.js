var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';
export default function Tab(_a) {
    var isSelected = _a.isSelected, tab = _a.tab, tabButtonStyles = _a.tabButtonStyles, tabButtonActiveStyles = _a.tabButtonActiveStyles, tabButtonTextStyles = _a.tabButtonTextStyles, tabButtonTextActiveStyles = _a.tabButtonTextActiveStyles, onTabPress = _a.onTabPress, onTabLayout = _a.onTabLayout, tabTextColor = _a.tabTextColor, tabTextSelectedColor = _a.tabTextSelectedColor;
    return (<View onLayout={onTabLayout}>
      <TouchableOpacity onPress={function () { return onTabPress(); }} style={[
        styles.tabButton,
        tabButtonStyles,
        isSelected
            ? __assign(__assign({}, styles.tabButtonActive), tabButtonActiveStyles) : {},
    ]}>
        <Text style={[
        styles.tabButtonText,
        tabButtonTextStyles,
        { color: tabTextColor },
        isSelected
            ? __assign(__assign(__assign({}, styles.tabButtonTextActive), tabButtonTextActiveStyles), { color: tabTextSelectedColor }) : {},
    ]}>
          {tab.name}123
        </Text>
      </TouchableOpacity>
    </View>);
}
//# sourceMappingURL=Tab.js.map