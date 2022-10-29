import { getDatabase, ref, onValue, set  , get , child , update} from 'firebase/database';
import app from './config';

export  function getUserActivities(uid) {
  
  
  const db = getDatabase(app);
    const reference = ref(db, 'activities/' + uid);
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
        return data
    });
  }



export function saveUserPushNotification(body , title, id) {

    const dbRef = ref(getDatabase(app));
    get(child(dbRef, `notifications/${id}`)).then((snapshot) => {
        if (!snapshot.exists()) {


            const dbRef = ref(getDatabase(app));
            const db = getDatabase();
          const reference = ref(db, 'notifications/' + id);
          set(reference, {
                title : body ,
                body :  title
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
