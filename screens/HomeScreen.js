import { View, Text } from 'react-native'
import React from 'react'
import Button from '../components/global/Button'
import auth from '@react-native-firebase/auth';

import {SignOUT} from '../utils/auth'

const HomeScreen = () => {
 const d =  auth().currentUser.uid
  return (
    <View>
      <Text style={{color : 'black'}}>{d}</Text>
      <Button title='Skr' onPress={SignOUT} />
    </View>
  )
}

export default HomeScreen