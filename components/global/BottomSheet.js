import React, { useState } from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Navigation from '../../navigation/Navigation';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../styles/Style';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



const PopUpForgetPassword = ({image  , visible}) => {

console.log(image)


  const {width, height} = useWindowDimensions();









 




  return (
    (visible && 
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
         <View style={{   width: '100%', height: 50, backgroundColor: '#eb5c26' ,justifyContent : 'center', alignItems : 'flex-end' , }}>

          <Text  style={style.takeAnother}>Take Another picture</Text>
         </View>
         <View style={{flex : 1 , justifyContent : 'center' , alignItems :'center'}}>
         <ImageBackground style={ style.imgBackground } 
                 resizeMode='cover' 
                 uri={image}>

 

</ImageBackground>


    </View>
        </View>
        <View style={style.loader1}>
         
        <TouchableOpacity style={style.share} >
<Icon2 name='share-alt' style={{ color : '#e8500e' , fontSize: 20 , marginRight : 14  }} />
<Text style={style.shareT}>Share</Text>




</TouchableOpacity>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  takeAnother: {
    color: '#ffffff',
    fontFamily: 'MuseoSans_700',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 22,
    marginRight  :10
  },
  loader: {
   
    width: 335,
    height: 218,
    backgroundColor: COLORS.white,
      alignSelf : 'center',
    borderRadius: 5,
   

  
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    
  },
  rectangle227: {
    width: 335,
    height: 50,
    backgroundColor: '#eb5c26',
    justifyContent :'center',
    alignItems :'center'
  },
  passwordReset: {
    
    color: '#ffffff',
    fontFamily: 'MuseoSans_700',
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',

  },

  rectangle174: {
    width: 250,
    height: 51,
    borderRadius: 5,
    backgroundColor: '#eb5c26',
    justifyContent : 'center',
    alignItems : 'center',
    marginBottom : 10
  },
  ok: {
    color: '#ffffff',
    fontFamily: 'Roboto - Bold',
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'left',
  
  },
  howOn: {
    color: '#000000',
    fontFamily: 'Esoris',
    fontSize: 25,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    padding : 20,
    bottom : 5,
    marginVertical : 10
  },

  sure: {
    color: '#666666',
    fontFamily: 'MuseoSans_700',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
  },
  rectangle175: {
    width: 100,
    height: 41,
    borderRadius: 5,
    justifyContent : 'center',
    alignItems : 'center',
    margin : 10
  },
  loader1: {
    marginTop : 20,
    width: 135,
    height: 58,
    backgroundColor: "transparent",
    alignSelf : 'center',
    borderRadius: 5,
   

  
  },
  share: {
    flexDirection :'row',
    justifyContent :'center',
    alignItems :'center',
    marginTop : '10%',
    alignSelf : 'center',
    width: 100,
    height: 40,
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  shareT: {
    color: '#666666',
    fontFamily: 'MuseoSans_700',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
   
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
},
});

export default PopUpForgetPassword