import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import { globalStyles, themedStyles } from './styles/global'

import { useTheme } from "react-native-themed-styles"


class DashboardScreen extends Component {

    
render() {
    const [styles] = useTheme(themedStyles, "light")

return (    <View style={styles.container}>
<Text style={styles.text}>Dark Theme</Text>

</View>);
}
}

export default DashboardScreen;