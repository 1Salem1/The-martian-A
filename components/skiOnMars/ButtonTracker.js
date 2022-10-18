import { View, Text, ScrollView, TouchableOpacity  , StyleSheet} from 'react-native'

import React from 'react'
import Button from '../profile/Button'
import { useNavigation } from '@react-navigation/native'
import SingleActivity from './SingleActivity'




const ButtonTracker = () => {

const navigation = useNavigation()

  return (
<View style={{flex: 1 }}>
    <ScrollView contentContainerStyle={{ alignItems : 'center' , paddingVertical : 30}}>
       
        <TouchableOpacity style={style.container} >
        <SingleActivity/>
        </TouchableOpacity>


        <TouchableOpacity style={style.container} >
        <SingleActivity/>
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
       marginVertical : 20
  },

});
