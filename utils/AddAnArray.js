
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function SavePushNotification(title , body , image = null ){
 

    myArray = []

    console.log(title)
    console.log(body)
    console.log(image)


    try {
        const data = await AsyncStorage.getItem('pushnotification_list');
        if (data == null) {
          myArray.push({
            title : title , 
            body : body ,
            image : image 
          })

          await AsyncStorage.setItem('pushnotification_list', JSON.stringify(myArray));  
            
        }
        else {

           const new_data =   await JSON.parse(data) 
           new_data.push(
            {
                title : title , 
                body : body ,
                image : image 
            }
           )
           await AsyncStorage.setItem('pushnotification_list', JSON.stringify(new_data));  

        }
    }

      catch (error){
        console.log(error)

 }
}




async  function getData (){

    
    try {
        const myArray = await AsyncStorage.getItem('@MySuperStore:key');
        if (myArray !== null) {
          // We have data!!
          console.log(JSON.parse(myArray));
        }
      } catch (error) {
        // Error retrieving data
      }
    


}