import React from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert, ImageBackground , TouchableOpacity, ScrollView} from 'react-native';
import { COLORS } from '../styles/Style';
import Button from '../components/global/Button';
import Input from '../components/global/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/global/Loader';
import { GoogleSocialButton , FacebookSocialButton } from "react-native-social-buttons";
import { onGoogleButtonPress } from '../utils/GoogleLogin';
import {SignUP} from '../utils/auth'
import { saveUserData } from '../utils/crud';
import auth from '@react-native-firebase/auth';
import {IMAGE_URL_DEFAULT_PROFIL, IMAGE_URL_DEFAULT_PROFILE} from '../utils/CONSTANTS'
import TopBar from '../components/global/TopBarLogin';
import { AntDesign } from '@expo/vector-icons'; 
import { getDatabase, ref, onValue, set  , get , child , update} from 'firebase/database';
import app from '../utils/config';

export const image = require('../assets/background/signin.png');



const SignUpScreen = ({navigation}) => {
  const [inputs, setInputs] = React.useState({email: '', password: '' , fname : '' , lname : ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

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
    if (!inputs.fname) {
      handleError('First Name is a required field', 'fname');
      isValid = false;
    }
    if (!inputs.lname) {
      handleError('Last Name is a required field', 'lname');
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
      auth()
      .createUserWithEmailAndPassword(inputs.email,inputs.password  )
      .then((sucess) => {
        
        console.log('User account created & signed in!');


        const db = getDatabase();
        const reference = ref(db, 'users/' + sucess.user.uid);
        set(reference, {
                email: inputs.email,
                image: IMAGE_URL_DEFAULT_PROFILE,
                uuid: sucess.user.uid,
                first_name : inputs.fname,
                last_name : inputs.lname ,
    
        }).then(()=> {
          console.log('ok')
        })



      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
           return error.code
        }
    
        if (error.code === 'auth/invalid-email') {
          return error.code
        }
    
        console.error(error);
      });
      
      
    
 
 
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1 }}>
      
      <ImageBackground source={image} resizeMode="cover" style={{flex : 1 , position : 'absolute' , bottom : 0 , top : 0 , left : 0 , right : 0  }}>
      
    <ScrollView style={{height : '100%'}}>
    <View style={{flex : 1 ,paddingHorizontal : 30 , paddingVertical  : 30 }}>
      
      <View style={{flexDirection:'row' , alignContent:'space-around'  }}>
      <TouchableOpacity   onPress={() => navigation.navigate('EnjoyYourExpedition')} >
      <AntDesign name="left" size={30} color="black"   />
      </TouchableOpacity>
         <View style={{width:'75%'}}></View>
      <TouchableOpacity   onPress={() => navigation.navigate('signIN')} >
      <Text style={{fontWeight:'bold'  , color : 'black' , fontFamily : 'MuseoSans_900' , fontSize : 15}}>
        Sign In
      </Text>
      </TouchableOpacity>
      </View>
    
  </View>


    <Loader visible={loading} />
    
    <View style={{ paddingHorizontal: 20 , justifyContent : 'center' }}>
      
      <Text style={  {   marginVertical : 20,color: COLORS.black, fontSize: 40 , textAlign:'center' , fontFamily:'Esoris'  }}>
        SIGN UP
      </Text>

      <GoogleSocialButton   textStyle={{color : 'white'}}  onPress={() => {onGoogleButtonPress()}}   buttonViewStyle={{  backgroundColor: '#4285f4', top : 30, height: 55,width: '100%', }}/>

    <Text style={{marginTop :40, marginBottom : 20, color: '#7d7d7d', fontFamily: 'MuseoSans_700', fontSize: 14, fontWeight: '400',fontStyle: 'normal',textAlign: 'center',lineHeight: 31.7,}}>Or with Email</Text>
      <Input
          onChangeText={text => handleOnchange(text, 'fname')}
          onFocus={() => handleError(null, 'email')}
       
          label="First Name"
          placeholder="First Name *"
          
          error={errors.fname}
        />
              <Input
          onChangeText={text => handleOnchange(text, 'lname')}
          onFocus={() => handleError(null, 'lname')}
    
          label="Last Name"
          placeholder="Last Name *"
          error={errors.lname}
        />
        
        <Input
          onChangeText={text => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}

          label="Email"
          placeholder="Email *"
          error={errors.email}
        />
        <Input
          onChangeText={text => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
     
          label="Password"
          placeholder="Password * "
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
            color : 'white',
            fontSize: 16,
          }}>
       By Signing Up, you agree to{'\n'} 
our Privacy Policy
        </Text>
  <View style={{height : 40}}></View>
    </View>
    </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

export default SignUpScreen