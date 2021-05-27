import React, { forwardRef, MutableRefObject, ReactElement } from "react";
import { LayoutChangeEvent, Text, TouchableOpacity, View } from "react-native";
import { ITab } from "../types";

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

export default Tab;