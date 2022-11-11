import { View, Text  , StyleSheet , ImageBackground} from 'react-native'
import React from 'react'
import Style from '../styles/Style'
import Button from '../components/global/Button';
import Button2 from '../components/Expedition/Button';
export const image = require('../assets/background/signin.png');
import PopUp from '../components/global/PopUpInternet'

const LostScreen = () => {
  return (
    <View style={styles.container}>
        <PopUp visible={true}/>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{height : '20%'}}></View>
     <View>
      
     </View>
     <View style={{height : '7%'}}></View>
     <View style={{flex : 1 , alignItems:'center'  }}>
     
      <View style={{height : '10%'}}></View>
    
     </View>
    </ImageBackground>
  </View>
  )
}

export default LostScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor :'white'
    },
    image: {
      flex: 1,
    },
    text: {
      color: "black",
      fontSize: 35,
      lineHeight: 40,
      fontFamily : 'Esoris',
      textAlign: "center",
      paddingHorizontal:20
      
    }
  });