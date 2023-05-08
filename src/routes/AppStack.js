import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import CasesTabs from './CasesTabs';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Study" component={CasesTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
