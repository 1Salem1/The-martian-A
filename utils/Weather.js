import * as Location from 'expo-location';
import { API_OPEN_WEATHER } from './CONSTANTS';
import axios from 'axios';

export const GetLocation = async  () => {

    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
    
      return 'no';
    }
    else {

    try{
      let location = await Location.getCurrentPositionAsync({});
      return location
    }
    catch(e){
      return 'no'
    }

    }

}







export const getWeather= async (Location) =>{
    var Data = null

    var config = {
      method: 'get',
 
     url : `https://api.openweathermap.org/data/2.5/weather?lat=${Location.latitude}&lon=${Location.longitude}&appid=${API_OPEN_WEATHER}&units=metric`
    };
  
   const data =axios.get(config.url)
  return data
  }