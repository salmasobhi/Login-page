import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Rootstack from './navigation/Rootstack';

const App = () => {
  return (
    <NavigationContainer>
    <Rootstack />
    </NavigationContainer>
  );
};

export default App;