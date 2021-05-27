import React from 'react';
import { Animated, Easing } from "react-native";
import { WIDTH } from "../constants";
import { IMeasure, ITab } from "../types";

interface IndicatorProps {
  tabList: ITab[];
  measures: IMeasure[];
  scrollX: Animated.Value;
}

export default function Indicator ({ tabList = [], measures, scrollX }: IndicatorProps) {
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
