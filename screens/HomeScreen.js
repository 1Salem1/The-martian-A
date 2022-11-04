import { View, Text , StyleSheet  , TouchableOpacity , ImageBackground , ActivityIndicator, ScrollView} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Button from '../components/global/Button'
import { getDatabase, ref, onValue, set  , get , child , update} from 'firebase/database';
import auth from '@react-native-firebase/auth';
import {SignOUT} from '../utils/auth'
import { AuthContext } from '../utils/auth-context';
import {getUserData} from '../utils/crud'
import app from '../utils/config';
import { Avatar} from 'react-native-paper';
import ContentLoader from "react-native-easy-content-loader";
import SearchBar from '../components/global/SearchBar';
import Icon3 from 'react-native-vector-icons/FontAwesome'
import List from '../components/global/List';
import { capitalizeFirstLetter } from '../utils/forStrings';
import Loader from '../components/global/Loader'
const HomeScreen = ({navigation}) => {

  const [image , setImage] = React.useState()
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();
  const [FirstName, setFname] = useState("");
  const [LastName, setLname] = useState("");
  const [loader , setLoader] = useState(true)

  const AuthCtx = useContext(AuthContext)


   function getUserData(uid) {





    const db = getDatabase(app);
      const reference = ref(db, 'users/' + uid);
      onValue(reference, (snapshot) => {
        const data = snapshot.val();
        console.log(data)
         AuthCtx.setEmail(data.email)
         AuthCtx.setFname(data.first_name)
         AuthCtx.setLname(data.last_name)
         AuthCtx.setImage(data.image)
         setImage(data.image)
         setFname(data.first_name)
         setLname(data.last_name)
         setLoader(false)
      });
    } 


  const  getData = async  () => {
  const d =  auth().currentUser.uid
 getUserData(d)
  const apiResponse = await fetch(
  "https://ogso-mountain-essentials.com/app/json/questions.json"
);
const data = await apiResponse.json();
setFakeData(data); 
  


 }





useEffect(()=>{
 getData()

},[])


  return (
    <View style={style.container}>
      <Loader visible={loader}/>
    {/*   <Text style={{color : 'black'}}>{AuthCtx.getData().email}</Text>
      <Button title='Sign out' onPress={SignOUT} />
      <Button title='profile' onPress={()=>navigation.navigate('profile')} />
      <Button title='Weather' onPress={()=>navigation.navigate('weather')} />
      <Button title='pdf' onPress={()=>navigation.navigate('pdf')} />
      <Button title='Recording' onPress={()=>navigation.navigate('record')} /> */}

<View >

{loader ?  <ContentLoader active={!loader} avatar pRows={1} reverse={true} containerStyles={{marginBottom : 10}}>

</ContentLoader> : <View style={{flexDirection :'row' , justifyContent : 'space-between'}}>
<View >
<Text style={style.hiFoulen}><Text style={{ color : 'black' , fontWeight : '600'}}>Hi</Text> {capitalizeFirstLetter(FirstName)} {capitalizeFirstLetter(LastName)}</Text>
<Text style={style.letS}>Let’s go for a new Adventure</Text>
</View>
<TouchableOpacity onPress={()=>navigation.navigate('profile')}  >
<Avatar.Image 
            style={{bottom : 10}}
            source={{
              uri: AuthCtx.getData().image,
            }}
            size={50}
          />
</TouchableOpacity>

</View>}

<SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
          />
          {searchPhrase == '' ? (
               <></>
          ) : (
           

<List          
              searchPhrase={searchPhrase}
              data={fakeData}
              setClicked={setClicked}
            />


               
           
             
          )}



<View style={{alignSelf : 'center'}}>

<TouchableOpacity style={style.bgCopy} onPress={()=>navigation.navigate('weather')}>
<ImageBackground source={require('../assets/background/bg_home_1.png')} resizeMode="cover" style={styles.image}>
<Text style={style.skiOn}>
Ski{"\n"} 
On Mars{"\n"}
Tracker
</Text>
</ImageBackground>

</TouchableOpacity>
<TouchableOpacity      onPress={()=>navigation.navigate('selector')}  style={style.bgCopy}>
<ImageBackground source={require('../assets/background/bg_home_2.png')} resizeMode="cover" style={styles.image}>
<Text style={style.skiOn}>
Smart{"\n"} 
Product{"\n"}
Selector
</Text>
</ImageBackground>

</TouchableOpacity>
<TouchableOpacity style={style.bgCopy}   onPress={()=>navigation.navigate('pdf')}  >
<ImageBackground source={require('../assets/background/bg_home_3.png')} resizeMode="cover" style={styles.image}>
<Text style={style.skiOn}>
Product{"\n"} 
Catalog{"\n"}
</Text>
</ImageBackground>

</TouchableOpacity>

</View>

</View>





<View style={{height : 60}}></View>
    </View>
  )
}

export default HomeScreen

const style = StyleSheet.create({
  container : {
    flex : 1,
    paddingHorizontal : 20 ,
    paddingVertical : 30,
    alignItems :'center',
    backgroundColor :'white'
  },
  letS: {
    color: '#666666',
    fontFamily: 'MuseoSans_300',
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 26,
    bottom : 5,
  },
  hiFoulen: {
    color: '#eb5c26',
    fontFamily: 'MuseoSans_700',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bgCopy: {
    width: 354,
    height: 160,
    marginVertical : 17,
  },
  skiOn: {
    color: '#ffffff',
    fontFamily: 'Esoris',
    fontSize: 28,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 28,
    paddingLeft : 20,
  },

})