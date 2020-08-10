/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import CustomButton from './components/custombutton';

import DashboardScreen from './components/Dashboard';
import AlertsScreen from './components/Alerts';
import ProductsScreen from './components/Products';
import SettingsScreen from './components/Settings';

import AllProductsScreen from './components/Products/All';
import ExpiringProductsScreen from './components/Products/Expiring';
import LowStockProductsScreen from './components/Products/LowStock';

const BottomTabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

function App() {
  function ProductTopTabs() {
    return (
      <TopTabs.Navigator>
        <TopTabs.Screen name="All" component={AllProductsScreen} />
        <TopTabs.Screen name="Expiring" component={ExpiringProductsScreen} />
        <TopTabs.Screen name="No Stock" component={LowStockProductsScreen} />
      </TopTabs.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        tabBarOptions={{
          tabStyle: {
            paddingTop: 20,
            paddingBottom: 10,
          },
          style: {
            height: 58,
          },
          labelPosition: 'below-icon',
        }}>
        <BottomTabs.Screen name="Dashboard" component={DashboardScreen} />
        <BottomTabs.Screen name="Products" children={ProductTopTabs} />
        <BottomTabs.Screen name="Alerts" component={AlertsScreen} />
        <BottomTabs.Screen name="Settings" component={SettingsScreen} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}

export default App;
