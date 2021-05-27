import React, { ReactElement, useRef, useState } from 'react';
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;

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

const SwiperView = ({
  tabList = [],
  tabHeaderStyles = {},
  tabButtonStyles = {},
  tabButtonActiveStyles = {},
  tabButtonTextStyles = {},
  tabButtonTextActiveStyles = {},
  tabBarContainerStyles = {},
  tabBarLineStyles = {},
  tabBarStyles = {},
}: Props) => {
  const sceneScrollRef = useRef<ScrollView>(null);
  const tabScrollRef = useRef<ScrollView>(null);
  const [tabDetails, setTabDetails] = useState({});
  const [currentPositionX] = useState(new Animated.Value(0));
  const [widthScale] = useState(new Animated.Value(0));
  const [scrollContainerWidth, setScrollContainerWidth] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);

  function moveBar(index: number) {
    Animated.parallel([
      Animated.timing(currentPositionX, {
        toValue: new Animated.Value(
          tabDetails[index]?.x + Math.floor(tabDetails[index]?.width / 2),
        ),
        useNativeDriver: true,
        duration: 200,
      }),
      Animated.timing(widthScale, {
        toValue: new Animated.Value(tabDetails[index]?.width / 1.15),
        useNativeDriver: true,
        duration: 200,
      }),
    ]).start();

    const offsetX =
      Number(tabDetails[index]?.x) + Number(tabDetails[index]?.width) - WIDTH;

    const space = Number(tabDetails[index]?.width / 3);

    if (offsetX > 0) {
      tabScrollRef.current?.scrollTo({
        x: offsetX + space > scrollContainerWidth ? offsetX : offsetX + space,
        y: 0,
      });
    } else {
      tabScrollRef.current?.scrollTo({ x: 0, y: 0 });
    }
  }

  function handleScrollEnd(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrollX = e.nativeEvent.contentOffset.x; // 총 이동거리
    const moveIndex = Math.floor(scrollX / WIDTH + 0.5); // 현재 화면 인덱스
    moveBar(moveIndex);
    setTabIndex(moveIndex);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.tabHeader, tabHeaderStyles]}>
        <ScrollView
          ref={tabScrollRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <View
            style={styles.tabScrollContainer}
            onLayout={(e) =>
              setScrollContainerWidth(e.nativeEvent.layout.width)
            }>
            <View style={styles.tabButtonList}>
              {tabList.map((tab, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.tabButton,
                    tabButtonStyles,
                    tabIndex === i
                      ? {
                          ...styles.tabButtonActive,
                          ...tabButtonActiveStyles,
                        }
                      : {},
                  ]}
                  onPress={() => {
                    sceneScrollRef.current?.scrollTo({ x: WIDTH * i, y: 0 });
                    moveBar(i);
                    setTabIndex(i);
                  }}
                  onLayout={(e) => {
                    const { x, width } = e.nativeEvent.layout;
                    if (tabDetails[0] === undefined && i === 0) {
                      widthScale.setValue(width);
                      currentPositionX.setValue(width / 2);
                    }
                    setTabDetails({
                      ...tabDetails,
                      [i]: { x: Math.round(x), width: Math.round(width) },
                    });
                  }}>
                  <Text
                    style={[
                      styles.tabButtonText,
                      tabButtonTextStyles,
                      tabIndex === i
                        ? {
                            ...styles.tabButtonTextActive,
                            ...tabButtonTextActiveStyles,
                          }
                        : {},
                    ]}>
                    {tab.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={[styles.tabBarContainer, tabBarContainerStyles]}>
              <View style={[styles.tabBarLine, tabBarLineStyles]}></View>
              <Animated.View
                style={[
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
      <ScrollView
        ref={sceneScrollRef}
        onMomentumScrollEnd={handleScrollEnd}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        snapToAlignment="center">
        {tabList.map((tab, i) => (
          <View
            key={i}
            style={{
              width: WIDTH,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {tab.component}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
