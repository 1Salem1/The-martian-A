import React, { useContext } from 'react';
import { View, Text, SafeAreaView, Keyboard, Alert, ImageBackground, TouchableOpacity, KeyboardAvoidingView, InputAccessoryView  , StyleSheet} from 'react-native';
import { COLORS } from '../../styles/Style'
import Button from './Button';
import Input from '../global/Input';
import { SignOUT } from '../../utils/auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthContext } from '../../utils/auth-context';
export const image = require('../../assets/background/signin.png');
import style from '../../styles/Style';
import auth from '@react-native-firebase/auth';
import { UpdateProfile } from '../../utils/crud';
import { getAuth, updateEmail } from "firebase/auth";
import PopUpQuit from '../global/PopUpQuit';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const SignInScreen = ({ShowP , visible , handleClose , handleSignOut}) => {
  const Auth = useContext(AuthContext)
  const [inputs, setInputs] = React.useState({ email: Auth.getData().email, fname: capitalizeFirstLetter(Auth.getData().fname), lname: capitalizeFirstLetter(Auth.getData().lname) });
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
    updateProfile()

  };


  const updateProfile = async () => {

    const id = auth().currentUser.uid

    UpdateProfile(inputs.fname, inputs.lname, id)
    Auth.setFname(inputs.fname)
    Auth.setLname(inputs.lname)



  }







  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
      <Text style={{left : 20 , marginTop: 20, color: '#000000', fontFamily: 'MuseoSans_700', fontSize: 18, fontWeight: '400', fontStyle: 'normal', textAlign: 'left', lineHeight: 36,}}>Account</Text>


        <View style={styles.container}>


          <View style={{ marginVertical: 20 , flexDirection :'column' , width : '80%' }}>
            <Input
              onChangeText={text => handleOnchange(text, 'fname')}
              onFocus={() => handleError(null, 'email')}
              iconName="account"
              label="First Name"
              value={inputs.fname}
              error={errors.fname}
            />
            <Input
              onChangeText={text => handleOnchange(text, 'lname')}
              onFocus={() => handleError(null, 'email')}
              iconName="account"
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
        

            </View>
            <TouchableOpacity>

            </TouchableOpacity>
          </View>
        </View>



        <View style={{ flexDirection: 'row', justifyContent: 'space-around', bottom: 20 }}>
               {/*  <Button title="Sign Out" iconName='door' color='black' onPress={ShowP} /> */}
               <TouchableOpacity style={{justifyContent :'center' , alignItems :'center' , flexDirection :'row' }}>
                
                <Icon name='sign-out-alt' color='black' size={15}/>
                <View style={{width :'10%'}}></View>
                <Text style={styles.signOut}>Sign Out</Text></TouchableOpacity>
                <Button title="Save Profile" color='#e8500e' onPress={validate} />
              </View>


      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default SignInScreen


const styles = StyleSheet.create({
  
  container : {
     width: 375,
    height: 282,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 12, height: 0 },
    shadowOpacity:  0.4,
    shadowRadius: 32,
    elevation: 3,
    backgroundColor: 'white',
    alignItems :'center',
    marginBottom : "5%",
    alignSelf :'center'
  } ,
  signOut: {
    width: 58,
    height: 21,
    color: '#666666',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    letterSpacing: -0.14,
    lineHeight: 20,
  },

})