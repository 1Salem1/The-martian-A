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
import { AntDesign } from '@expo/vector-icons'; 

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
      handleError('Email is a required field \nPlease enter your email address in format:\nyourname@exemple.com', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Password is a required field', 'password');
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
      <View style={{flex : 1 ,paddingHorizontal : 30 , paddingVertical  : 30 }}>
      
      <View style={{flexDirection:'row' , alignContent:'space-around'  }}>
      <TouchableOpacity   onPress={() => navigation.navigate('EnjoyYourExpedition')} >
      <AntDesign name="left" size={30} color="black"   />
      </TouchableOpacity>
         <View style={{width:'75%'}}></View>
      <TouchableOpacity   onPress={() => navigation.navigate('signUP')} >
      <Text style={{fontWeight:'bold'  , color : 'black' , fontFamily : 'MuseoSans_900' , fontSize : 15}}>
        Sign Up
      </Text>
      
      </TouchableOpacity>
      </View>
    
  </View>
      <Loader visible={loading} />
      
      <View style={{ paddingHorizontal: 20 , justifyContent : 'center' , bottom : 130}}>
        <Text style={{ marginVertical : 20,color: COLORS.black, fontSize: 40 , textAlign:'center' , fontFamily:'Esoris'  }}>
          SIGN IN
        </Text>
        <GoogleSocialButton   textStyle={{color : 'white'}}  onPress={() => {onGoogleButtonPress()}}   buttonViewStyle={{  backgroundColor: '#4285f4', top : 30, height: 55,width: '100%', }}/>

<Text style={{marginTop :40, marginBottom : 20, color: '#7d7d7d', fontFamily: 'MuseoSans_700', fontSize: 14, fontWeight: '400',fontStyle: 'normal',textAlign: 'center',lineHeight: 31.7,}}>Or with Email</Text>
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Email *"
            error={errors.email}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Password *"
            error={errors.password}
            password
          />
          <Button title="Sign In" onPress={validate} />
          <View>
      </View>
     <TouchableOpacity>
     
     </TouchableOpacity>
        </View>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default SignInScreen