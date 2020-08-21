
import React from 'react';


import { useNavigation } from '@react-navigation/native';
import { Button, View, Text, Alert } from 'react-native';

import colorSchemes from '../styles/themes'
export default function Announcement({ screenName }) {
    const navigation = useNavigation();
console.log (typeof screenName);
    const styles = {
      container: {
        backgroundColor: colorSchemes().secondaryBackgroundColor, 
        width: '90%', 
        paddingVertical: '5%', 
        paddingHorizontal: '5%', 
        borderRadius: 5,
        marginBottom: 10
      },


    }
    return (

        <View style={styles.container}>
            <Text style={{ color: 'black', marginBottom: 20 }}>
                You have 34 items that are {screenName}</Text>

            <Button title={`Go to ${screenName} products`} onPress={() => navigation.navigate('Products', {screen: 'Products', params: {screen: screenName }})} style={{ color: '#172CE8', margin: 20, fontWeight: 'bold' }} />

        </View>
    )

}