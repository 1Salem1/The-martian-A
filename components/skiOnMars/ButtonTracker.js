import { View, Text } from 'react-native'
import React from 'react'
import Button from '../profile/Button'
import { useNavigation } from '@react-navigation/native'
const ButtonTracker = () => {

const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}  >
     <Button title='Recording' onPress={()=>navigation.navigate('record')} />
    </View>
  )
}

export default ButtonTracker