
import { StyleSheet, Text, View  , ScrollView , SafeAreaView} from 'react-native'
import React from 'react'
import WebView from 'react-native-webview' 

export  const SmartOgsoSelector = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
 <ScrollView
   style={{ width: '100%' , height : 1000 }}
   contentContainerStyle={{ flexGrow: 1 }}
 >
   <WebView  source={{uri:'https://ogso.vercel.app/' }} originWhitelist={['*']} />
 </ScrollView>
</SafeAreaView>


)
}

const styles = StyleSheet.create({ 
container: {
flex: 1,
backgroundColor: '#fff',

},
})