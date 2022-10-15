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
const PopUpLogin = ({HandleVisibleError  ,visible = false}) => {
  const {width, height} = useWindowDimensions();
  const [pop , setPop] = useState(visible)



  return (
    (visible && 
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
         
         <View style={{flex : 1 , justifyContent : 'center' , alignItems :'center'}}>
         <Text style={style.howOn}>Whoops !</Text>
            <Text style={{  bottom : 10 , color: '#666666',fontFamily: 'Roboto - Regular',fontSize: 14, fontWeight: '400', fontStyle: 'normal', textAlign: 'center',}}>
            Looks like something went wrong. {'\n'}
            Would you like to try again?
            </Text>
     <View style={{flexDirection: 'row' , justifyContent : 'space-between'}}>
     <TouchableOpacity onPress={HandleVisibleError}  style={style.rectangle174}>
                <Text style={style.ok} >Retry</Text>
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
    alignItems : 'center',
    margin : 20
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
    bottom : 15
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
});

export default PopUpLogin