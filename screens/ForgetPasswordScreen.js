import React from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert, ImageBackground, TouchableOpacity} from 'react-native';
import { COLORS } from '../styles/Style';
import Button from '../components/global/Button';
import Input from '../components/global/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/global/Loader';
import style from '../styles/Style';
import { SignIN , ResetPassword } from '../utils/auth';
import { GoogleSocialButton } from "react-native-social-buttons";
import { onGoogleButtonPress } from '../utils/GoogleLogin';
import { saveUserData } from '../utils/crud';
import PopUpForgetPassword from '../components/global/PopUpForgetPassword';
import { createRef } from 'react';
export const image = require('../assets/background/signin.png');


const ForgetPasswordScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);


  let popup = createRef()

  const validate = async () => {
    var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email.match(pattern)) {
      handleError('Please input a valide email', 'email');
      isValid = false;
    }

    if (isValid) {
      login();
    }
  };



  const closePop = async () => {
 
    setLoading(false)

  }

  const login = async () => {
  


      const resultat = await ResetPassword(inputs.email)
      console.log(resultat)
     setLoading(true)
   
      

  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      
      <ImageBackground source={image} resizeMode="cover" style={{flex : 1 , }}>
      <View style={{height : '20%'}}></View>
     <PopUpForgetPassword handleClick={closePop} visible={loading} />
      <View style={{ paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 30 , textAlign:'center' , fontFamily:'Esoris'  }}>
        Reset Password
        </Text>
        <View style={{height : '20%'}}></View>
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />
          
          <Button title="Send a reset link" onPress={validate} />
     

        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default ForgetPasswordScreen