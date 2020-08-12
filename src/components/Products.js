import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import { globalStyles } from '../styles/global'

class ProductsScreen extends Component {
render() {
  return (  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  <Text  style={globalStyles.text} >Products List Screen</Text>
 
</View>);
}
}

export default ProductsScreen;