import React, { useContext } from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert, ImageBackground, TouchableOpacity, KeyboardAvoidingView, InputAccessoryView} from 'react-native';
import { COLORS } from '../../styles/Style'
import Button from './Button';
import Input from '../global/Input';
import {SignOUT} from '../../utils/auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthContext } from '../../utils/auth-context';
export const image = require('../../assets/background/signin.png');
import style from '../../styles/Style';
import auth from '@react-native-firebase/auth';
import { UpdateProfile } from '../../utils/crud';
import { getAuth, updateEmail } from "firebase/auth";
import PopUpQuit from '../global/PopUpQuit';

const SignInScreen = ({navigation}) => {
  const Auth = useContext(AuthContext)
  const [inputs, setInputs] = React.useState({email: Auth.getData().email, fname : capitalizeFirstLetter(Auth.getData().fname) , lname : capitalizeFirstLetter(Auth.getData().lname) });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const validate = async () => {

    var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"; 
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email && !inputs.email.match(pattern)) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.fname) {
      handleError('Please input your first name correct ! ', 'email');
      isValid = false;
    }
   updateProfile( )

  };


  const updateProfile = async () =>{

    const id =  auth().currentUser.uid
 
  UpdateProfile(inputs.fname , inputs.lname , id)
  Auth.setFname(inputs.fname)
  Auth.setLname(inputs.lname)

 

  }


  
 

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <KeyboardAwareScrollView  style={{flex : 1}}>
    <SafeAreaView style={{ flex: 1}}>
    
     
      <View style={{ paddingHorizontal: 20}}>
   

        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'fname')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="First Name"
            value={inputs.fname}
            error={errors.fname}
          />
             <Input
            onChangeText={text => handleOnchange(text, 'lname')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Last Name"
            value={inputs.lname}
            error={errors.lname}
          />
           <Input
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            value={inputs.email}
            error={errors.email}
          />
         
          <View>
            <View style={{flexDirection:'row' , justifyContent:'space-around' , bottom : 20}}> 
            <Button title="Sign Out" iconName='door' color='black' onPress={SignOUT} />
            <Button title="Save Profile" color='#e8500e' onPress={validate} />
            </View>
      
      </View>
     <TouchableOpacity>

     </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default SignInScreen