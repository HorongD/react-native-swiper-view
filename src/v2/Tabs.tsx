import React, { createRef, MutableRefObject, ReactElement, useEffect, useRef, useState } from 'react'
import { Animated, View } from 'react-native';
import Tab, { ITab } from './Tab';
import Indicator from './Indicator';

export interface IMeasure {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Props {
  data: ITab[];
  scrollX: Animated.Value;
}

const Tabs = ({ data, scrollX }: Props) => {
  const [measures, setMeasures] = useState<IMeasure[]>([]);
  const containerRef = useRef<View>(null);

  useEffect(() => {
    const m: IMeasure[] = [];

    data.forEach(item => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          console.log(x, y, width, height);
          m.push({ x, y, width, height });
          
          if (m.length === data.length) {
            setMeasures(m);
          }
        },
        ()=>{
          console.log('Fail: no ref');
        })
    });
  }, []);

  return (
    <View>
      <View ref={containerRef}>
        {data.map((item) => (
          <Tab key={item.key} item={item} ref={item.ref} />
        ))}
      </View>
      {measures.length > 0 && <Indicator data={data} measures={measures} scrollX={scrollX} />}
    </View>
  )
}

export default Tabs
