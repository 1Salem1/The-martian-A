import React from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert, ImageBackground} from 'react-native';
import { COLORS } from '../styles/Style';
import Button from '../components/global/Button';
import Input from '../components/global/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/global/Loader';
import {SignUP} from '../utils/auth'
import { saveUserData } from '../utils/crud';
import auth from '@react-native-firebase/auth';
import {IMAGE_URL_DEFAULT_PROFIL, IMAGE_URL_DEFAULT_PROFILE} from '../utils/CONSTANTS'
export const image = require('../assets/background/signin.png');


const SignUpScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({email: '', password: '' , fname : '' , lname : ''});
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
    if (!inputs.fname) {
      handleError('Please input First Name', 'fname');
      isValid = false;
    }
    if (!inputs.lname) {
      handleError('Please input First Name', 'lname');
      isValid = false;
    }
    if (isValid) {
    login()
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      const resultat = await SignUP(inputs.email , inputs.password ,inputs.fname ,inputs.lname )
      
      
    
 
 
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
          SIGN UP
        </Text>

        <View style={{marginVertical: 20}}>
        <Input
            onChangeText={text => handleOnchange(text, 'fname')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="First Name"
            placeholder="Enter your First Name "
            error={errors.fname}
          />
                <Input
            onChangeText={text => handleOnchange(text, 'lname')}
            onFocus={() => handleError(null, 'lname')}
            iconName="email-outline"
            label="Last Name"
            placeholder="Enter your Last Name "
            error={errors.lname}
          />
          
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
          <Text
            onPress={() => navigation.navigate('signIN')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
           Already have an Account?
          </Text>
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default SignUpScreen