import React from "react";
import { LayoutChangeEvent, Text, TouchableOpacity, View } from "react-native";
import { ITab } from "../types";

interface TabProps {
  tab: ITab;
  onTabPress: () => void;
  onTabLayout: (e: LayoutChangeEvent) => void;
}

export default function Tab({ tab, onTabPress, onTabLayout }: TabProps) {
  return (
    <View onLayout={onTabLayout}>
      <TouchableOpacity onPress={() => onTabPress()}>
        <Text>{tab.name}</Text>
      </TouchableOpacity>
    </View>
  )
};
