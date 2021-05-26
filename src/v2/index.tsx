import React, { createRef, forwardRef, MutableRefObject, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { ITab, IMeasure } from './types';

const WIDTH = Dimensions.get('window').width;

interface TabProps {
  tab: ITab;
  onTabPress: () => void;
}

const Tab = forwardRef(({ tab, onTabPress }: TabProps, ref: MutableRefObject<View>) => {
  return (
    <View ref={ref}>
      <TouchableOpacity onPress={onTabPress}>
        <Text>{tab.name}</Text>
      </TouchableOpacity>
    </View>
  )
})

interface TabsProps {
  tabList: ITab[];
  scrollX: Animated.Value;
  onTabPress: (index: number) => void
}

const Tabs = ({ tabList = [], scrollX, onTabPress }: TabsProps) => {
  const [measures, setMeasures] = useState<IMeasure[]>([]);
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const m: IMeasure[] = [];

    tabList.forEach(tab => {
      tab.ref?.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({
            x: Math.round(x),
            y: Math.round(y),
            width: Math.round(width),
            height: Math.round(height),
          });
          
          if (m.length === tabList.length) {
            setMeasures(m);
          }
        },
        ()=>{
          console.log('Fail : no ref');
        })
    });
  }, []);

  return (
    <View style={{ width: WIDTH }}>
      <View ref={containerRef} style={{ flexDirection: 'row' }}>
        {tabList.map((tab, i) => (
          <View key={i} ref={tab.ref}>
            <TouchableOpacity onPress={() => onTabPress(i)}>
              <Text>{tab.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {measures.length > 0 && <Indicator tabList={tabList} measures={measures} scrollX={scrollX} />}
    </View>
  )
};

interface IndicatorProps {
  tabList: ITab[];
  measures: IMeasure[];
  scrollX: Animated.Value;
}

const Indicator = ({ tabList = [], measures, scrollX }: IndicatorProps) => {
  const inputRange = tabList.map((_, index) => index * WIDTH);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.width),
    easing: Easing.inOut(Easing.linear),
  });
  const indicatorTranslateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.x),
    easing: Easing.inOut(Easing.linear),
  });

  return (
    <Animated.View style={[
      {
        width: indicatorWidth,
        left: 0,
        transform: [{ translateX: indicatorTranslateX }]
      },
      { backgroundColor: "#f57791", height: 3 }
    ]}>
    </Animated.View>
  )
}

interface SwiperViewProps {
  tabList: ITab[];
}

export default function SwiperView({ tabList }: SwiperViewProps): ReactElement {
  const scrollRef = useRef<ScrollView>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const onTabPress = useCallback(
    (index) => scrollRef.current?.scrollTo({ x: index * WIDTH, y: 0 }),
    [],
  )

  // Add ref props
  tabList.forEach(tab => tab.ref = createRef<View>());

  return (
    <View style={styles.container}>
      <Tabs scrollX={scrollX} tabList={tabList} onTabPress={onTabPress} />
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        bounces={false}
        snapToAlignment="center"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {tabList.map((tab, i) => (
          <View key={i} style={{ width: WIDTH }}>{tab.component}</View>
        ))}
      </ScrollView>
    </View>
  )
}
