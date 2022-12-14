import * as React from 'react';
import MapView  ,{Callout, Marker}from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import style from '../styles/MapStyle';
import Button from '../components/profile/Button';
import * as Location from 'expo-location';
import MarkerSvg from '../assets/IamHere';




const MapScreen = ({route , navigation}) => {
  const[long , setLong] = React.useState(1.22)
  const [lat , setLat] = React.useState(2.27)




    var  MapStyle = style

  return (
    <View style={styles.container}>
    <MapView
                onPress={(e) => {
                  setLat(e.nativeEvent.coordinate.latitude)
                  setLong(e.nativeEvent.coordinate.longitude)
                }}
initialRegion={{
  latitude: lat,
  longitude: long,
  latitudeDelta: 0.0243,
  longitudeDelta: 0.0234
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