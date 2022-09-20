import { getDatabase, ref, onValue, set  , get , child , update} from 'firebase/database';
import app from './config';


export async function getUserData(uid) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${uid}`)).then((snapshot) => {
      if (snapshot.exists()) {
          return (snapshot.val())
  
      } 
    })
    
  }



export function saveUserData(lname , fname, email, image, uid) {

    const dbRef = ref(getDatabase(app));
    get(child(dbRef, `users/${uid}`)).then((snapshot) => {
      if (!snapshot.exists()) {
        const db = getDatabase();
      const reference = ref(db, 'users/' + uid);
      set(reference, {
              email: email,
              image: image,
              uuid: uid,
              first_name : fname,
              last_name : lname ,
  
      });
  
      } 
    })
  
     
  
  }





export async function upDateUserImg(photo ,data ) {
  const db = getDatabase();
    const reference = ref(db, 'users/' + data.uuid);
    update(reference, {
            image: photo,
    }).then((e)=>{
      console.log(e)
    });
  
}
















