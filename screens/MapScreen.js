import * as React from 'react';
import MapView  ,{Callout, Marker}from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import style from '../styles/MapStyle';
import Button from '../components/profile/Button';
import * as Location from 'expo-location';
import MarkerSvg from '../assets/IamHere';
import { AuthContext } from '../utils/auth-context';
import { GetLocation } from '../utils/Weather';




const MapScreen = ({route , navigation}) => {

const auth = React.useContext(AuthContext)


  const[long , setLong] = React.useState(0)
  const [lat , setLat] = React.useState(0)
  const {data}  = route?.params ;


 
React.useEffect(()=>{

LocationSettings()

},[])




async function LocationSettings (){
  const data = await GetLocation()
    setLat(data.coords.latitude)
    setLong(data.coords.longitude)
}

    var  MapStyle = style

if(lat){

  return (
    <View style={styles.container}>
    <MapView
                onPress={(e) => {
                  setLat(e.nativeEvent.coordinate.latitude)
                  setLong(e.nativeEvent.coordinate.longitude)
                }}
initialRegion={{
  latitude:  lat,
  longitude: long,
  latitudeDelta: 0.003,
  longitudeDelta: 0.003
}}
    provider="google"
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
     
    <Button title="Back" iconName='keyboard-backspace' color='black'  onPress={()=> navigation.navigate('weather')} />
    
    <View style={{width : 30}}></View>
          
          <Button title="Update Location" color='#e8500e' onPress={()=> navigation.navigate('weather' ,{
            latitude : lat,
            longitude :long
          })}   />
      
        
            </View>
  </View>
  )
}

}

export default MapScreen


const styles = StyleSheet.create({
    container: {
     backgroundColor :'white',
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height*0.85,
    },
  });