import messaging from '@react-native-firebase/messaging';


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
 

 const NotificationListner = () =>{

    messaging().onNotificationOpenedApp(remoteMessage => {
       // console.log('Notification caused app to open from background state:', remoteMessage.notification,);
        return remoteMessage
      
        })

        messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            //console.log('Notification caused app to open from quit state:',  remoteMessage.notification,);
        return remoteMessage
          }})



          messaging().onMessage(async remoteMessage => {
            //  console.log("notification on froground state........", remoteMessage)
              return remoteMessage
          })

          messaging().setBackgroundMessageHandler(async remoteMessage => {
          //  console.log('Message handled in the background!', remoteMessage);
            return remoteMessage
          });

}



export {NotificationListner , requestUserPermission , getFCMToken}