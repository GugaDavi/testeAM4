import React from 'react';
import { Text, StatusBar } from 'react-native';

import Routes from './routes';

console.disableYellowBox = true;

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#222" barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;
