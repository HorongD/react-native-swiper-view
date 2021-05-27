import React from 'react';
import { Animated, Easing, View } from 'react-native';
import { WIDTH } from '../constants';
import styles from '../styles';
import { IMeasure, ITab } from '../types';

interface IndicatorProps {
  tabList: ITab[];
  measures: IMeasure[];
  scrollX: Animated.Value;
  tabBarContainerStyles: object;
  tabBarLineStyles: object;
  tabBarStyles: object;
}

export default function Indicator({
  tabList = [],
  measures,
  scrollX,
  tabBarContainerStyles,
  tabBarLineStyles,
  tabBarStyles,
}: IndicatorProps) {
  const inputRange = tabList.map((_, index) => index * WIDTH);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
    easing: Easing.inOut(Easing.linear),
  });
  const indicatorTranslateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
    easing: Easing.inOut(Easing.linear),
  });

  return (
    <Animated.View
      style={[
        styles.tabBar,
        tabBarStyles,
        {
          width: indicatorWidth,
          left: 0,
          transform: [{ translateX: indicatorTranslateX }],
          height: 3,
        },
      ]}></Animated.View>
  );
}
