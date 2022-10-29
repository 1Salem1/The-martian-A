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



export function saveUserActivities(uid /* ,location_object , date, time_start, time_end,calories , total_distance , avg_speed , max_speed , lowest_speed , slope , max_altitude , min_altitude , country , city  */) {
 console.log("started working")
    const dbRef = ref(getDatabase(app));
        const db = getDatabase();
      const reference = ref(db, 'activities/' + uid +'/' +Date.now());
      set(reference, {
       /*      uid : uid ,
            location_object : location_object,
            date : date,
            time_start : time_start,
            time_end : time_end,
            calories : calories ,
            total_distance : total_distance ,
            avg_speed : avg_speed ,
            max_speed  : max_speed, 
            lowest_speed : lowest_speed  ,
            slope : slope , 
            max_altitude : max_altitude, 
            min_altitude  : min_altitude,
            country  : country,
            city : city */


            
            uid : "uid" ,
            location_object : {
                longitude : "19.3923923",
                latitude : '12.922837',
            },
            date : "11/11/77",
            time_start : "11.02",
            time_end : "11.12",
            calories : "471" ,
            total_distance : "44",
            total_distance_downhill : "44",
            total_distance_reset : "44",
            avg_speed : "47",
            max_speed : "77", 
            lowest_speed : "7"  ,
            slope : "47" , 
            max_altitude : "414", 
            min_altitude  : "321",
            country  :"Tunisia",
            city : "Marsa",
            time_spent_ski : "",
            time_spent_ascent : "",
            time_spent_reset : "",

  
      });
  
        
  
     
  
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

