import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity , StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Button({color , title , route}) {
    const navigation = useNavigation()
  return (
  <TouchableOpacity onPress={() => navigation.navigate(route)} style={[ color == 'black' ?  styles.button_black : styles.button_orange ]}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button_orange : {
        width: 219,
        height: 60,
        borderRadius: 5,
        borderColor: 'rgba(112, 112, 112, 0)',
        borderStyle: 'solid',
        borderWidth: 1,
       backgroundColor :'#eb5c26',
        justifyContent:'center',
        alignItems :'center'
    },
    button_black : {
        width: 219,
        height: 60,
        borderRadius: 5,
        borderColor: 'rgba(112, 112, 112, 0)',
        borderStyle: 'solid',
        borderWidth: 1,
       backgroundColor :'black',
        justifyContent:'center',
        alignItems :'center'
    },

    text : {
        color: '#ffffff',
        fontFamily: 'MuseoSans_700',
        fontSize: 16,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
       
        lineHeight: 31.7,
    }
})