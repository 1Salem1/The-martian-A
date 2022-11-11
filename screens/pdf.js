import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview' 
export default function PDF() {
  return (
    <View style={styles.container}  >
        <WebView source={{ uri: 'https://ogso-mountain-essentials.com/the-martian-catalog/#1' }} />
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