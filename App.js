import React from 'react';
import { Text } from 'react-native';
// import ScrollTabView from './src';
import ScrollTabView from './src/v2/index';

const textStyle = { color: '#f57791', fontSize: 50 };

const App = () => {
  return (
    <ScrollTabView
      tabList={[
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
      ]}
    />
  );
};

export default App;
