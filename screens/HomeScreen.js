import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../components/global/Button'
import { getDatabase, ref, onValue, set  , get , child , update} from 'firebase/database';
import auth from '@react-native-firebase/auth';
import {SignOUT} from '../utils/auth'
import { AuthContext } from '../utils/auth-context';
import {getUserData} from '../utils/crud'
import app from '../utils/config';

const HomeScreen = ({navigation}) => {

  const AuthCtx = useContext(AuthContext)


   function getUserData(uid) {
    const db = getDatabase(app);
      const reference = ref(db, 'users/' + uid);
      onValue(reference, (snapshot) => {
        const data = snapshot.val();
        
         AuthCtx.setEmail(data.email)
         AuthCtx.setFname(data.first_name)
         AuthCtx.setLname(data.last_name)
         AuthCtx.setImage(data.image)
      });
    } 


  function getData(){
  const d =  auth().currentUser.uid
 getUserData(d)
  




 }





useEffect(()=>{
 getData()
},[])


  return (
    <View>
      <Text style={{color : 'black'}}>{AuthCtx.getData().email}</Text>
      <Button title='Sign out' onPress={SignOUT} />
      <Button title='profile' onPress={()=>navigation.navigate('profile')} />
      <Button title='Weather' onPress={()=>navigation.navigate('weather')} />
      <Button title='pdf' onPress={()=>navigation.navigate('pdf')} />
    </View>
  )
}

export default HomeScreen