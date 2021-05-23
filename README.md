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
