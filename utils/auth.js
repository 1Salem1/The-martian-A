
import { saveUserData } from './crud';
import { IMAGE_URL_DEFAULT_PROFILE } from './CONSTANTS';
import auth from '@react-native-firebase/auth';
import { getDatabase, ref, onValue, set  , get , child , update} from 'firebase/database';
import app from './config';


export async function SignUP(email , password ,  fname , lname){
  auth()
  .createUserWithEmailAndPassword(email,password  )
  .then((sucess) => {
    console.log('User account created & signed in!');
        const db = getDatabase();
      const reference = ref(db, 'users/' + uid);
      set(reference, {
              email: email,
              image: IMAGE_URL_DEFAULT_PROFILE,
              uuid: sucess.user.uid,
              first_name : fname,
              last_name : lname ,
  
      }).then(()=>{
        return 1
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