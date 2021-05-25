import React, { createRef, forwardRef, MutableRefObject, ReactElement, useRef } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

export interface ITab {
  key: number;
  name: string;
  ref: MutableRefObject<View>;
}

interface Props {
  item: ITab;
}

const Tab = forwardRef(({ item }: Props, ref: MutableRefObject<View>) => {
  return (
    <View ref={ref}>
      <TouchableOpacity>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  )
})

export default Tab
