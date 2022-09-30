import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import Loader from './components/global/Loader';
import NavigationLogged from './navigation/NavigationLogged';
import Navigation from './navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
  SplashScreen.hide()
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    
  }, []);

  if (initializing) return <Loader/>;

  if (!user) {
    return (
    <Navigation/>
    );
  }

  return (
   <NavigationLogged/>
  );
}

export default App