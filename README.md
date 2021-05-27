# Feature
- `Typescript` code
- `react`, `react-native` (pure component)
- `Functional Component`

<br>
<br>

# Demo

![WwvbXYaO1x](https://user-images.githubusercontent.com/61274990/119898735-2fe0a200-bf7d-11eb-9525-4eb35b697d9a.gif)

<br>
<br>

# Quick Start

```javascript
import React from 'react';
import { Text } from 'react-native';
import SwiperView from 'react-native-swiper-view';

const textStyle = { color: '#f57791', fontSize: 50 };

const App = () => {
  const tabListData = [
    { name: 'ALL', component: <Text style={textStyle}>ALL</Text> },
    {
      name: 'SKIN CARE',
      component: <Text style={textStyle}>SKIN CARE</Text>,
    },
    { name: 'MAKE UP', component: <Text style={textStyle}>MAKE UP</Text> },
    {
      name: 'CLEANSING',
      component: <Text style={textStyle}>CLEANSING</Text>,
    },
    { name: 'MASK', component: <Text style={textStyle}>MASK</Text> },
    { name: 'BODY', component: <Text style={textStyle}>BODY</Text> },
    { name: 'HAIR', component: <Text style={textStyle}>HAIR</Text> },
    { name: 'NEW', component: <Text style={textStyle}>NEW</Text> },
    { name: 'BEST', component: <Text style={textStyle}>BEST</Text> },
    { name: 'BRAND', component: <Text style={textStyle}>BRAND</Text> },
    { name: 'EVENT', component: <Text style={textStyle}>EVENT</Text> },
  ];
  return (
    <ScrollTabView
      tabList={tabListData}
      tabHeaderColor="blue"
      tabTextColor="yellow"
      tabTextSelectedColor="white"
      tabBarColor="black"
    />
  );
};
```

<br>
<br>

# Basic Options

| Prop                 | Default     | Type   | Description                          |
| -------------------- | ----------- | ------ | ------------------------------------ |
| tabHeaderColor       | '#f57791'   | stirng | Tab header background color          |
| tabTextColor         | '#ffffff88' | stirng | Tab text color                       |
| tabTextSelectedColor | '#ffffff'   | stirng | Tab text color (When it is selected) |
| tabBarColor          | '#ffffff88' | stirng | Tab bar color                        |

<br>
<br>

# Advanced Options

| Prop                      | Default | Type   | Description                                                 |
| ------------------------- | ------- | ------ | ----------------------------------------------------------- |
| tabList                   | []      | Tab[]  | Tab and view pair object array [{ name:'', component: '' }] |
| tabHeaderStyles           | {}      | object | Tab header style                                            |
| tabButtonStyles           | {}      | object | Tab button style                                            |
| tabButtonActiveStyles     | {}      | object | Tab button style (selected)                                 |
| tabButtonTextStyles       | {}      | object | Tab button text style                                       |
| tabButtonTextActiveStyles | {}      | object | Tab button text style (selected)                            |
| tabBarContainerStyles     | {}      | object | Tab bar container style                                     |
| tabBarLineStyles          | {}      | object | Tab bar line style                                          |
| tabBarStyles              | {}      | object | Tab bar style                                               |

<br>
<br>

# Component Structure

```javascript
<View>
  <View style={tabHeaderStyles}>
    <ScrollView>
      <View>
        <TouchableOpacity
          style={
            isSelected
              ? [tabButtonStyles, tabButtonActiveStyles]
              : [tabButtonStyles]
          }>
          <Text
            style={
              isSelected
                ? [tabButtonTextStyles, tabButtonTextActiveStyles]
                : [tabButtonTextStyles]
            }></Text>
        </TouchableOpacity>
      </View>
      <View style={tabBarContainerStyles}>
        <View style={tabBarLineStyles}></View>
        <View style={tabBarStyles}></View>
      </View>
    </ScrollView>
  </View>
</View>
```
