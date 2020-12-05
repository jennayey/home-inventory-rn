import React, {Component} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Button, View, Text, Alert, Pressable, Modal} from 'react-native';
import colorSchemes from '../styles/themes';
import moment from 'moment'
export default function ProductEntry({item}) {
  const navigation = useNavigation();
  return (
    // TO DO: Pass items details to product view screen
  <Pressable onPress={() => navigation.navigate('ProductPage', {
    itemID: item.key,
    name: item.itemName,
    stock: item.stock
    // expiryDate: item.expiryDate
    // itemName: itemName,
    // expiryDate: itemExpiry,
    // stock: itemStock,
    // key: '@'+itemName,
  })}>
      <View style={{paddingVertical: '5%', borderRadius: 5}}>
        <Text
          style={{
            color: colorSchemes().textColor,
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          {item.itemName}{' '}
        </Text>
        <Text style={{color: colorSchemes().textColor, marginBottom: 10}}>
          {item.stock} pcs left{' '}
        </Text>

        <Text style={{color: colorSchemes().textColor, marginBottom: 10}}>
          {moment(item.expiryDate).format('MMMM DD, YYYY')}{' '}
        </Text>
      </View>
    </Pressable>
  );
}
