import { View, Text } from 'react-native'
import React from 'react'
import SingleActivity from './SingleActivity'

const ActivitiesList = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' , alignItems:'center' , padding : 40 }}  >
     <SingleActivity/>
    </View>
  )
}

export default ActivitiesList