import { View, Text , StyleSheet, TouchableOpacity  , ScrollView} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../../utils/auth-context';
import app from '../../utils/config';
import { getDatabase, ref, onValue, set  , get , child , update} from 'firebase/database';
import { firebase } from '@react-native-firebase/auth';
import SingleActivity from './SingleActivity';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const ListActivies = () => {

  const navigation = useNavigation()


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
 
     <View>
            
          </View>
          <View style={{flex: 1, bottom : '7%'  , alignItems : 'center'}}>
    <ScrollView
    keyboardShouldPersistTaps='always'
    contentContainerStyle={{ alignItems : 'center'  }}>
       
  

 
 {data.slice(0, 2).map((element ,i) => {
       return (
        <TouchableOpacity key={i} style={styles.container} >
  
        <SingleActivity data={element}/>
        </TouchableOpacity>
      ) 
      })} 



<View ></View>
         

    </ScrollView>
    <TouchableOpacity onPress={()=> navigation.navigate('listA')} >
                    <View style={{ top : 20 ,  width: 113,height: 40,borderRadius: 15,borderColor: '#ffd6c7',borderStyle: 'solid',justifyContent :'center',borderWidth: 1,backgroundColor: '#ffffff'}}>
                        <Text style={{ color: '#666666',fontFamily: 'Museo',fontSize: 14,fontWeight: '400',fontStyle: 'normal',textAlign: 'center',lineHeight: 22,}}>View all</Text>
                    </View>
                </TouchableOpacity>
    
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
      marginTop : 10,
    },
})



