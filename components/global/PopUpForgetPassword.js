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
import { useNavigation } from '@react-navigation/native';
const PopUpForgetPassword = ({handleClick ,visible = false}) => {
  const {width, height} = useWindowDimensions();
  const [pop , setPop] = useState(visible)

  const navigation = useNavigation()

  return (
    (visible && 
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
           <View style={style.rectangle227}> 
                 <Text style={style.passwordReset}>Password Reset Email Sent</Text>
           </View>
         <View style={{flex : 1 , justifyContent : 'center' , alignItems :'center'}}>
            <Text style={{   color: '#666666',fontFamily: 'Roboto - Regular',fontSize: 14, fontWeight: '400', fontStyle: 'normal', textAlign: 'center',}}>
            An email has been sent to you.{"\n"}
            Please follow the instructions in the email{"\n"}
            to reset password{"\n"}
            </Text>
            <TouchableOpacity onPress={handleClick}  style={style.rectangle174}>
                <Text style={style.ok} >OK</Text>
            </TouchableOpacity>
         </View>
        </View>
      </View>
    )
  );
};

const style = StyleSheet.create({
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
    width: 100,
    height: 41,
    borderRadius: 5,
    backgroundColor: '#eb5c26',
    justifyContent : 'center',
    alignItems : 'center'
  },
  ok: {
  
    color: '#ffffff',
    fontFamily: 'Roboto - Bold',
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    textAlign: 'left',
  
  },
});

export default PopUpForgetPassword