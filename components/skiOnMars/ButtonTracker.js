import { View, Text, ScrollView, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import React from 'react'
import Button from '../profile/Button'
import { useNavigation } from '@react-navigation/native'
import SingleActivity from './SingleActivity'




const ButtonTracker = () => {

  

  return (
<View style={{flex: 1 }}>
    <ScrollView
    keyboardShouldPersistTaps='always'
    contentContainerStyle={{ alignItems : 'center' , paddingVertical : 30}}>
       
  


        <TouchableOpacity style={style.container} >
        <SingleActivity record={2}/>
        </TouchableOpacity>



        <TouchableOpacity style={style.container} >
        <SingleActivity/>
        </TouchableOpacity>




        <TouchableOpacity style={style.container} >
        <SingleActivity/>
        </TouchableOpacity>


         

    </ScrollView>
  </View>
  )
}

export default ButtonTracker


const style = StyleSheet.create({
  container: {
       marginVertical : 20,
  },

});
