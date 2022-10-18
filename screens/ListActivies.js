import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../utils/auth-context';


const ListActivies = ({navigation}) => {

  const Auth = useContext(AuthContext)







useEffect(()=>{






},[])




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
            <Text style={styles.notification}>Ski Activities </Text>
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
      marginVertical : 20,
    },
})



