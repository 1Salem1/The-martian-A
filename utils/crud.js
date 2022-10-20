import { getDatabase, ref, onValue, set  , get , child , update} from 'firebase/database';
import app from './config';

export  function getUserData(uid) {
  
  
  const db = getDatabase(app);
    const reference = ref(db, 'users/' + uid);
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
        return data
    });
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
    const reference = ref(db, 'users/' + data);
    update(reference, {
            image: photo,
    }).then((e)=>{
      console.log(e)
    });
  
}






export async function UpdateProfile( fname , lname , id ) {
  const db = getDatabase();
    const reference = ref(db, 'users/' + id);
    update(reference, {
      first_name : fname,
      last_name : lname ,
    }).then((e)=>{
      console.log(e)
    });
  
}







export function saveUserNotification(uid , title , body) {

  const dbRef = ref(getDatabase(app));
      const db = getDatabase();
    const reference = ref(db, 'notification/' + uid / Date.now());
    set(reference, {
      title : title ,
      body : body 

    });

  


   

}

