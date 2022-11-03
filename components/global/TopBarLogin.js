import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
export default function TopBar(props , {navigation}) {
  return (
    <View style={styles.container}>
        <View style={{height :60}}></View>
        <View style={{flexDirection:'row' , alignContent:'space-around'  }}>
        <TouchableOpacity style={{}} >
        <AntDesign name="left" size={30} color="black"  onPress={() => props.navigation.goBack()} />
        </TouchableOpacity>
           <View style={{width:'65%'}}></View>
        <TouchableOpacity onPress={() => props.navigation.navigate(props.route)}>
        <Text style={{fontWeight:'bold'}}>
            {props.name}
        </Text>
        </TouchableOpacity>
        </View>
      
    </View>
  )
}




const styles = StyleSheet.create({
    container: {
      flex : 1, 
      alignItems: 'center'
    },
  });