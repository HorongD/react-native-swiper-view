import { Animated, LayoutChangeEvent, View } from "react-native";
import { IMeasure, ITab } from "../types";
import Tab from "./Tab";
import Indicator from "./Indicator";
import React, { useRef, useState } from "react";

interface TabsProps {
  tabList: ITab[];
  scrollX: Animated.Value;
  onTabPress: (index: number) => void
}

export default function Tabs ({ tabList = [], scrollX, onTabPress }: TabsProps) {
  const [measures, setMeasures] = useState<IMeasure[]>([]);
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
    if(measureData.length === tabList.length) {
      setMeasures(measureData);
    }
  }

  return (
    <View style={{ }}>
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
