
import { getDatabase, ref, onValue, set  , get , child , update} from 'firebase/database';
import app from './config';
import storage from '@react-native-firebase/storage';


export async function upDateUserImg(photo ,data ) {
    const db = getDatabase(app);
      const reference = ref(db, 'users/' + data);
      update(reference, {
              image: photo,
      }).then((e)=>{
        console.log(e)
      });
    
  }


  export const uploadImage = async (uri, name, firebasePath) => {
    const imageRef = storage().ref(`${firebasePath}/${name}`)
    await imageRef.putFile(uri, { contentType: 'image/jpg'}).catch((error) => { throw error })
    const url = await imageRef.getDownloadURL().catch((error) => { throw error });
    return url
  }

  