import { View, Text , StyleSheet , TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Foundation'
import {Avatar } from 'react-native-paper';
import React, { useContext } from 'react'
import TabViewExample from '../components/skiOnMars/TabActivity';
import { AuthContext } from '../utils/auth-context';
import BottomSheetComponent from '../components/global/BottomSheet';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


export default function ActivityDetails({navigation , route }) {
          const [data , setData] = React.useState("")
          const [visible , setVisible] = React.useState(false)





    const data_ =  route.params?.record_data

    console.log(data_)





  const TakePhoto = async () =>{

    const result = await launchCamera();
     setData(result.assets[0].uri)
     setVisible(true)
  }




   const Auth = useContext(AuthContext)

  return (
    <View style={styles.container}>
       <View style={{flexDirection :'row' , justifyContent:'center' }}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
    <Icon name='chevron-left' style={{ color : 'black' , fontSize: 50}} />
      </TouchableOpacity>
         <View style={{width:270}}></View>
      <TouchableOpacity onPress={()=>navigation.navigate('profile')}>
      <Avatar.Image 
          source={{
            uri: Auth.getData().image,
          }}
          size={50}
        />
      </TouchableOpacity>
      
     </View>

   <View style={{flexDirection:'row' , marginTop : 10 , marginLeft:8}}>
   <Icon name='location-on' style={{ color : '#e8500e' , fontSize: 30 , }} />
<Text style={styles.lesAiguilles}>{data_.city}, <Text style={{fontWeight :'500'}}>{data_.country}</Text></Text>
   </View>

   <View style={{flexDirection :'row'  , justifyContent :'space-around'}}>
   <View style={{flexDirection:'row' , marginTop : 10}}>
   <Icon name='calendar-today' style={{ color : '#666666' , fontSize: 20 , marginRight : 4  }} />
<Text style={styles.layer17}>{data_.date}</Text>
   </View>

   <View style={{flexDirection:'row' , marginTop : 10}}>
   <Icon name='timer' style={{ color : '#666666' , fontSize: 20 , marginRight : 4  }} />
<Text  style={styles.layer17}>{data_.time_start} - {data_.time_end}</Text>
   </View>


   </View>
   <View style={{height : 10}}></View>
      <TabViewExample/>

      <TouchableOpacity style={styles.share} onPress={TakePhoto}>
<Icon2 name='share-alt' style={{ color : '#e8500e' , fontSize: 20 , marginRight : 14  }} />
<Text style={styles.shareT}>Share</Text>




</TouchableOpacity>
<BottomSheetComponent visible={visible} image={data}/>
    </View>
  )
}




const styles = StyleSheet.create({
   container : {
    flex : 1 ,
    backgroundColor :'white',
    padding : 20,
    
   },
   lesAiguilles: {
  
    color: '#000000',
    fontFamily: 'Museo Sans 500',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    textAlign: 'left',
  
    lineHeight: 36,
  },
  layer17: {
  
    color: '#707070',
    fontFamily: 'MuseoSans_300',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
  
  },
  rectangle483: {
    width: 157,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#eb5c26',
    alignItems:'center',
    justifyContent:'center'
  },
  rectangle484: {
    width: 157,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#666666',
    alignItems:'center',
    justifyContent:'center'
  },
  calories: {
    color: '#ffffff',
    fontFamily: 'MuseoSans_700',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    alignItems:'center'
 
  },
  kcal: {
    color: '#ffffff',
    fontFamily: 'MuseoSans_300',
    fontSize: 17,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',

  },
  rectangle490: {
    alignSelf:'center',
    width: 335,
    height: 150,
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    marginTop : 30,   
  },
  distance: {
    color: '#eb5c26',
    fontFamily: 'MuseoSans_700',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop:3
  
  },
  layer01: {
  
    color: '#666666',
    fontFamily: 'MuseoSans_300',
    fontSize: 26,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    marginTop :10
   
  },
  ski: {
    color: '#666666',
    fontFamily: 'MuseoSans_300',
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
  },
  layer00: {
    color: '#666666',
    fontFamily: 'MuseoSans_700',
    fontSize: 17,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
  },
  rectangle590: {
    alignSelf:'center',
    width: 335,
    height: 100,
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    marginTop : 20,   
  },
  share: {
    flexDirection :'row',
    justifyContent :'center',
    alignItems :'center',
    marginTop : '10%',
    alignSelf : 'center',
    width: 100,
    height: 40,
    borderRadius: 5,
    borderColor: '#cccccc',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#ffffff',
  },
  shareT: {
    color: '#666666',
    fontFamily: 'MuseoSans_700',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'center',
   
  },
})