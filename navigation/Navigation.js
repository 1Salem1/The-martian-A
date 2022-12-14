import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnjoyYourExpedition from '../screens/EnjoyYourExpedition';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen'
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import Simple from '../screens/onBordingScreen';
import PrivacyPolicy from '../screens/PrivacyPolicy';

const Stack = createNativeStackNavigator();




const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='EnjoyYourExpedition'
    screenOptions={{headerShown :false,
      animation: "slide_from_right",
    }}
    mode="modal"
    >
   
      <Stack.Screen  name="signIN" component={SignInScreen} />
      <Stack.Screen  name="signUP" component={SignUpScreen} />
      <Stack.Screen  name="EnjoyYourExpedition" component={EnjoyYourExpedition} />
      <Stack.Screen  name="forget" component={ForgetPasswordScreen} />
      <Stack.Screen  name="p" component={PrivacyPolicy} />
  
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation