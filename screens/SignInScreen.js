import React from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert, ImageBackground, TouchableOpacity} from 'react-native';
import { COLORS } from '../styles/Style';
import Button from '../components/global/Button';
import Input from '../components/global/Input';
import Loader from '../components/global/Loader';
import { GoogleSocialButton } from "react-native-social-buttons";
import { onGoogleButtonPress } from '../utils/GoogleLogin';
import auth from '@react-native-firebase/auth';
import PopUpForgetPassword from '../components/global/PopUpForgetPassword';
import PopUpLogin from '../components/global/PopUpLoginError';


export const image = require('../assets/background/signin.png');


const SignInScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({email: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [resultat , setResultat] = React.useState(false)


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
      auth()
      .signInWithEmailAndPassword(inputs.email,inputs.password)
      .then((sucess) => {
        setResultat(false)
      })
      .catch(error => {
          
           setResultat(true)
  
      });
    
   
   
      
    }, 3000);
  };


  const handleClose = (text, input) => {
    setResultat(false)
  };







  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
     <PopUpLogin handleClose={handleClose} visible={resultat}/>
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
            onPress={() => navigation.navigate('forget')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
           forget password ?
          </Text>
     </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default SignInScreen