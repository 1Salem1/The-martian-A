import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';


const Stack = createNativeStackNavigator();




const NavigationLogged = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='profile'
    screenOptions={{headerShown :false}}
    mode="modal"
    >
      <Stack.Screen  name="Home" component={HomeScreen} />
      <Stack.Screen  name="profile" component={Profile} />


    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default NavigationLogged