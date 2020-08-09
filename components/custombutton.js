import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
function CustomButton () {
  const navigation = useNavigation();
    return (
      <Button
      title="Go to Home"
      onPress={() => navigation.navigate('Dashboard')}
      
    />
    );
  }

  export default CustomButton;