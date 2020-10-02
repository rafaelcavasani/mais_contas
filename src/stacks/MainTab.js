import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Transactions from '../screens/Transactions';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Transactions" component={Transactions} />
    <Tab.Screen name="Pay" component={Home} />
    <Tab.Screen name="MyCards" component={Home} />
    <Tab.Screen name="Profile" component={Home} />
  </Tab.Navigator>
);
