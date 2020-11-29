import React, {Component} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Button, View, Text, Alert, Pressable, Modal} from 'react-native';
import colorSchemes from '../../styles/themes';

export default function ProductPage({ route, navigation }) {
   const { itemID, name, stock, expiryDate} = route.params;
  return (
    // TO DO: Pass items details to product view screen
      <View style={{padding: '5%', borderRadius: 5}}>
        <Text
          style={{
            color: colorSchemes().textColor,
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          {name}{' '}
        </Text>
        <Text style={{color: colorSchemes().textColor, marginBottom: 10}}>
          {stock} pcs left{' '}
        </Text>

        <Text style={{color: colorSchemes().textColor, marginBottom: 10}}>
          {expiryDate}{' '}
        </Text>
      </View>
  
  );
}
