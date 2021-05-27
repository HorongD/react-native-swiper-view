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
import React, { useRef, useState } from 'react';
import { Animated, ScrollView, Text, TouchableOpacity, View, StyleSheet, Dimensions, } from 'react-native';
var WIDTH = Dimensions.get('window').width;
var SwiperView = function (_a) {
    var _b = _a.tabList, tabList = _b === void 0 ? [] : _b, _c = _a.tabHeaderStyles, tabHeaderStyles = _c === void 0 ? {} : _c, _d = _a.tabButtonStyles, tabButtonStyles = _d === void 0 ? {} : _d, _e = _a.tabButtonActiveStyles, tabButtonActiveStyles = _e === void 0 ? {} : _e, _f = _a.tabButtonTextStyles, tabButtonTextStyles = _f === void 0 ? {} : _f, _g = _a.tabButtonTextActiveStyles, tabButtonTextActiveStyles = _g === void 0 ? {} : _g, _h = _a.tabBarContainerStyles, tabBarContainerStyles = _h === void 0 ? {} : _h, _j = _a.tabBarLineStyles, tabBarLineStyles = _j === void 0 ? {} : _j, _k = _a.tabBarStyles, tabBarStyles = _k === void 0 ? {} : _k;
    var sceneScrollRef = useRef(null);
    var tabScrollRef = useRef(null);
    var _l = useState({}), tabDetails = _l[0], setTabDetails = _l[1];
    var currentPositionX = useState(new Animated.Value(0))[0];
    var widthScale = useState(new Animated.Value(0))[0];
    var _m = useState(0), scrollContainerWidth = _m[0], setScrollContainerWidth = _m[1];
    var _o = useState(0), tabIndex = _o[0], setTabIndex = _o[1];
    function moveBar(index) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        Animated.parallel([
            Animated.timing(currentPositionX, {
                toValue: new Animated.Value(((_a = tabDetails[index]) === null || _a === void 0 ? void 0 : _a.x) + Math.floor(((_b = tabDetails[index]) === null || _b === void 0 ? void 0 : _b.width) / 2)),
                useNativeDriver: true,
                duration: 200,
            }),
            Animated.timing(widthScale, {
                toValue: new Animated.Value(((_c = tabDetails[index]) === null || _c === void 0 ? void 0 : _c.width) / 1.15),
                useNativeDriver: true,
                duration: 200,
            }),
        ]).start();
        var offsetX = Number((_d = tabDetails[index]) === null || _d === void 0 ? void 0 : _d.x) + Number((_e = tabDetails[index]) === null || _e === void 0 ? void 0 : _e.width) - WIDTH;
        var space = Number(((_f = tabDetails[index]) === null || _f === void 0 ? void 0 : _f.width) / 3);
        if (offsetX > 0) {
            (_g = tabScrollRef.current) === null || _g === void 0 ? void 0 : _g.scrollTo({
                x: offsetX + space > scrollContainerWidth ? offsetX : offsetX + space,
                y: 0,
            });
        }
        else {
            (_h = tabScrollRef.current) === null || _h === void 0 ? void 0 : _h.scrollTo({ x: 0, y: 0 });
        }
    }
    function handleScrollEnd(e) {
        var scrollX = e.nativeEvent.contentOffset.x;
        var moveIndex = Math.floor(scrollX / WIDTH + 0.5);
        moveBar(moveIndex);
        setTabIndex(moveIndex);
    }
    return (<View style={styles.container}>
      <View style={[styles.tabHeader, tabHeaderStyles]}>
        <ScrollView ref={tabScrollRef} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.tabScrollContainer} onLayout={function (e) {
        return setScrollContainerWidth(e.nativeEvent.layout.width);
    }}>
            <View style={styles.tabButtonList}>
              {tabList.map(function (tab, i) { return (<TouchableOpacity key={i} style={[
        styles.tabButton,
        tabButtonStyles,
        tabIndex === i
            ? __assign(__assign({}, styles.tabButtonActive), tabButtonActiveStyles) : {},
    ]} onPress={function () {
        var _a;
        (_a = sceneScrollRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({ x: WIDTH * i, y: 0 });
        moveBar(i);
        setTabIndex(i);
    }} onLayout={function (e) {
        var _a;
        var _b = e.nativeEvent.layout, x = _b.x, width = _b.width;
        if (tabDetails[0] === undefined && i === 0) {
            widthScale.setValue(width);
            currentPositionX.setValue(width / 2);
        }
        setTabDetails(__assign(__assign({}, tabDetails), (_a = {}, _a[i] = { x: Math.round(x), width: Math.round(width) }, _a)));
    }}>
                  <Text style={[
        styles.tabButtonText,
        tabButtonTextStyles,
        tabIndex === i
            ? __assign(__assign({}, styles.tabButtonTextActive), tabButtonTextActiveStyles) : {},
    ]}>
                    {tab.name}
                  </Text>
                </TouchableOpacity>); })}
            </View>
            <View style={[styles.tabBarContainer, tabBarContainerStyles]}>
              <View style={[styles.tabBarLine, tabBarLineStyles]}></View>
              <Animated.View style={[
        styles.tabBar,
        tabBarStyles,
        {
            transform: [
                { translateX: currentPositionX },
                { scaleX: widthScale },
            ],
        },
    ]}></Animated.View>
            </View>
          </View>
        </ScrollView>
      </View>
      <ScrollView ref={sceneScrollRef} onMomentumScrollEnd={handleScrollEnd} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} snapToAlignment="center">
        {tabList.map(function (tab, i) { return (<View key={i} style={{
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
    }}>
            {tab.component}
          </View>); })}
      </ScrollView>
    </View>);
};
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    tabHeader: {
        position: 'relative',
        height: 50,
        width: '100%',
        backgroundColor: '#f57791',
    },
    tabScrollContainer: {
        flexDirection: 'column',
        width: '100%',
        minWidth: WIDTH,
    },
    tabButtonList: {
        flexDirection: 'row',
    },
    tabButton: {
        paddingHorizontal: 20,
        height: 50,
        backgroundColor: '#f57791',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabButtonActive: {},
    tabButtonText: {
        color: '#ffffff88',
        fontSize: 16,
        height: 50,
        lineHeight: 50,
    },
    tabButtonTextActive: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    tabBarContainer: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        height: 8,
        justifyContent: 'center',
        alignItems: 'flex-end',
        zIndex: 100,
        bottom: 0,
    },
    tabBarLine: {
        backgroundColor: '#f57791',
        width: '100%',
        height: 1,
    },
    tabBar: {
        position: 'absolute',
        backgroundColor: '#ffffff',
        height: 3,
        width: 1,
        left: 0,
    },
});
export default SwiperView;
//# sourceMappingURL=index.js.map