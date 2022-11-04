import { View, Text , StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native'


const SingleActivity = ({data}) => {

  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.rectangle483}   onPress={()=> navigation.navigate('activityD', {
      record_data : data
    })}>
        
      <View style={{flexDirection:'row'}}>
     <Icon name='location-on' style={{marginRight:10, top : '3%',color : '#e8500e' , fontSize: 20}} />
        <Text style={styles.lesAiguilles}><Text></Text>{data.city}, <Text style={{fontWeight:'400'}}>{data.country}</Text></Text>
        <View style={{width : '50%'}}></View>
        <Icon2 name='info-circle' style={{ top : '4%',color : '#e8500e' , fontSize: 20}} />
     </View>
     <View style={{flexDirection:'row' , bottom : '5%'}}>
     <Icon2 name='calendar-alt' style={{marginRight:10, top : '3%',color : '#666666' , fontSize: 20}} />
        <Text style={styles.layer17}><Text></Text>{data.date}</Text>
    </View>
<View style={{flexDirection:'row' , justifyContent:'space-around' , bottom:'5%'}}>
<View>
    <Text style={styles.calories}>CALORIES</Text>
    <Text style={styles.kcal} >{data.calories}kcal</Text>
</View>

<View>
    <Text style={styles.calories}>DISTANCE</Text>
    <Text style={styles.kcal} >{data.total_distance}km</Text>
</View>

<View>
    <Text style={styles.calories}>AVG.SPEED</Text>
    <Text style={styles.kcal} >{data.avg_speed}km/h</Text>
</View>
</View>
    </TouchableOpacity>
  )
}

export default SingleActivity


const styles = StyleSheet.create({
    rectangle483: {
        width: 335,
        height: 120,
        borderRadius: 5,
        borderColor: '#cccccc',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal:10
      },
      lesAiguilles: {
        color: '#000000',
        fontFamily: 'MuseoSans_500',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'left',
        lineHeight: 36,
      },
      calories: {
     
        color: '#666666',
        fontFamily: 'MuseoSans_700',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
     
      },
      kcal: {
        color: '#707070',
        fontFamily: 'MuseoSans_100',
        fontSize: 12,
        fontWeight: '400',
        textAlign:'left',
        marginTop:5,
  

      },
      layer17: {
        color: '#707070',
        fontFamily: 'MuseoSans_300',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 36,
      },
})