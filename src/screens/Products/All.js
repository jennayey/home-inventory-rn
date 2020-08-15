import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import ProductEntry from '../../components/Product.Entry'
class AllProductsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', paddingTop:'10%'}}>
        <ProductEntry productName='Oreo Cookies' stockPcs='9' expiryDate='December 4, 2020' />
        <ProductEntry productName='Cooking Oil' stockPcs='2' expiryDate='October 23, 2020' />

      </View>
    );
  }
}

export default AllProductsScreen;
