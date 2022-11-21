import * as React from 'react';
import MapView  ,{Callout, Marker}from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions , ImageBackground, TouchableOpacity } from 'react-native';
import style from '../styles/MapStyle';
import { GetLocation, getWeather } from '../utils/Weather';
import axios from 'axios';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'
import { useState , useEffect } from 'react';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { config } from '../utils/altitude';
import GoogleFit, {Scopes} from 'react-native-google-fit';
import { saveUserActivities } from '../utils/AddActivity';
import { firebase } from '@react-native-firebase/auth';
import Lottie from 'lottie-react-native';
import { AuthContext } from '../utils/auth-context';
import MarkerSvg from '../assets/IamHere';


const StartRecording = ({navigation}) => {
  const uid = firebase.auth().currentUser.uid
  const auth = React.useContext(AuthContext)
   const location_data = auth.GetLocation()

  const[long , setLong] = React.useState(location_data.longitude)
  const [lat , setLat] = React.useState(location_data.latitude)
  const [ListVisible , setListVisible] = React.useState(false)
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);
  const [altitude , setAltitude] = useState("--")
  const [intervalId, setIntervalId] = useState(0);
  const [calories, setCalories] = useState(0);
  const [Fit, setGoogleFit] = useState(GoogleFit.isAuthorized);
  const  [startedDate , setstartedDate] = useState()
  const  [steps , setSteps] = useState('--')



  const handleClick = async () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }

    const newIntervalId = setInterval(async () => {
      console.log('go')
      if(Fit){
        track()
      }
      const varT = await GetLocation()

      getAltitude(varT.coords.latitude , varT.coords.longitude)
    }, 5000);
    setIntervalId(newIntervalId);




  }

async function track (){


   

}



  async  function GoolgeTrackData(){
    GoogleFit.checkIsAuthorized().then(() => {
      var authorized = GoogleFit.isAuthorized;
     // console.log(authorized);
      if (authorized) {
          return 1
      } else {
     
        GoogleFit.authorize(options)
          .then(authResult => {
            if (authResult.success) {
              setGoogleFit(true)
          
 
            
            } else {
             return 0
            }
          })
          .catch(() => {
             return 0
          });
      }
})



  }









  async function GetCurrentLocation(){
    const dataT = await GetLocation()
    console.log(dataT.coords.latitude)
    console.log(dataT.coords.longitude)
   
     setLat(dataT.coords.latitude)
    setLong(dataT.coords.longitude)
          
    }
  React.useEffect(()=>{
    GetCurrentLocation()
     GoolgeTrackData()

 
  },[])




async function  getAltitude(latitude , longitude) {
//  console.log(latitude , longitude)
     axios(config(latitude , longitude))
     .then(function (response) {

      
   //   console.log(response.data.results[0].elevation)
       setAltitude(response.data.results[0].elevation.toFixed(2))   
     
     })
     .catch(function (error) {
         console.log(error)
     });
}
























    var  MapStyle = style


    if(!lat){
      return null 
    }
    else {

      return (
        <View style={styles.container}>
     
        <MapView
       
     
        //  onUserLocationChange={(event) => event.followUserLocation }
          showsCompass={true}
          scrollEnabled={true}
       
          pitchEnabled={true}
          rotateEnabled={true}
        mapPadding={{
          top: 0,
          right: 0,
          left: 0
         }}
      initialRegion={{
      latitude:  lat,
      longitude: long,
      latitudeDelta: 0.015*5,
      longitudeDelta: 0.0121*5,
    }}
        
        customMapStyle={MapStyle}
        style={styles.map} >
    
          
    
    <Marker
       coordinate={{ latitude: lat, longitude: long }}
						pinColor="black"
            draggable={true}
            onDragEnd={(e) => {
							setLat(e.nativeEvent.coordinate.latitude)
							setLong(e.nativeEvent.coordinate.longitude)
						}}
					>
			<MarkerSvg/>
					</Marker>   
        </MapView>
   
            
        <View style={{flexDirection:'row' , justifyContent:'space-around' ,alignContent:'center' , marginTop : 15 }}> 
         
        
        <View style={styles.rectangle486}>
          
        <View style={{flexDirection :'row' ,paddingTop : 40 , justifyContent : 'space-around' }}>
       <View style={{width : '100%' , alignItems :'center' }}>
        
       {isStopwatchStart ?    <Lottie style={{right : '30%'}} source={require('../assets/animations/1.json')} autoPlay={true} />
       : <Lottie style={{right : '30%'}} source={require('../assets/animations/2.json')} autoPlay={false} />
      }
        
      
       <Text style={styles.recording}>Tap to record</Text>
       </View>
     
              </View>
              
              <Text style={styles.layer00}><Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            //To start
            reset={resetStopwatch}
            //To reset
            options={options}
            //options for the styling
        
          /></Text>
         


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
<Text  style={styles.kcal} >{parseFloat(steps).toFixed(2) == 'NaN' ?  '--' : parseFloat(steps).toFixed(2)}km</Text>
</View>

</View>

<View style={{flexDirection :'row' , justifyContent : 'space-around' , top : '25%'}}>
<View  style={styles.rectangle483}>
<View style={{flexDirection:'row' , justifyContent:'space-between' }}>
<Icon2 name='mountain' style={{ color : '#e8500e' , fontSize: 20 , marginRight : 14  }} />
<Text style={styles.calories}>ALTITUDE</Text>
</View>
<Text  style={styles.kcal} >{altitude}m</Text>
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
{  ListVisible &&<TouchableOpacity style={{top : '2%' , left : '50%' }}  onPress={() => {   setIsStopwatchStart(!isStopwatchStart) ,setResetStopwatch(true) , setListVisible(!ListVisible) ,  handleClick()  }}>
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

{ !ListVisible && <TouchableOpacity  onPress={() => {   setIsStopwatchStart(!isStopwatchStart) ,  setResetStopwatch(false), setListVisible(!ListVisible) ,  handleClick()  }}>
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
    }


{ ListVisible && <TouchableOpacity onPress={() => {   setIsStopwatchStart(!isStopwatchStart) ,  setResetStopwatch(false), setListVisible(!ListVisible) ,  handleClick()  }}>
  <View style={{ width: 90,height: 90, shadowColor: 'rgba(0, 0, 0, 0.25)', shadowOffset: { width: 12, height: 0 }, shadowRadius: 32, borderRadius :45, backgroundColor: 'white',  justifyContent:'center' ,alignItems:'center'}}>
  <Icon2 name='pause' style={{ color : '#e8500e' , fontSize: 25   }} />
  </View>
</TouchableOpacity>
    }



{ListVisible &&<TouchableOpacity style={{top : '2%' , right : '50%'}} onPress={() => {   setIsStopwatchStart(!isStopwatchStart) ,setResetStopwatch(true) , setListVisible(!ListVisible) ,  handleClick()  , saveUserActivities(uid)}}>
  <View style={{ elevation : 30, width: 70,height: 70, shadowColor: 'rgba(0, 0, 0, 0.25)', shadowOffset: { width: 12, height: 0 }, shadowRadius: 32, borderRadius :45, backgroundColor: 'white',  justifyContent:'center' ,alignItems:'center'}}>
  <Icon2 name='check' style={{ color : '#e8500e' , fontSize: 25   }} />
  </View>
</TouchableOpacity>
}

{!ListVisible &&<TouchableOpacity style={{top : '2%' , right : '50%'}} onPress={() => navigation.navigate('listA')}>
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


  const options = {
    
    text: {
        color: '#666666',
        fontSize: 28,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign:'center',
    },
  };