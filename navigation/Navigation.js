import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import EnjoyYourExpedition from '../screens/EnjoyYourExpedition';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen'

const Stack = createNativeStackNavigator();




const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='EnjoyYourExpedition'
    screenOptions={{headerShown :false}}
    mode="modal"
    >
   
      <Stack.Screen  name="signIN" component={SignInScreen} />
      <Stack.Screen  name="signUP" component={SignUpScreen} />
      <Stack.Screen  name="EnjoyYourExpedition" component={EnjoyYourExpedition} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation