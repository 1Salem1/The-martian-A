import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import Loader from './components/global/Loader';
import NavigationLogged from './navigation/NavigationLogged';
import Navigation from './navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from "@sentry/react-native";

function App() {


  Sentry.init({
    dsn: "https://47bea7d0d8014d59af6c81ed0eebe868@o4503913748889600.ingest.sentry.io/4503913750265856",
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
    integrations: [
      new Sentry.ReactNativeTracing({
        tracingOrigins: ["localhost", "my-site-url.com", /^\//],
        // ... other options
      }),
    ],
  });


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

export default Sentry.wrap(App);