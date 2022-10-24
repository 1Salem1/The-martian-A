import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {saveUserNotification} from './AddPushNotification'

async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

async function getFCMToken(){
    let fcmtoken = await AsyncStorage.getItem('fcmtoken').then(((x)=>{
       
    }))
  
    if (!fcmtoken){
       try {
       await messaging().getToken().then((x)=>{
           console.log(x)
       })
     
        if (fcmtoken){

         await  AsyncStorage.setItem("fcmtoken", JSON.stringify(fcmtoken))

        } else {

        }
       
       }
       catch(error){
            console.log(error,'error in fcmtoken')
    }
    }

}
 

 const NotificationListner = async() =>{

    messaging().onNotificationOpenedApp(remoteMessage => {
       console.log('Notification caused app to open from background state:', remoteMessage.notification,);
       //saveUserNotification(remoteMessage.notification.body , remoteMessage.notification.title)
        return remoteMessage
      
        })

        messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log('Notification caused app to open from quit state:',  remoteMessage.notification,);
           // saveUserNotification(remoteMessage.notification.body , remoteMessage.notification.title)
        return remoteMessage
          }})



          messaging().onMessage(async remoteMessage => {
              console.log("notification on froground state........", remoteMessage)
              console.log(remoteMessage.notification.title)
              console.log(remoteMessage.notification.body)
        
              saveUserNotification( body,title )
              return remoteMessage
          })

          messaging().setBackgroundMessageHandler(async remoteMessage => {
           console.log('Message handled in the background!', remoteMessage);
          // saveUserNotification(remoteMessage.notification.body , remoteMessage.notification.title)
            return remoteMessage
          });

}



export {NotificationListner , requestUserPermission , getFCMToken}