/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {getTheme, updateTheme} from './src/contexts/ManageThemeContexts'

import HomeScreen from './src/components/Home'
// import { ThemeProvider } from '@react-navigation/native';
import {Themer} from './src/contexts/ManageThemeContexts'
export default function App() {


  return (
<Themer>
<HomeScreen/>

</Themer>
    );
}


