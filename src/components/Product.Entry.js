
import React, {Component} from 'react';


import { useNavigation } from '@react-navigation/native';
import {Button, View, Text, Alert, Pressable} from 'react-native';


export default function ProductEntry({productName, stockPcs, expiryDate}){
    const navigation = useNavigation();
return(

    <Pressable style={{ width: '90%', }} onPress={()=> navigation.navigate('Settings')} >
        <View style={{paddingVertical: '5%', borderRadius: 5, }}>
        <Text style={{color:'black', marginBottom: 10, fontWeight:'bold' }}>
{productName}    </Text>
<Text style={{color:'black', marginBottom: 10 }}>
{stockPcs} pcs left   </Text>

<Text style={{color:'black', marginBottom: 10 }}>
{expiryDate}    </Text>


    </View>
    </Pressable>
)

}