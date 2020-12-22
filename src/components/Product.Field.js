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
  TouchableOpacity,
} from 'react-native';
import colorSchemes from '../styles/themes';
import moment from 'moment';
export default function ProductField(props) {
  // let inputType = props.buttonOptions.title || 'default'
  // let editMode = props.editMode ? true : false
  ProductField.defaultProps = {
    editMode: false,
  };
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderColor: '#EEE',
        paddingVertical: 10,
        width: '100%',
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexBasis: '70%',
        }}>
        <Text
          style={{
            textTransform: 'uppercase',
            color: colorSchemes().subtitleTextColor,
            marginRight: 10,
            fontWeight: 'bold',
            flexBasis: '40%',
          }}>
          {props.title}
        </Text>
        {props.numberField ? (
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity
              onPressIn={props.onPressLButton}
              style={{
                borderColor: 'gray',
                borderWidth: 1,
                paddingHorizontal: 12,
                paddingVertical: 8,
              }}>
              <Text style={{fontSize: 20, color: 'gray'}}>—</Text>
            </TouchableOpacity>
            <View>
              <Text style={{paddingHorizontal: 30, paddingVertical: 12}}>
                {props.textValue}
              </Text>
            </View>
            <TouchableOpacity
              onPressIn={props.onPressRButton}
              style={{
                borderColor: 'gray',
                borderWidth: 1,
                paddingHorizontal: 15,
                paddingVertical: 8,
              }}>
              <Text style={{fontSize: 20, color: 'gray'}}>+</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TextInput
            style={{
              borderColor: '#EEE',
              // flexBasis:'30%',
              color: 'black',
            }}
            onChangeText={props.editMode ? props.onChangeText : null}
            // placeholder={props.placeholderText || 'Placeholder'}
            keyboardType={props.inputType || 'default'}
            value={props.value}
            editable={
              props.editMode ? (props.buttonShow ? false : true) : false
            }
            multiline={props.multiline || false}
            // textAlignVertical={props.multiline}
            // defaultValue={props.defaultValue || 'default value'}
          />
        )}
      </View>
      {props.buttonShow ? (
        <Button title={props.buttonTitle || 'Button'} onPress={props.onPress} />
      ) : (
        <View></View>
      )}
    </View>
  );
}
