
import React from 'react';


import { useNavigation } from '@react-navigation/native';
import {Button, View, Text, Alert} from 'react-native';


export default function Announcement({screenName}){
    const navigation = useNavigation();
return(

    <View style={{backgroundColor: '#F3F8FF', width: '90%', paddingVertical: '5%', paddingHorizontal:'5%', borderRadius: 5, }}>
        <Text style={{color:'black', marginBottom: 20 }}>
You have 34 items that are {screenName}        </Text>

<Button title={`Go to ${screenName} products`} onPress={()=> navigation.navigate(screenName)} style={{color:'#172CE8', margin: 20, fontWeight: 'bold'  }}/>

    </View>
)

}