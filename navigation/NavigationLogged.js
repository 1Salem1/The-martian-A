import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import AuthContextProvider from '../utils/auth-context';
import Weather from '../screens/Weather';
import MapScreen from '../screens/MapScreen';
import Pdf from '../screens/pdf';
import ActivityDetails from '../screens/ActivityDetails';
import StartRecording from '../screens/StartRecording';


const Stack = createNativeStackNavigator();




const NavigationLogged = () => {
  return (
    <AuthContextProvider>


    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{headerShown :false,
      
      animation: "slide_from_right",
    }}
    mode="modal"
    >
      <Stack.Screen  name="Home" component={HomeScreen} />
      <Stack.Screen  name="profile" component={Profile} />
      <Stack.Screen  name="weather" component={Weather} />
      <Stack.Screen  name="map" component={MapScreen} />
      <Stack.Screen  name="pdf" component={Pdf} />
      <Stack.Screen  name="activityD" component={ActivityDetails} />
      <Stack.Screen  name="record" component={StartRecording} />


    </Stack.Navigator>
  </NavigationContainer>
  </AuthContextProvider>
  )
}

export default NavigationLogged