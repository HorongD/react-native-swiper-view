import React, { ReactElement, useCallback, useRef, useState } from 'react';
import {
  Animated,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

interface Tab {
  name: string,
  component: ReactElement,
}

interface Props {
}

const SwiperView = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView>(null);
  const onItemPress = useCallback(
    itemIndex => {
      scrollRef.current?.scrollTo({ x: width * itemIndex, y: 0 });
    },[]
  )
  return <ScrollView ref={scrollRef}></ScrollView>
};

export default SwiperView;
