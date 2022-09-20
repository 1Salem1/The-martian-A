import auth from '@react-native-firebase/auth';
import { saveUserData } from './crud';
import { IMAGE_URL_DEFAULT_PROFILE } from './CONSTANTS';
export async function SignUP(email , password ,  fname , lname){
  auth()
  .createUserWithEmailAndPassword(email,password  )
  .then((sucess) => {
    
    console.log('User account created & signed in!');
    saveUserData(fname , lname , email ,IMAGE_URL_DEFAULT_PROFILE , sucess.user.uid )
    
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}

export async function SignOUT (){
  
auth()
.signOut()
.then(() => console.log('User signed out!'));
}



export async function SignIN(email , password){
  auth()
  .signInWithEmailAndPassword(email,password)
  .then((sucess) => {
    console.log('User account created & signed in!');
    return sucess
  })
  .catch(error => {

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}