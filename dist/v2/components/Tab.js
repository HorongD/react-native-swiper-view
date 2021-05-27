import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
export default function Tab(_a) {
    var tab = _a.tab, onTabPress = _a.onTabPress, onTabLayout = _a.onTabLayout;
    return (<View onLayout={onTabLayout}>
      <TouchableOpacity onPress={function () { return onTabPress(); }}>
        <Text>{tab.name}</Text>
      </TouchableOpacity>
    </View>);
}
;
//# sourceMappingURL=Tab.js.map