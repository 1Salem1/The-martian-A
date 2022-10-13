import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import Loader from './components/global/Loader';
import NavigationLogged from './navigation/NavigationLogged';
import Navigation from './navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from "@sentry/react-native";
import messaging from '@react-native-firebase/messaging';
import { NotificationListner , requestUserPermission , getFCMToken} from './utils/push_notification_helper';

function App() {
       
  const [loading, setLoading] = useState(true);








  Sentry.init({
    dsn: "https://caec5f28f45f4797b4afe59f928c535b@o4503948478447616.ingest.sentry.io/4503948479561728",
    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production.
    tracesSampleRate: 1.0,
    enableAutoSessionTracking: true,
    // Sessions close after app is 10 seconds in the background.
    sessionTrackingIntervalMillis: 10000,
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