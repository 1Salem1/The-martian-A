import React, { useContext } from 'react';
import {View, SafeAreaView, StyleSheet , Text} from 'react-native';
import {
  Avatar,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Tab from '../components/global/Tab';
import { AuthContext } from '../utils/auth-context';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';
import PopUpQuit from '../components/global/PopUpQuit';
import { SignOUT } from '../utils/auth';
import {launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { getStorage, ref , uploadBytes } from "firebase/storage";
import { generateUUID } from '../utils/RandomGenerator';
import { firebase } from '@react-native-firebase/auth';
import { upDateUserImg } from '../utils/crud';
const ProfileScreen = ({navigation}) => {
  
  const Auth = useContext(AuthContext)
  const user_uid = firebase.auth().currentUser.uid;
  const [visible , setVisible] = React.useState(false)
  const [image , setimage] = React.useState(false)

  const [result , setResult] = React.useState()
 
  
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }


  const handleSignOut = () =>{
    SignOUT()
  }

  const handleClose = () =>{
    setVisible(false)
  }
  const ShowP = () =>{
    setVisible(true)
  }


const changeImage = async () =>{

  const x = await launchImageLibrary();
  
  console.log(x)

 if(!x.didCancel){

    const number = generateUUID(40)
    const storage = getStorage(); //the storage itself
    const url = `profile${number}.jpg`
    const _ref = ref(storage,  url); //how the image will be addressed inside the storage

    //convert image to array of bytes
    const img = await fetch(x.assets[0].uri);
    const bytes = await img.blob();

    await uploadBytes(_ref, bytes)
    Auth.setImage(`https://firebasestorage.googleapis.com/v0/b/the-martian-1080d.appspot.com/o/${url}?alt=media&token=a1837e8d-1ce3-4118-addb-3d4dd5b5e489`)  
    
    return `https://firebasestorage.googleapis.com/v0/b/the-martian-1080d.appspot.com/o/${url}?alt=media&token=a1837e8d-1ce3-4118-addb-3d4dd5b5e489`


 }
  

}

const UpadateImage = async () =>{

  const data = await  changeImage()

  if(!(typeof data === 'undefined')) {

    upDateUserImg(data , user_uid)
  }

   
  }











  return (
    <SafeAreaView style={styles.container}>
     <PopUpQuit handleClose={handleClose} handleSignOut={handleSignOut}  visible={visible}/>
      <View style={styles.userInfoSection}>
      <TouchableOpacity onPress={ ()=> navigation.goBack() }  style={{top :20, width:'10%'}} >
<Icon name='chevron-left' style={{ color : 'black' , fontSize: 50}} />
</TouchableOpacity>

    
        <View style={{flexDirection: 'row', marginTop: 20 , justifyContent:'center'}}>
  <View>

    <Avatar.Image 
            style={{backgroundColor :'#e8500e'}}
            source={{
              uri: Auth.getData().image,
            }}
            size={150}
          />
   <TouchableOpacity onPress={() => UpadateImage()}>
   <View
            size={40}
          style={{right : 10 ,bottom : 0,position : 'absolute' , width : 40 , height : 40 , backgroundColor :'#cccccc' , justifyContent : 'center' , alignItems:'center' , borderRadius : 50}}>

<Icon size={49} name='camera' style={{bottom : 0 , color : 'black' , fontSize: 20 , zIndex : 1000}} />
          </View>
   </TouchableOpacity>


          
        
        <View></View>
          </View>
          
        </View>
        
        <Text style={{textAlign :"center",color: '#000000',fontFamily: 'MuseoSans_700',fontSize: 18,fontWeight: '400',fontStyle: 'normal',textAlign: 'center', lineHeight: 36,}}>Welcome Back</Text>
        <Text style={{textAlign :"center",color: '#e8500e',fontFamily: 'MuseoSans_700',fontSize: 30,fontWeight: '400',fontStyle: 'normal',textAlign: 'center'}}>{capitalizeFirstLetter(Auth.getData().fname) +' ' + capitalizeFirstLetter(Auth.getData().lname)   }</Text>

    
      </View>

    
<Tab visible={visible} ShowP={ShowP} handleClose={handleClose} handleSignOut={handleSignOut} />
    
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :'white'
  },
  userInfoSection: {
  marginBottom:25,
   paddingHorizontal:20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});