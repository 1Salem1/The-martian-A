import React, { useState } from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Navigation from '../../navigation/Navigation';
import { COLORS } from '../../styles/Style';
import { SignOUT } from '../../utils/auth';
const PopUpQuit = ({handleClose , handleSignOut ,visible = false}) => {
  const {width, height} = useWindowDimensions();



  return (
    (visible && 
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
         
         <View style={{flex : 1 , justifyContent : 'center' , alignItems :'center'   }}>
         <Text style={style.howOn}>How On Earth..</Text>
            <Text style={{  bottom : 10 , color: '#666666',fontFamily: 'Roboto - Regular',fontSize: 14, fontWeight: '400', fontStyle: 'normal', textAlign: 'center',}}>
          Are you sure you want to sign out ?
            </Text>
     <View style={{flexDirection: 'row' , justifyContent : 'space-between'}}>
     <TouchableOpacity onPress={handleClose}  style={style.rectangle174}>
                <Text style={style.ok} >Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={SignOUT}  style={style.rectangle175}>
                <Text style={style.sure} >Sure</Text>
            </TouchableOpacity>

     </View>
         </View>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
  loader: {
   
    width: 335,
    height: 188,
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
    width: 100,
    height: 41,
    borderRadius: 5,
    backgroundColor: '#eb5c26',
    justifyContent : 'center',
    alignItems : 'center',
    margin : 20
  },
  ok: {
  
    color: '#ffffff',
    fontFamily: 'Roboto - Bold',
    fontSize: 14,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'left',
  
  },
  howOn: {
    color: '#000000',
    fontFamily: 'Esoris',
    fontSize: 30,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
    padding : 20,
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
    margin : 20,
    borderRadius: 5, 
    borderColor: '#cccccc',
    borderStyle: 'solid', 
    borderWidth: 1, 
    backgroundColor: '#ffffff',

  },
});

export default PopUpQuit