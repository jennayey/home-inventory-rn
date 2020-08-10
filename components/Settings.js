import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import { exp } from 'react-native-reanimated';
import { globalStyles } from './styles/global'

class SettingsScreen extends Component {
render() {
return (    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
<Text  style={globalStyles.text} > Settings Screen</Text>

</View>);
}
}

export default SettingsScreen;