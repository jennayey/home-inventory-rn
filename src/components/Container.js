import React, {Component} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Button, View, Text, Alert, Pressable, Modal} from 'react-native';
import colorSchemes from '../styles/themes';
import moment from 'moment';
import {Children} from 'react/cjs/react.production.min';
export default function Container({children}) {
  const navigation = useNavigation();
  return (
    // TO DO: Pass items details to product view screen

    <View
      style={{
        paddingHorizontal: '3%',
        paddingVertical: '5%',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }}>
      {children}
    </View>
  );
}
