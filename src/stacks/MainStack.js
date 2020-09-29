import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import Home from '../screens/Home';
import MainTab from '../stacks/MainTab';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="MainTab"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="MainTab" component={MainTab} />
  </Stack.Navigator>
);
