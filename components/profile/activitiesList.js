import { View, Text } from 'react-native'
import React from 'react'
import ButtonTracker from '../skiOnMars/ButtonTracker'

const AtivitiesList = () => {
    
  return (
    <View style={{flex : 1 , backgroundColor:'white' }}>
      <Text style={{left : 20 , marginTop: 20, color: '#000000', fontFamily: 'MuseoSans_700', fontSize: 18, fontWeight: '400', fontStyle: 'normal', textAlign: 'left', lineHeight: 36,}}>Recent Activities</Text>

      <ButtonTracker/>
    </View>
    
  )
}

export default AtivitiesList