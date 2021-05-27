import React, { useCallback, useRef, useState } from 'react';
import { Animated, ScrollView, View } from 'react-native';
import Tabs from './components/Tabs';
import { WIDTH } from './constants';
import styles from './styles';
export default function SwiperView(_a) {
    var tabList = _a.tabList;
    var scrollRef = useRef(null);
    var scrollX = useRef(new Animated.Value(0)).current;
    var scrollHeaderRef = useRef(null);
    var _b = useState(0), scrollContainerWidth = _b[0], setScrollContainerWidth = _b[1];
    var _c = useState([]), measures = _c[0], setMeasures = _c[1];
    var moveHeaderScroll = function (moveIndex) {
        var _a, _b;
        var _c = measures[moveIndex], x = _c.x, width = _c.width;
        var offsetX = x + width - WIDTH;
        var space = Math.floor(width / 3);
        if (offsetX > 0) {
            (_a = scrollHeaderRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                x: offsetX + space > scrollContainerWidth ? offsetX : offsetX + space,
                y: 0,
            });
        }
        else {
            (_b = scrollHeaderRef.current) === null || _b === void 0 ? void 0 : _b.scrollTo({ x: 0, y: 0 });
        }
    };
    var onTabPress = useCallback(function (index) {
        var _a;
        moveHeaderScroll(index);
        (_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ x: index * WIDTH, y: 0 });
    }, []);
    return (<View style={styles.container}>
      <ScrollView ref={scrollHeaderRef} horizontal={true} showsHorizontalScrollIndicator={false} bounces={false}>
      <Tabs scrollX={scrollX} tabList={tabList} onTabPress={onTabPress} measures={measures} setMeasures={setMeasures} setScrollContainerWidth={setScrollContainerWidth}/>
    </ScrollView>
      <ScrollView ref={scrollRef} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} bounces={false} snapToAlignment="center" onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })} onScrollEndDrag={function (e) {
        var scrollX = e.nativeEvent.contentOffset.x;
        var moveIndex = Math.floor(scrollX / WIDTH + 0.5);
        moveHeaderScroll(moveIndex);
    }}>
        {tabList.map(function (tab, i) { return (<View key={i} style={{ width: WIDTH }}>{tab.component}</View>); })}
      </ScrollView>
    </View>);
}
//# sourceMappingURL=index.js.map