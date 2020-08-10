import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import { globalStyles } from '../styles/global'

class ExpiringProductsScreen extends Component {
render() {
return (    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
<Text style={globalStyles.text} >Expiring Products Appear here</Text>

</View>);
}
}

export default ExpiringProductsScreen;