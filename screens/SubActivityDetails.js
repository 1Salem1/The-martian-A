import { View, Text , StyleSheet , TouchableOpacity, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Foundation'
import {Avatar } from 'react-native-paper';
import React from 'react'

export default function ActivityDetails({navigation}) {
  return (
    <View style={styles.container}>

        <ScrollView>

    
     
   

   

<View style={{flexDirection:'row' , justifyContent:'space-around' , marginTop : 20}}>
<View  style={styles.rectangle483}>
<View style={{flexDirection:'row' , justifyContent:'space-between' }}>
<Icon2 name='fire' style={{ color : 'white' , fontSize: 20 , marginRight : 8  }} />
<Text style={styles.calories}>CALORIES</Text>
</View>
<Text  style={styles.kcal} >456<Text style={{fontSize : 14 , bottom : 300}}>kcal</Text></Text>
</View>
<View  style={styles.rectangle484}>
<View style={{flexDirection:'row' , justifyContent:'space-between' }}>
<Icon3 name='mountains' style={{ color : 'white' , fontSize: 20 , marginRight : 8  }} />
<Text style={styles.calories}>SLOPE</Text>
</View>
<Text style={styles.kcal}>29°</Text>
</View>

</View>


<View >
<View style={styles.rectangle490}>
<View style={{flexDirection:'row' , padding : 15}}>
<Icon name='timer' style={{ color : '#e8500e' , fontSize: 25 , marginRight : 8   }} />
<View>
    <Text  style={styles.distance}>TIME</Text>
    <Text  style={styles.layer01}>01:45:43</Text>
</View>

</View>
<View style={{flexDirection:'row' , justifyContent:'space-around' , bottom : 10 , width : '100%'}}>
<View>
<View style={{marginLeft : 30}}>
    <Text style={[styles.ski, {}]}>SKI</Text>
    <Text style={styles.layer00} >00:25:08</Text>
</View>
</View>

<View>
    <Text style={styles.ski}>ASCENT</Text>
    <Text style={styles.layer00} >00:25:08</Text>
</View>

<View>
    <Text style={styles.ski}>REST</Text>
    <Text style={styles.layer00} >00:25:08</Text>
</View>
</View>
</View>

<View style={styles.rectangle590}>
<View style={{flexDirection:'row' , padding : 15}}>
<Icon name='map' style={{ color : '#e8500e' , fontSize: 25 , marginRight : 8  }} />
<View>
    <Text  style={styles.distance}>DISTANCE</Text>
</View>

</View>
<View style={{flexDirection:'row' , justifyContent:'space-around' , bottom : 10}}>
<View style={{marginLeft : 18}} >
    <Text style={styles.ski}>UPHILL</Text>
    <Text style={styles.layer00} >1,8km</Text>
</View>

<View>
    <Text style={styles.ski}>DOWNHILL</Text>
    <Text style={styles.layer00} >1,8km</Text>
</View>

<View>
    <Text style={styles.ski}>TOTAL</Text>
    <Text style={styles.layer00} >1,8km</Text>
</View>
</View>
</View>
<View style={styles.rectangle590}>
<View style={{flexDirection:'row' , padding : 15}}>
<Icon2 name='mountain' style={{ color : '#e8500e' , fontSize: 18 , marginRight : 8  }} />
<View >
    <Text  style={styles.distance}>ALTITUDE</Text>
</View>

</View>
<View style={{flexDirection:'row' , justifyContent:'space-around' , bottom : 10}}>
<View  style={{marginLeft : 18}}>
    <Text style={styles.ski}>UPHILL</Text>
    <Text style={styles.layer00} >1,8km</Text>
</View>

<View>
    <Text style={styles.ski}>DOWNHILL</Text>
    <Text style={styles.layer00} >1,8km</Text>
</View>

<View>
    <Text style={styles.ski}>TOTAL</Text>
    <Text style={styles.layer00} >1,8km</Text>
</View>
</View>




</View>

<View style={styles.rectangle590}>
<View style={{flexDirection:'row' , padding : 15}}>
<Icon name='speed' style={{ color : '#e8500e' , fontSize: 25 , marginRight : 8  }} />
<View>
    <Text  style={styles.distance}>SPEED</Text>
</View>

</View>
<View style={{flexDirection:'row' , justifyContent:'space-around' , bottom : 10}}>
<View style={{marginLeft : 23}} >
    <Text style={styles.ski}>MIN</Text>
    <Text style={styles.layer00} >22km/h</Text>
</View>

<View>
    <Text style={styles.ski}>MAX</Text>
    <Text style={styles.layer00} >468km/h</Text>
</View>

<View>
    <Text style={styles.ski}>AVG</Text>
    <Text style={styles.layer00} >12km/h</Text>
</View>
</View>




</View>


  
</View>


</ScrollView>
    </View>
  )
}




const styles = StyleSheet.create({
   container : {
    flex : 1 ,
    backgroundColor :'white',
    
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
    width: '99%',
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
    fontFamily: 'MuseoSans_500',
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
  },
  rectangle590: {
    alignSelf:'center',
    width: '99%',
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