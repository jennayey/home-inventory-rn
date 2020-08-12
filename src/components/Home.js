
import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

import { globalStyles } from '../styles/global'

import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import DashboardScreen from './Dashboard';
import AlertsScreen from './Alerts';
import SettingsScreen from './Settings';

import AllProductsScreen from './Products/All';
import ExpiringProductsScreen from './Products/Expiring';
import LowStockProductsScreen from './Products/LowStock';
import colorSchemes from '../styles/themes'
import { color } from 'react-native-reanimated';
const BottomTabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();





export default function HomeScreen (){
  function ProductTopTabs() {
    return (
      <TopTabs.Navigator>
        <TopTabs.Screen name="All" component={AllProductsScreen} />
        <TopTabs.Screen name="Expiring" component={ExpiringProductsScreen} />
        <TopTabs.Screen name="No Stock" component={LowStockProductsScreen} />
      </TopTabs.Navigator>
    );
  }

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: colorSchemes().textColor,
background: colorSchemes().backgroundColor,
      card: colorSchemes().secondaryColor,
      text: colorSchemes().textColor,
      border: colorSchemes().secondaryColor,
      notification: 'rgb(255, 69, 58)',
    },
  };  

    
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
        <BottomTabs.Screen name="Dashboard" component={DashboardScreen} />
        <BottomTabs.Screen name="Products" children={ProductTopTabs} />
        <BottomTabs.Screen name="Alerts" component={AlertsScreen} />
        <BottomTabs.Screen name="Settings" component={SettingsScreen} />
      </BottomTabs.Navigator>
    </NavigationContainer>
 
          )
        
        
}

// export default Home