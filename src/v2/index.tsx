import React, { createRef, forwardRef, MutableRefObject, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Easing, LayoutChangeEvent, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { ITab, IMeasure } from './types';

const WIDTH = Dimensions.get('window').width;

interface TabProps {
  tab: ITab;
  onTabPress: () => void;
  onTabLayout: (e: LayoutChangeEvent) => void;
}

const Tab = forwardRef(({ tab, onTabPress, onTabLayout }: TabProps, ref: MutableRefObject<View>) => {
  return (
    <View ref={ref} onLayout={onTabLayout}>
    <TouchableOpacity onPress={() => onTabPress()}>
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
  
  const measureData: IMeasure[] = [];

  function addMeasure(e: LayoutChangeEvent) {
    console.log(e.nativeEvent.layout);
    measureData.push(e.nativeEvent.layout);
    if(measureData.length === tabList.length) {
      setMeasures(measureData);
    }
  }

  return (
    <View style={{ width: WIDTH }}>
      <View ref={containerRef} style={{ flexDirection: 'row' }}>
        {tabList.map((tab, i) => (
          <Tab 
            key={i} 
            ref={tab.ref} 
            tab={tab} 
            onTabLayout={addMeasure} 
            onTabPress={() => onTabPress(i)}
          />
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
    outputRange: measures.map(measure => Math.round(measure.width)),
    easing: Easing.inOut(Easing.linear),
  });
  const indicatorTranslateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => Math.round(measure.x)),
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
      <ScrollView>
        <Tabs scrollX={scrollX} tabList={tabList} onTabPress={onTabPress} />
      </ScrollView>
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
