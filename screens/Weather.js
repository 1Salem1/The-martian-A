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
import PopUpLogin from '../components/global/PopUpError';
  const Weather = ({route ,navigation}) => {
  
    const auth = useContext(AuthContext)
    const  lat = route.params?.latitude;
  
    const lon = route.params?.longitude;
  


    
    const[city , setCity] = useState('This Location is unknown')
    const[Country , setCountry] = useState()
    const[snow , setSnow] = useState(0.00)
    const[temp , setTemp] = useState(0.00)
    const [data , setData] = useState(null)
    const[visible , setVisible] = useState(false)
    const [lat_v , setLat] = useState(0)
    const [lon_v , setLon] = useState(0)






















useEffect(()=>{
  GetCurrentLocation()
},[])



  useFocusEffect(

    React.useCallback(() => {
   
      if(lat){
        RgetWeather()
      }
     
    }, [lat])
  );


async function GetCurrentLocation(){
  const dataT = await GetLocation()
  //console.log(dataT.coords)
auth.setLocation(dataT.coords)

  console.log("FROM AUTH ", auth.GetLocation())
  if(dataT == 'no'){
    setVisible(true)
    return 0
  }

  setLat(dataT.coords.latitude)
  setLon(dataT.coords.longitude)
  setData({
    latitude : lat_v ,
    longitude : lon_v
  })
  console.log(data)
  const weather = await getWeather(dataT.coords)
 // console.log(weather.data)
  setTemp(weather.data.main.temp)
  setCity(weather.data.name)
  setCountry(weather.data.sys['country'])
  if (weather.data.snow){
  if(weather.data.snow['1h']){
    setSnow(weather.data.snow['1h'])
  }
  else {
    setSnow(weather.data.snow['3h']) 
  }
  }

}

async function RgetWeather(){
  if(lat && lon){
    const NewLocation = {
      longitude : lon ,
      latitude : lat ,
    }

    
    const weather = await getWeather(NewLocation)
    setData(NewLocation)
    setTemp(weather.data.main.temp)
if(weather.data.name){
  setCity(weather.data.name)
}
    setCountry(weather.data.sys['country'])
    if (weather.data.snow){
      setSnow(weather.data.snow['1h'])
    }
  }
}



    

    const Auth = useContext(AuthContext)

const HandleVisibleError = ()=>{

  setVisible(false)
  GetCurrentLocation()


}






    return (
  <View style={{flex : 1}}>
    <PopUpLogin visible={visible} HandleVisibleError={HandleVisibleError}/>
    <View style={styles.container}>
       <View style={{flexDirection :'row'  , justifyContent : 'space-between'   }}>
        <TouchableOpacity   onPress={()=>navigation.navigate('Home')}>
      <Icon name='chevron-left' style={{ color : 'black' , fontSize: 50 }} />
        </TouchableOpacity>
          
        <TouchableOpacity  onPress={()=>navigation.navigate('profile')}>
        <Avatar.Image 
            source={{
              uri: Auth.getData().image,
            }}
            size={50}
          />
        </TouchableOpacity>

       </View>

       <View style={{padding : 20 }}>
       <Text style={styles.notification}>SKI ON MARS TRACKER</Text>
     
       </View>
       <View style={{paddingHorizontal : 20}}>
       <Text style={styles.title}>OVERALL SKI CONDITIONS</Text>
       <View style={{flexDirection:'row' ,marginTop:10}}>
       <Icon name='location-on' style={{ color : '#666666' , fontSize: 18, width : 22 , marginTop : 5 }} />

       <Text style={styles.aiguillesDe}>{city}{city != 'This Location is unknown' ? ' , ' : ''}{Country}</Text>
       
       </View>



       <View style={{flexDirection:'row' ,justifyContent:'space-around' , marginTop:20}}> 







       <View style={{flexDirection:'row'}}>
<Icon name='device-thermostat' style={{color : '#eb5c26' , fontSize: 40 }} />

<Text style={styles.cc}>{temp}°c</Text>
</View>

<View style={{width:'15%'}}></View>
<View style={{flexDirection:'row'}} >
<Icon2 name='snowflake' style={{marginRight:10, color : '#eb5c26' , fontSize: 40 }} />
<View>
<Text style={styles.c}>{snow}cm</Text>
<Text style={styles.c3}>24 hours Snowfall</Text>
</View>
</View>
 </View>

       <TouchableOpacity style={styles.bg} onPress={()=> navigation.navigate('map',{data: data} )}>
<Icon3 name='my-location' style={{marginRight:10,  color: '#666666' , fontSize: 20 }} />
<Text style={styles.selectAnother}>Select another place</Text>
</TouchableOpacity>

       </View>
    
      </View>
  
    <View style={{flex : 1  , backgroundColor : 'white'}}>
      
      <TabViewExample/>
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
      notification: {
        color: '#000000',
        fontFamily: 'Esoris',
        fontSize: 28,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 36,
      },
  })