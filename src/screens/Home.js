import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

import {globalStyles} from '../styles/global';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DashboardScreen from './Dashboard';
import AlertsScreen from './Alerts';
import SettingsScreen from './Settings';

import AllProductsScreen from '../screens/Products/All';
import ExpiringProductsScreen from '../screens/Products/Expiring';
import LowStockProductsScreen from '../screens/Products/LowStock';
import ProductPage from '../screens/Products/ProductPage';
import colorSchemes from '../styles/themes';
import {color} from 'react-native-reanimated';
const HomeStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

const stackHeaderOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    shadowOpacity: 0,
    elevation: 0,
  },
};

export default function HomeScreen() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colorSchemes().primaryColor,
      background: colorSchemes().primaryBackgroundColor,
      card: colorSchemes().primaryBackgroundColor,
      text: colorSchemes().textColor,
      border: colorSchemes().accentColor,
      notification: 'rgb(255, 69, 58)',
    },
  };
  function ProductTopTabs() {
    return (
      <TopTabs.Navigator>
        <TopTabs.Screen name="All" component={AllProductsScreen} />
        <TopTabs.Screen name="Expiring" component={ExpiringProductsScreen} />
        <TopTabs.Screen name="Low Stock" component={LowStockProductsScreen} />
      </TopTabs.Navigator>
    );
  }

  function HomeStackNav() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={stackHeaderOptions}
        />
      </HomeStack.Navigator>
    );
  }
  function ProductsStack() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Products"
          component={ProductTopTabs}
          options={stackHeaderOptions}
        />
        <HomeStack.Screen
        name="ProductPage"
        component={ProductPage}
        options={stackHeaderOptions}/>
      </HomeStack.Navigator>
    );
  }

  function AlertsStack() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Alerts"
          component={AlertsScreen}
          options={stackHeaderOptions}
        />
      </HomeStack.Navigator>
    );
  }

  function SettingStack() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Settings"
          component={SettingsScreen}
          options={stackHeaderOptions}
        />
      </HomeStack.Navigator>
    );
  }

  return (
    <NavigationContainer theme={MyTheme}>
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
        <BottomTabs.Screen name="Home" component={HomeStackNav} />
        <BottomTabs.Screen name="Products" component={ProductsStack} />
        <BottomTabs.Screen name="Alerts" component={AlertsStack} />
        <BottomTabs.Screen name="Settings" component={SettingStack} />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}

// export default Home
