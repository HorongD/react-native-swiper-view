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
        { name: 'EVENT', component: <Text style={textStyle}>EVENT</Text> },
      ]}
    />
  );
};

export default App;
