import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View , ImageBackground , TouchableOpacity} from 'react-native'
import ButtonSwiper from '../components/global/ButtonSwiper'
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';

export const image = require('../assets/background/screen-1.jpg');
export const image1 = require('../assets/background/screen-2.jpg');
export const image2 = require('../assets/background/screen-3.jpg');



import Swiper from 'react-native-swiper'

 
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding : 20
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
  ,
  title: {
    color: '#000000',
    fontFamily: 'Esoris',
    fontSize: 35,
    fontWeight: '400',
    fontStyle: 'normal',
    color  : "white",
    lineHeight: 36,
    top : '16%',
    textAlign : 'center'
  },
  titlecolored : {
    color : '#FFA183'
  }
})
 
export default function SwiperComponent() {

  const navigation = useNavigation()
  const swiper = useRef(null)

   
    return (
      <Swiper 
      
      ref={swiper}
      style={styles.wrapper} 
      showsPagination={false}
      >
        <ImageBackground source={image} resizeMode="cover" style={styles.slide1}>
        <Text style={styles.title}><Text style={styles.titlecolored}>LET'S START{'\n'}YOUR</Text>{'\n'}EXPEDITION</Text>
        <View style={{height : 400}}></View>
<TouchableOpacity onPress={() => swiper.current.scrollBy(1)} style={{top  : 40 }}>
<ButtonSwiper/>
</TouchableOpacity>
     
          </ImageBackground>
   
            <ImageBackground source={image1} resizeMode="cover" style={styles.slide1}>
            <Text style={styles.title}><Text style={styles.titlecolored}>EXPLORE{'\n'}</Text>MARS <Text style={styles.titlecolored}>WITH US</Text></Text>
            <View style={{height : 400}}></View>
<TouchableOpacity onPress={() => swiper.current.scrollBy(1)} style={{top  : 40 }}>
<ButtonSwiper/>
</TouchableOpacity>
          </ImageBackground>

          <ImageBackground source={image2} resizeMode="cover" style={styles.slide1}>
          <Text style={styles.title}><Text style={styles.titlecolored}>AND</Text> SKI{'\n'}Differently</Text>
          <View style={{height : 400}}></View>
<TouchableOpacity onPress={() => navigation.navigate('EnjoyYourExpedition')} style={{top  : 40 }}>
<ButtonSwiper/>
</TouchableOpacity>
          </ImageBackground>
      </Swiper>
    )
  
}
 




