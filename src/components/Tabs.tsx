import { Animated, LayoutChangeEvent, View } from 'react-native';
import { IMeasure, ITab } from '../types';
import Tab from './Tab';
import Indicator from './Indicator';
import React, { useRef } from 'react';

interface TabsProps {
  tabList: ITab[];
  scrollX: Animated.Value;
  onTabPress: (index: number) => void;
  measures: IMeasure[];
  setMeasures: React.Dispatch<React.SetStateAction<IMeasure[]>>;
  setScrollContainerWidth: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
  tabButtonStyles: object;
  tabButtonActiveStyles: object;
  tabButtonTextStyles: object;
  tabButtonTextActiveStyles: object;
  tabBarContainerStyles: object;
  tabBarLineStyles: object;
  tabBarStyles: object;
  tabTextColor: string;
  tabBarColor: string;
  tabTextSelectedColor: string;
}

export default function Tabs({
  tabList = [],
  scrollX,
  onTabPress,
  measures,
  setMeasures,
  setScrollContainerWidth,
  currentIndex,
  tabButtonStyles,
  tabButtonActiveStyles,
  tabButtonTextStyles,
  tabButtonTextActiveStyles,
  tabBarStyles,
  tabTextColor,
  tabBarColor,
  tabTextSelectedColor,
}: TabsProps) {
  const containerRef = useRef<any>(null);

  const measureData: IMeasure[] = [];

  function addMeasure(e: LayoutChangeEvent) {
    const { width, height, x, y } = e.nativeEvent.layout;
    measureData.push({
      width: Math.round(width),
      height: Math.round(height),
      x: Math.round(x),
      y: Math.round(y),
    });
    if (measureData.length === tabList.length) {
      setMeasures(measureData.sort((a, b) => a.x - b.x));
    }
  }

  return (
    <View onLayout={(e) => setScrollContainerWidth(e.nativeEvent.layout.width)}>
      <View ref={containerRef} style={{ flexDirection: 'row' }}>
        {tabList.map((tab, i) => (
          <Tab
            key={i}
            tab={tab}
            onTabLayout={addMeasure}
            onTabPress={() => onTabPress(i)}
            isSelected={i === currentIndex}
            tabButtonStyles={tabButtonStyles}
            tabButtonActiveStyles={tabButtonActiveStyles}
            tabButtonTextStyles={tabButtonTextStyles}
            tabButtonTextActiveStyles={tabButtonTextActiveStyles}
            tabTextColor={tabTextColor}
            tabTextSelectedColor={tabTextSelectedColor}
          />
        ))}
      </View>
      {measures.length > 0 && (
        <Indicator
          tabList={tabList}
          measures={measures}
          scrollX={scrollX}
          tabBarStyles={tabBarStyles}
          tabBarColor={tabBarColor}
        />
      )}
    </View>
  );
}
