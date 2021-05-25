import React, { ReactElement, useRef, useState } from 'react';
import {
  Animated,
} from 'react-native';
import { ITab } from './Tab';
import { IMeasure } from './Tabs';

const { width } = Dimensions.get('screen');

interface Props {
  data: ITab[];
  measures: IMeasure[];
  scrollX: Animated.Value;
}

function Indicator({ data, measures, scrollX }: Props): ReactElement {
  const inputRange = data.map((_, index) => index * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.width)
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.x)
  })

  return (
    <Animated.View style={{
      width: indicatorWidth,
      left: 0,
      transform: [{ translateX }]
    }}>
      
    </Animated.View>
  )
}

export default Indicator;
