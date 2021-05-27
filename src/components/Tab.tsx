import React from 'react';
import { LayoutChangeEvent, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles';
import { ITab } from '../types';

interface TabProps {
  isSelected: boolean;
  tab: ITab;
  tabButtonStyles: object;
  tabButtonActiveStyles: object;
  tabButtonTextStyles: object;
  tabButtonTextActiveStyles: object;
  onTabPress: () => void;
  onTabLayout: (e: LayoutChangeEvent) => void;
  tabTextColor: string;
  tabTextSelectedColor: string;
}

export default function Tab({
  isSelected,
  tab,
  tabButtonStyles,
  tabButtonActiveStyles,
  tabButtonTextStyles,
  tabButtonTextActiveStyles,
  onTabPress,
  onTabLayout,
  tabTextColor,
  tabTextSelectedColor,
}: TabProps) {
  return (
    <View onLayout={onTabLayout}>
      <TouchableOpacity
        onPress={() => onTabPress()}
        style={[
          styles.tabButton,
          tabButtonStyles,
          isSelected
            ? {
                ...styles.tabButtonActive,
                ...tabButtonActiveStyles,
              }
            : {},
        ]}>
        <Text
          style={[
            styles.tabButtonText,
            tabButtonTextStyles,
            { color: tabTextColor },
            isSelected
              ? {
                  ...styles.tabButtonTextActive,
                  ...tabButtonTextActiveStyles,
                  color: tabTextSelectedColor,
                }
              : {},
          ]}>
          {tab.name}123
        </Text>
      </TouchableOpacity>
    </View>
  );
}
