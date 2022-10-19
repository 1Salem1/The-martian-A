import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview' 
export default function PDF() {
  return (
    <View style={styles.container}  >
        <WebView source={{ uri: 'https://heyzine.com/flip-book/e1409b73ca.html' }} />
        <View style={{backgroundColor : 'white' , height  : 180 , position :'absolute' , width : '100%' , bottom : 0 }}></View>
</View>
  )
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'center',

  },
})