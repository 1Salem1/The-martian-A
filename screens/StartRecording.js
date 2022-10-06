import * as React from 'react';
import MapView  ,{Callout, Marker}from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions , ImageBackground, TouchableOpacity } from 'react-native';
import style from '../styles/MapStyle';
import Button from '../components/profile/Button';
import * as Location from 'expo-location';
import { GetLocation, getWeather } from '../utils/Weather';
import Loader from '../components/global/Loader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import { List } from 'react-native-paper';



const StartRecording = ({navigation}) => {
  const[long , setLong] = React.useState(null)
  const [lat , setLat] = React.useState(null)
  const [data , setData] = React.useState()
  const [ListVisible , setListVisible] = React.useState(false)




  async function GetCurrentLocation(){
    const dataT = await GetLocation()
    console.log(dataT.coords.latitude)
    console.log(dataT.coords.longitude)
   

 
     setLat(dataT.coords.latitude)
      setLong(dataT.coords.longitude)
    }
  
  
  
  




  React.useEffect(()=>{
    GetCurrentLocation()
  },[])





    var  MapStyle = style

    if(!lat && !long){
      return (
        <Loader visible={true}/>
      )
     
      
    }
    else {
      return (
        <View style={styles.container}>
     
        <MapView
        mapPadding={{
          top: 0,
          right: 0,
          bottom: 400,
          left: 0
         }}
    initialRegion={{
      latitude:  lat,
      longitude: long,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001
    }}
      
        customMapStyle={MapStyle}
        style={styles.map} >
    
          
              <Marker
                coordinate={{ latitude: lat, longitude: long }}
                pinColor="black"
         
   
             >
            
              </Marker>
              
        </MapView>
        <Callout style={styles.buttonCallout}>
          <TouchableOpacity
            style={[styles.touchable]}
            onPress={() => console.log("press")}
          />
          </Callout>
            
        <View style={{flexDirection:'row' , justifyContent:'space-around' ,alignContent:'center' , marginTop : 15 }}> 
         
        
        <View style={styles.rectangle486}>
        <View style={{flexDirection :'row' , paddingTop : 40}}>
                <Text style={styles.recording}>Tap to record</Text>
              </View>
              <Text style={styles.layer00}>00:00:00</Text>
         


<ImageBackground
  resizeMode="cover"
  style={ styles.imgBackground } 
  source={require('../assets/background/devide.png')}> 

<View style={{flexDirection :'row' , justifyContent : 'space-around' , top : '20%' }}>
<View  style={styles.rectangle483}>
<View style={{flexDirection:'row' , justifyContent:'space-between' }}>

<Icon2 name='fire' style={{ color : '#e8500e' , fontSize: 20 , marginRight : 14  }} />
<Text style={styles.calories}>CALORIES</Text>
</View>
<Text  style={styles.kcal} >--kcal</Text>
</View>
<View  style={styles.rectangle483}>
<View style={{flexDirection:'row' , justifyContent:'space-between' }}>
<Icon3 name='map-marker-distance' style={{ color : '#e8500e' , fontSize: 20 , marginRight : 14  }} />
<Text style={styles.calories}>DISTANCE</Text>
</View>
<Text  style={styles.kcal} >--km</Text>
</View>

</View>

<View style={{flexDirection :'row' , justifyContent : 'space-around' , top : '25%'}}>
<View  style={styles.rectangle483}>
<View style={{flexDirection:'row' , justifyContent:'space-between' }}>
<Icon2 name='mountain' style={{ color : '#e8500e' , fontSize: 20 , marginRight : 14  }} />
<Text style={styles.calories}>ALTITUDE</Text>
</View>
<Text  style={styles.kcal} >--m</Text>
</View>
<View  style={styles.rectangle483}>
<View style={{flexDirection:'row' , justifyContent:'space-between' }}>
<Icon3 name='speedometer' style={{ color : '#e8500e' , fontSize: 20 , marginRight : 14  }} />
<Text style={styles.calories}>AVG.SPEED</Text>
</View>
<Text  style={styles.kcal} >--km/h</Text>
</View>

</View>



</ImageBackground>
<View style={{bottom : '0%',  width : '100%' , height : 50  , alignItems :'stretch' , flexDirection:'row' , justifyContent : 'space-around'  }}>
{  ListVisible &&<TouchableOpacity style={{top : '2%' , left : '50%'}}>
  <View style={{ elevation : 30, width: 70,height: 70, shadowColor: 'rgba(0, 0, 0, 0.25)', shadowOffset: { width: 12, height: 0 }, shadowRadius: 32, borderRadius :45, backgroundColor: 'white',  justifyContent:'center' ,alignItems:'center'}}>
  <Icon2 name='times' style={{ color : '#e8500e' , fontSize: 25   }} />
  </View>
</TouchableOpacity>
}
{  !ListVisible &&<View style={{top : '2%' , left : '50%'}}>
  <View style={{ elevation : 30, width: 70,height: 70, shadowColor: 'rgba(0, 0, 0, 0.25)', shadowOffset: { width: 12, height: 0 }, shadowRadius: 32, borderRadius :45, backgroundColor: 'transparent',  justifyContent:'center' ,alignItems:'center'}}>
 
  </View>
</View>
}

<TouchableOpacity onPress={() => setListVisible(!ListVisible)}>
  <View style={{ width: 90,height: 90, shadowColor: 'rgba(0, 0, 0, 0.25)', shadowOffset: { width: 12, height: 0 }, shadowRadius: 32, borderRadius :45, backgroundColor: '#e8500e',  justifyContent:'center' ,alignItems:'center'}}>
     <View style={{
        width: 30,
        height: 30,
        borderRadius :15,  
        backgroundColor: '#ffffff',
     }}>

     </View>
  </View>
</TouchableOpacity>

{ListVisible &&<TouchableOpacity style={{top : '2%' , right : '50%'}}>
  <View style={{ elevation : 30, width: 70,height: 70, shadowColor: 'rgba(0, 0, 0, 0.25)', shadowOffset: { width: 12, height: 0 }, shadowRadius: 32, borderRadius :45, backgroundColor: 'white',  justifyContent:'center' ,alignItems:'center'}}>
  <Icon2 name='check' style={{ color : '#e8500e' , fontSize: 25   }} />
  </View>
</TouchableOpacity>
}

{!ListVisible &&<TouchableOpacity style={{top : '2%' , right : '50%'}}>
  <View style={{ elevation : 30, width: 70,height: 70, shadowColor: 'rgba(0, 0, 0, 0.25)', shadowOffset: { width: 12, height: 0 }, shadowRadius: 32, borderRadius :45, backgroundColor: 'white',  justifyContent:'center' ,alignItems:'center'}}>
  <Icon2 name='list' style={{ color : '#e8500e' , fontSize: 25   }} />
  </View>
</TouchableOpacity>
}


</View>

        </View>
            
          
            
                </View>
      </View>
      )
    }

  
}

export default StartRecording


const styles = StyleSheet.create({
  rectangle484: {
    width: 157,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#666666',
    alignItems:'center',
    justifyContent:'center'
  },

  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 ,
     bottom : 20 
},
    container: {
     backgroundColor :'white',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
   
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height*0.3,
      top  : 0 ,
      left : 0 ,
      right : 0 ,
    },
    rectangle486: {
      width: 375,
      height: 472,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 12, height: 0 },
      shadowOpacity:  0.4,
      shadowRadius: 32,
      elevation: 3,
      backgroundColor: 'white',
      alignItems :'center',
      marginBottom : "5%"
    
   

    },
    recording: {
      color: '#666666',
      fontFamily: 'MuseoSans_700',
      fontSize: 20,
      fontWeight: '400',
      fontStyle: 'normal',
      textAlign: 'left',
     
    },
    lineStyle:{
      borderWidth: 0.5,
      borderColor:'black',
      margin:10,
 },
 layer17: {
  
  color: '#707070',
  fontFamily: 'MuseoSans_300',
  fontSize: 14,
  fontWeight: '400',
  fontStyle: 'normal',
  textAlign: 'left',

},

rectangle483: {
  width: 157,
  height: 80,
  borderRadius: 5,
  alignItems:'center',
  justifyContent:'center'
},
layer00: {
  width: 172,
  height: 34,
  color: '#666666',
  fontFamily: 'MuseoSans_300',
  fontSize: 32,
  fontWeight: '400',
  fontStyle: 'normal',
  textAlign: 'center',
  letterSpacing: 0.94,
  marginVertical : 10
},
calories: {
  color: '#666666',
  fontFamily: 'MuseoSans_700',
  fontSize: 14,
  fontWeight: '400',
  fontStyle: 'normal',
  textAlign: 'left',
  alignItems:'center'

},
kcal: {
  color: '#666666',
  fontFamily: 'MuseoSans_300',
  fontSize: 17,
  fontWeight: '400',
  fontStyle: 'normal',
  textAlign: 'left',

},


  });