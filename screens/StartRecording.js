import * as React from 'react';
import MapView  ,{Callout, Marker}from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import style from '../styles/MapStyle';
import Button from '../components/profile/Button';
import * as Location from 'expo-location';
import { GetLocation, getWeather } from '../utils/Weather';



const StartRecording = ({navigation}) => {
  const[long , setLong] = React.useState()
  const [lat , setLat] = React.useState()




  
  





React.useEffect(()=>{



},[])

    var  MapStyle = style

  return (
    <View style={styles.container}>
    <MapView
initialRegion={{
  latitude:  -13.09088,
  longitude: -147.54382,
  latitudeDelta: 0.0243,
  longitudeDelta: 0.0234
}}
    provider="google"
    customMapStyle={MapStyle}
    style={styles.map} >

      
					<Marker
						coordinate={{ latitude: -13.09088, longitude: -147.54382 }}
						pinColor="black"
            draggable={true}
            onDragEnd={(e) => {
							setLat(e.nativeEvent.coordinate.latitude)
							setLong(e.nativeEvent.coordinate.longitude)
						}}
					>
				
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

export default StartRecording


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