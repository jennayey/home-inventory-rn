/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomButton from './components/custombutton';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function AlertsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details screen"
        onPress={() => navigation.navigate('Details')}
      />
      <CustomButton />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Alerts"
        onPress={() => navigation.navigate('Alerts')}
      />
      <Button
        title="Go to First Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator( 
  );



function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />

        <Stack.Screen name="Alerts" component={AlertsScreen} />
      </Stack.Navigator> */}

<BottomTabs.Navigator tabBarOptions={{
   
    tabStyle: {
      paddingTop: 20,
      paddingBottom: 10,
      
    },
    style: {
      height: 58,
    },
    labelPosition: 'below-icon',
 
  }}>
  <BottomTabs.Screen  name="Dashboard" component={HomeScreen} />
  <BottomTabs.Screen name="Products" component={DetailsScreen}/>
  <BottomTabs.Screen name="Alerts" component={DetailsScreen}/>
  <BottomTabs.Screen name="Settings" component={DetailsScreen}/>


</BottomTabs.Navigator>
    
    </NavigationContainer>
  );
}

export default App;
