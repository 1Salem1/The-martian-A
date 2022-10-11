
import { saveUserData } from './crud';
import { IMAGE_URL_DEFAULT_PROFILE } from './CONSTANTS';
import auth from '@react-native-firebase/auth';
export async function SignUP(email , password ,  fname , lname){
  auth()
  .createUserWithEmailAndPassword(email,password  )
  .then((sucess) => {
    
    console.log('User account created & signed in!');
    saveUserData(fname , lname , email ,IMAGE_URL_DEFAULT_PROFILE , sucess.user.uid )
    return 1 ; 
    
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
    return 1
  })
  .catch(error => {
       console.log('error')
    return 0
  });


}










export async function ResetPassword(email){
  auth()
   .sendPasswordResetEmail(email)
  .then((sucess) => {
    return sucess
  })
  .catch(error => {

    return null

  });
}