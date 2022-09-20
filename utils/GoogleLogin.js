import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { image } from '../screens/SignInScreen';
import {saveUserData} from '../utils/crud'
import {FindById}  from '../utils/crud'

GoogleSignin.configure({
  webClientId: '119553467876-n6mhtlaul08o2e7r2ej9gk8220fc1bf8.apps.googleusercontent.com',
});


export async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
    auth().signInWithCredential(googleCredential).then(async (s)=>{
      //  console.log(s)

    
        saveUserData(s.additionalUserInfo.profile.family_name , s.additionalUserInfo.profile.given_name , s.additionalUserInfo.profile.email , s.additionalUserInfo.profile.picture , s.user.uid)

    
     
       
        return s
    });
  }