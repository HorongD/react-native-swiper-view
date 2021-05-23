# Demo

![](https://user-images.githubusercontent.com/61274990/119274381-99457580-bc4a-11eb-9fc3-c9dfd7d2d963.gif)

<br />
<br />

# Quick Start

```javascript
import React from "react";
import { Text } from "react-native";
import ScrollTabView from "./src";

const textStyle = { color: "#f57791", fontSize: 50 };

const App = () => {
  return (
    <ScrollTabView
      tabList={[
        { name: "ALL", component: <Text style={textStyle}>ALL</Text> },
        {
          name: "SKIN CARE",
          component: <Text style={textStyle}>SKIN CARE</Text>,
        },
        { name: "MAKE UP", component: <Text style={textStyle}>MAKE UP</Text> },
        {
          name: "CLEANSING",
          component: <Text style={textStyle}>CLEANSING</Text>,
        },
        { name: "MASK", component: <Text style={textStyle}>MASK</Text> },
        { name: "BODY", component: <Text style={textStyle}>BODY</Text> },
        { name: "HAIR", component: <Text style={textStyle}>HAIR</Text> },
        { name: "NEW", component: <Text style={textStyle}>NEW</Text> },
        { name: "BEST", component: <Text style={textStyle}>BEST</Text> },
        { name: "BRAND", component: <Text style={textStyle}>BRAND</Text> },
        { name: "EVENT", component: <Text style={textStyle}>EVENT</Text> },
      ]}
    />
  );
};
```

<br />
<br />

# Options

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

```javascript
<View>
  <View style={tabHeaderStyles}>
    <ScrollView>
      <View>
        <TouchableOpacity style={tabButtonStyles}>
          {isSelected ? (
            <Text style={[tabButtonTextStyles, tabButtonTextActiveStyles]}>
              Selected Name
            </Text>
          ) : (
            <Text style={[tabButtonTextStyles]}>Name</Text>
          )}
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
