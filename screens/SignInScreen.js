import React from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert, ImageBackground, TouchableOpacity} from 'react-native';
import { COLORS } from '../styles/Style';
import Button from '../components/global/Button';
import Input from '../components/global/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/global/Loader';
import style from '../styles/Style';
import { SignIN } from '../utils/auth';
import { GoogleSocialButton } from "react-native-social-buttons";
import { onGoogleButtonPress } from '../utils/GoogleLogin';
import { saveUserData } from '../utils/crud';


export const image = require('../assets/background/signin.png');


const SignInScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      const resultat = await SignIN(inputs.email , inputs.password)
   
      
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Loader visible={loading} />
      <View style={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40 , textAlign:'center' , fontFamily:'Esoris'  }}>
          SIGN IN
        </Text>

        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Enter your email address"
            error={errors.email}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Enter your password"
            error={errors.password}
            password
          />
          <Button title="Sign In" onPress={validate} />
          <View>
        <GoogleSocialButton  onPress={() => {onGoogleButtonPress()}}  buttonViewStyle={{marginBottom : 30, height: 55,width: '100%',}}/>
      </View>
     <TouchableOpacity>
     <Text
            onPress={() => navigation.navigate('signUP')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Don't have account?
          </Text>
     </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default SignInScreen