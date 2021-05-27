import React, { useCallback, useRef, useState } from 'react';
import { Animated, ScrollView, View } from 'react-native';
import Tabs from './components/Tabs';
import { WIDTH } from './constants';
import styles from './styles';
export default function SwiperView(_a) {
    var _b = _a.tabList, tabList = _b === void 0 ? [] : _b, _c = _a.tabHeaderStyles, tabHeaderStyles = _c === void 0 ? {} : _c, _d = _a.tabButtonStyles, tabButtonStyles = _d === void 0 ? {} : _d, _e = _a.tabButtonActiveStyles, tabButtonActiveStyles = _e === void 0 ? {} : _e, _f = _a.tabButtonTextStyles, tabButtonTextStyles = _f === void 0 ? {} : _f, _g = _a.tabButtonTextActiveStyles, tabButtonTextActiveStyles = _g === void 0 ? {} : _g, _h = _a.tabBarContainerStyles, tabBarContainerStyles = _h === void 0 ? {} : _h, _j = _a.tabBarLineStyles, tabBarLineStyles = _j === void 0 ? {} : _j, _k = _a.tabBarStyles, tabBarStyles = _k === void 0 ? {} : _k, _l = _a.tabHeaderColor, tabHeaderColor = _l === void 0 ? '#f57791' : _l, _m = _a.tabTextColor, tabTextColor = _m === void 0 ? '#ffffff88' : _m, _o = _a.tabBarColor, tabBarColor = _o === void 0 ? '#ffffff88' : _o, _p = _a.tabTextSelectedColor, tabTextSelectedColor = _p === void 0 ? '#ffffff' : _p;
    var scrollRef = useRef(null);
    var scrollX = useRef(new Animated.Value(0)).current;
    var scrollHeaderRef = useRef(null);
    var _q = useState(0), scrollContainerWidth = _q[0], setScrollContainerWidth = _q[1];
    var _r = useState([]), measures = _r[0], setMeasures = _r[1];
    var _s = useState(0), currentIndex = _s[0], setCurrentIndex = _s[1];
    var moveHeaderScroll = function (moveIndex) {
        var _a, _b;
        setCurrentIndex(moveIndex);
        if (measures[moveIndex]) {
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
        }
    };
    var onTabPress = useCallback(function (index) {
        var _a;
        moveHeaderScroll(index);
        (_a = scrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ x: index * WIDTH, y: 0 });
    }, []);
    return (<View style={styles.container}>
      <View style={[
        styles.tabHeader,
        tabHeaderStyles,
        { backgroundColor: tabHeaderColor },
    ]}>
        <ScrollView ref={scrollHeaderRef} horizontal={true} showsHorizontalScrollIndicator={false} bounces={false}>
          <Tabs scrollX={scrollX} tabList={tabList} onTabPress={onTabPress} measures={measures} setMeasures={setMeasures} setScrollContainerWidth={setScrollContainerWidth} currentIndex={currentIndex} tabButtonStyles={tabButtonStyles} tabButtonActiveStyles={tabButtonActiveStyles} tabButtonTextStyles={tabButtonTextStyles} tabButtonTextActiveStyles={tabButtonTextActiveStyles} tabBarContainerStyles={tabBarContainerStyles} tabBarLineStyles={tabBarLineStyles} tabBarStyles={tabBarStyles} tabTextColor={tabTextColor} tabBarColor={tabBarColor} tabTextSelectedColor={tabTextSelectedColor}/>
        </ScrollView>
      </View>
      <ScrollView ref={scrollRef} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} bounces={false} snapToAlignment="center" onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })} onMomentumScrollEnd={function (e) {
        var scrollX = e.nativeEvent.contentOffset.x;
        var moveIndex = Math.floor(scrollX / WIDTH + 0.5);
        moveHeaderScroll(moveIndex);
    }}>
        {tabList.map(function (tab, i) { return (<View key={i} style={{
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
            {tab.component}
          </View>); })}
      </ScrollView>
    </View>);
}
//# sourceMappingURL=index.js.map