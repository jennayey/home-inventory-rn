import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

import {globalStyles} from '../styles/global';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashboardScreen from './Dashboard';
import AlertsScreen from './Alerts';
import SettingsScreen from './Settings';

import AllProductsScreen from '../screens/Products/All';
import ExpiringProductsScreen from '../screens/Products/Expiring';
import LowStockProductsScreen from '../screens/Products/LowStock';
import ProductPage from '../screens/Products/ProductPage';
import AddItem from "../screens/Products/AddItem";
import colorSchemes from '../styles/themes';
import {color} from 'react-native-reanimated';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
const HomeStack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();
const iconStyles = {
  marginBottom: 15,
};
const stackHeaderOptions = {
  headerTitleAlign: 'left',
  headerStyle: {
    shadowOpacity: 0,
    elevation: 0,
    height: 70,
  },
  headerTitleContainerStyle: {
    paddingTop: 30,
  },
  headerTitleStyle: {
    fontSize: 25,
  },
};

const productPageHeaderOptions = {
  headerTitleAlign: 'left',
  headerStyle: {
    shadowOpacity: 0,
    elevation: 0,
  },
  headerTitleContainerStyle: {
    paddingTop: 30,
  },
  headerLeftContainerStyle: {
    paddingTop: 30,
  },
  headerRightContainerStyle: {
    paddingTop: 30,
    marginRight: '5%',
  },

  headerTitleStyle: {
    fontSize: 20,
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
      <TopTabs.Navigator
        tabBarOptions={{
          tabStyle: {width: 'auto', paddingTop: 20},
          inactiveTintColor: 'grey',
          activeTintColor: colorSchemes().primaryColor,
          labelStyle: {fontSize: 13, fontWeight: 'bold'},
          indicatorStyle: {height: 3},
        }}>
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
          options={productPageHeaderOptions}
        />
        <HomeStack.Screen
          name="AddItem"
          component={AddItem}
          options={productPageHeaderOptions}
        />
      
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
        {/* <BottomTabs.Screen
          name="Dashboard"
          component={HomeStackNav}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                name="dashboard"
                color={color}
                size={size}
                style={iconStyles}
              />
            ),
          }}
        /> */}
        <BottomTabs.Screen
          name="Products"
          component={ProductsStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                name="fastfood"
                color={color}
                size={size}
                style={iconStyles}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Alerts"
          component={AlertsStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                name="notifications"
                color={color}
                size={size}
                style={iconStyles}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name="Settings"
          component={SettingStack}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon
                name="settings"
                color={color}
                size={size}
                style={iconStyles}
              />
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
}

// export default Home
