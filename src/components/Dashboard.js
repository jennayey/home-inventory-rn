import React, {Component} from 'react';
import {Button, View, Text, Alert} from 'react-native';
// import { globalStyles, themedStyles } from '../styles/global'
import  colorSchemes  from '../styles/themes'
import 'react-native-gesture-handler';

// import { useTheme } from "react-native-themed-styles"
import {getTheme, updateTheme} from '../contexts/ManageThemeContexts'
import { color } from 'react-native-reanimated';


export default function DashboardScreen(){
const toggleDarkMode = updateTheme()
const themeWhat = getTheme()
const toggleConsole = () => {
console.log (themeWhat)
}

return (    <View>
<Text style={{color: colorSchemes().primaryColor}}>Dark Theme</Text>
{/* <Button title="title" onPress={() => 
    {toggleDarkMode
        Alert.alert('Simple Button pressed')}
        }>Dark mode</Button> */}
<Button title="Dark mode test" onPress={toggleDarkMode}>Dark mode</Button>
<Button title="Press for Console" onPress={toggleConsole}>Console</Button>

</View>);

}

