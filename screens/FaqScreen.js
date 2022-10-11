import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import Icon3 from 'react-native-vector-icons/MaterialIcons'
import TabViewExample from '../components/skiOnMars/Tab';
import Loader from '../components/global/Loader';
import { AuthContext } from '../utils/auth-context';
import { GetLocation, getWeather } from '../utils/Weather';
import { useFocusEffect } from '@react-navigation/native';

const Weather = ({navigation}) => {







  const[city , setCity] = useState('This Location is unknown')
  const[Country , setCountry] = useState()
  const[snow , setSnow] = useState("0.00")
  const[temp , setTemp] = useState('0.00')
  const [data , setData] = useState(null)






























  



  

  const Auth = useContext(AuthContext)








  return (
<View style={{flex : 1}}>
  <Loader visible={!temp}/>
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
    title : {
      color: '#000000',
      fontFamily: 'MuseoSans_700',
      fontSize: 22,
      fontWeight: '700',
      fontStyle: 'normal',
      textAlign: 'left',
    },
    aiguillesDe: {
      color: '#666666',
      fontFamily: 'Museo Sans 300',
      fontSize: 14,
      fontWeight: '400',
      fontStyle: 'normal',
      textAlign: 'left',
      top : 5
    },
    c: {
   
      color: '#707070',
      fontFamily: 'MuseoSans_300',
      fontSize: 16,
      fontWeight: '400',
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 22,
    },
    cc: {
   
      color: '#707070',
      fontFamily: 'MuseoSans_300',
      fontSize: 22,
      fontWeight: '400',
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 22,
      top : 10
    },

    c3: {
   
      color: '#707070',
      fontFamily: 'MuseoSans_300',
      fontSize: 11,
      fontWeight: '700',
      fontStyle: 'normal',
      textAlign: 'left',
      lineHeight: 22,
    },
    bg: {
      width: '80%',
      height: '18%',
      borderRadius: 5,
      borderColor: '#cccccc',
      borderStyle: 'solid',
      borderWidth: 1,
      backgroundColor: '#ffffff',
      marginTop : '12%',
      justifyContent:'center',
      alignItems:'center',
      flexDirection: 'row'
    },
    selectAnother: {
      color: '#666666',
      fontFamily: 'MuseoSans_700',
      fontSize: 14,
      fontWeight: '400',
      fontStyle: 'normal',
      textAlign: 'left',
    },
})



