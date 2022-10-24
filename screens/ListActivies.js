import { View, Text , StyleSheet, TouchableOpacity  , ScrollView} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../utils/auth-context';
import app from '../utils/config';
import { getDatabase, ref, onValue, set  , get , child , update} from 'firebase/database';
import { firebase } from '@react-native-firebase/auth';
import SingleActivity from '../components/skiOnMars/SingleActivity';
import { useFocusEffect } from '@react-navigation/native';


const ListActivies = ({navigation}) => {


  var dataT = [];

  const  [data , setData] = React.useState([])

  const Auth = useContext(AuthContext)
  const uid = firebase.auth().currentUser.uid





 
useFocusEffect(

  React.useCallback(() => {
    setData([])
    const db = getDatabase(app);
    const reference = ref(db, 'activities/' + uid);
    onValue(reference, (snapshot) => {
      for (a in snapshot.val()){
      //  console.log(a)
      setData(data => [...data,snapshot.val()[a]] );
   //  console.log(data)
     
      }
     
    });
   
  

  


   
  }, [])
);




  return (
<View style={{flex : 1 }}>
  <View style={styles.container}>
     <View style={{flexDirection :'row' , justifyContent:'center' }}>
      <TouchableOpacity onPress={()=>navigation.navigate('HomeMain')}>
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
            <Text style={styles.notification}>Ski Activities </Text>
          </View>
          <View style={{flex: 1 }}>
    <ScrollView
    keyboardShouldPersistTaps='always'
    contentContainerStyle={{ alignItems : 'center' , paddingVertical : 10}}>
       
  

 
 {data.map((element ,i) => {
        return (
          <TouchableOpacity key={i} style={styles.container} >
    
          <SingleActivity data={element}/>
          </TouchableOpacity>
        );
      })} 




         

    </ScrollView>
  </View>

    </View>

</View>
  )
}

export default ListActivies



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
      marginTop : 20,
    },
})



