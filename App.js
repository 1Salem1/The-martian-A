import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import Loader from './components/global/Loader';
import NavigationLogged from './navigation/NavigationLogged';
import Navigation from './navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';
import * as Sentry from "@sentry/react-native";
import OneSignal from 'react-native-onesignal';
import { NotificationListner , requestUserPermission , getFCMToken} from './utils/push_notification_helper';
import AsyncStorage from '@react-native-async-storage/async-storage'
import FirstTimeNavigation from './navigation/FirstTimeNavigation'
import messaging from '@react-native-firebase/messaging';
import { saveUserPushNotification } from './utils/AddPushNotification'
OneSignal.setAppId("a8c25a20-ca30-41b2-92d3-bd7472d3f18c");


function App() {
       
  const [loading, setLoading] = useState(true);
  const [firstLaunch, setFirstLaunch] = useState(true);

  OneSignal.promptForPushNotificationsWithUserResponse();

  //Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
    console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    console.log("notification: ", notification);
    const data = notification.additionalData
    console.log("additionalData: ", data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  });
  
  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log("OneSignal: notification opened:", notification);
  });






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
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('Notification caused app to open from background state:', remoteMessage.notification,);
    saveUserPushNotification(remoteMessage.notification.body  , remoteMessage.notification.title , remoteMessage.sentTime)
     return remoteMessage
   
     })

     messaging()
     .getInitialNotification()
     .then(remoteMessage => {
       if (remoteMessage) {
         console.log('Notification caused app to open from quit state:',  remoteMessage.notification,);
         saveUserPushNotification(remoteMessage.notification.body  , remoteMessage.notification.title , remoteMessage.sentTime)
     return remoteMessage
       }})



       messaging().onMessage(async remoteMessage => {
           console.log("notification on froground state........", remoteMessage)
        saveUserPushNotification(remoteMessage.notification.body  , remoteMessage.notification.title , remoteMessage.sentTime)
           return remoteMessage
       })

    

       messaging().setBackgroundMessageHandler(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
        saveUserPushNotification(remoteMessage.notification.body  , remoteMessage.notification.title , remoteMessage.sentTime)
         return remoteMessage
       });



  }, []);




useEffect(()=>{
SplashScreen.hide()
  AsyncStorage.getItem("alreadyLaunched").then(value => {
    if(value == null){
         AsyncStorage.setItem('alreadyLaunched', 'true'); 
        setFirstLaunch(true)
    }
    else{
        setFirstLaunch(false)
    }})


},[])







  if (initializing) return <Loader/>;



  if(firstLaunch && !user){
    return (
      <FirstTimeNavigation/>
    )
  }



 if (!user) {
    return (
    <Navigation/>
    )
  }
  else  if (user) {

  return (
   <NavigationLogged/>
  );
  }
}

export default Sentry.wrap(App);