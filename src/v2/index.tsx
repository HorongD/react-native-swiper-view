import React, { createRef, ReactElement, useCallback, useRef } from 'react';
import { Animated, ScrollView, View } from 'react-native';
import Tabs from './components/Tabs';
import { WIDTH } from './constants';
import styles from './styles';
import { ITab } from './types';
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

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
      >
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
