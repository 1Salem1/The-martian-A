
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview' 

const Pdf = () => {
  return (
    <View style={styles.container}  >
     <WebView source={{ uri: 'https://heyzine.com/flip-book/be0eea5ca4.html' }} />
<View style={{bottom : 20,height :70, width: 1100 , backgroundColor:'white', position: 'absolute'}}></View> 
</View>
  )
}

export default Pdf

const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: '#fff',
  
    },
  })