import { View, Text  , StyleSheet , ImageBackground} from 'react-native'
import React from 'react'
import Style from '../styles/Style'
import Button from '../components/global/Button';
import Button2 from '../components/Expedition/Button';
export const image = require('../assets/background/signin.png');


const EnjoyYourExpedition = () => {
  return (
    <View style={Style.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{height : '20%'}}></View>
     <View>
      <Text style={styles.text}>LET'S ENJOY{"\n"}YOUR{"\n"}EXPEDITION!</Text>
     </View>
     <View style={{height : '7%'}}></View>
     <View style={{flex : 1 , alignItems:'center'  }}>
      <Button2 route="signUP"  title="Sign Up"/>
      <View style={{height : '10%'}}></View>
      <Button2  route="signIN"   color="black" title="Sign In" />
     </View>
    </ImageBackground>
  </View>
  )
}

export default EnjoyYourExpedition



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding : 20
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