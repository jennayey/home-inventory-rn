import React, {Component} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Button, View, Text, Alert, Pressable, Modal} from 'react-native';
import colorSchemes from '../styles/themes';
import moment from 'moment';
export default function ProductEntry({item}) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('ProductPage', {
          itemID: item.key,
          name: item.itemName,
          stock: item.stock,
          // expiryDate: item.expiryDate
          // itemName: itemName,
          // expiryDate: itemExpiry,
          // stock: itemStock,
          // key: '@'+itemName,
        })
      }>
      <View
        style={{
          paddingVertical: '5%',
          borderRadius: 5,
          borderBottomWidth: 2,
          borderColor: '#EEE',
        }}>
        <Text
          style={{
            color: colorSchemes().textColor,
            marginBottom: 5,
            fontSize: 17,
          }}>
          {item.itemName}
        </Text>
        <Text
          style={{color: colorSchemes().subtitleTextColor, marginBottom: 5}}>
          {item.stock} pcs left • Expires in{' '}
          {-moment().diff(item.expiryDate, 'days')} day/s
        </Text>

      </View>
    </Pressable>
  );
}
