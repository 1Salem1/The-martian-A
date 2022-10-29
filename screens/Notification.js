import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../utils/auth-context';
import messaging from '@react-native-firebase/messaging';
import SingleNotification from '../components/profile/SingleNotification';
import { useFocusEffect } from '@react-navigation/native';
import { getDatabase, ref, onValue, set  , get , child , update} from 'firebase/database';
import { firebase } from '@react-native-firebase/auth';
import app from '../utils/config';
import { ScrollView } from 'react-native';

const Weather = ({navigation}) => {

 const [message , setMessage] = useState()
 const [fakeData , setFakeData] = useState()

 var dataT = [];

 const  [data , setData] = React.useState([])

 const Auth = useContext(AuthContext)
 const uid = firebase.auth().currentUser.uid






useFocusEffect(

 React.useCallback(() => {
  setData([])
   const db = getDatabase(app);
   const reference = ref(db, 'notifications/');
   onValue(reference, (snapshot) => {
    setData([])
     for (a in snapshot.val()){
     setData(data => [...data,snapshot.val()[a]] );
    console.log(data)
    
     }
    
   });
 }, [])
);





  return (
<View style={{flex : 1 }}>
  <View style={styles.container}>
     <View style={{flexDirection :'row' , justifyContent:'center' }}>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
    <Icon name='chevron-left' style={{ color : 'black' , fontSize: 50}} />
      </TouchableOpacity>
         <View style={{width:270}}></View>
      <TouchableOpacity onPress={()=>navigation.navigate('profile')}>
      <Avatar.Image 
          source={{
            uri: Auth.getData().image,
          }}
          size={50}
        />
      </TouchableOpacity>
      
     </View>
     <View>
            <Text style={styles.notification}>Notification</Text>
          </View>

          <View style={{flex : 1}}>
          <ScrollView 
            keyboardShouldPersistTaps='always'
            contentContainerStyle={{ alignItems : 'center' , paddingVertical : 10}}>
      
 
 {data.map((element ,i) => {
  return (
    <SingleNotification key={i} uri="https://i.picsum.photos/id/1073/200/300.jpg?hmac=j6ROutB6dK_56A4aAvjzWqBP0Q7RGmXYnHlL4T-R2a8" 
    p1={element.title} 
    p2={element.body} />
  
  )
})} 
<View style={{height : 60}}></View>
 </ScrollView>
          </View>
    
    </View>

</View>
  )
}

export default Weather



const styles = StyleSheet.create({
    container :{
     flex : 1 ,
     backgroundColor :'white',
     padding : 20
     
    },
    notification: {
      color: '#000000',
      fontFamily: 'Esoris',
      fontSize: 28,
      fontWeight: '400',
      fontStyle: 'normal',
      lineHeight: 36,
      paddingHorizontal : 20,
      marginVertical : 20,
    },
})



