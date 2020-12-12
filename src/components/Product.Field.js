import React, {Component} from 'react';

import {useNavigation} from '@react-navigation/native';
import {
  Button,
  View,
  Text,
  Alert,
  Pressable,
  Modal,
  TextInput,
} from 'react-native';
import colorSchemes from '../styles/themes';
import moment from 'moment';
export default function ItemDescriptionEdit(props) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: '#EEE',
        paddingVertical: 10,
        width: '100%',
      }}>
      <Text
        style={{
          textTransform: 'uppercase',
          color: colorSchemes().subtitleTextColor,
          marginRight: 10,
          fontWeight: 'bold',
          flexBasis: '25%',
        }}>
        {props.title}
      </Text>
      <TextInput
        style={{
          borderColor: '#EEE',
          flexBasis: '50%',
          color: 'black'
        }}
        placeholder="No of Stocks"
        keyboardType="numeric"
        defaultValue={props.value}
        editable={props.editMode}
      />
      {props.buttonShow ? (
        <Button title="Set Date" style={{flexBasis: '25%'}} />
      ) : (
        <></>
      )}
    </View>
  );
}
