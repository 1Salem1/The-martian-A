import { View, Text , StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper'

const SingleNotification = (props) => {
  return (
   <TouchableOpacity style={styles.container}>
     <Avatar.Image style={{alignSelf :'center' , right : 30}}
         source={require('../../assets/Notification.png')}
         size={50}
         >
            
     </Avatar.Image>
     <View style={{width : 10}}></View>
<View style={{flexDirection : 'column' , justifyContent :'center' ,  }}>
<Text style={styles.newProducts}>{props.p1}</Text>
      <Text style={styles.checkoutOur}>{props.p2}</Text>
</View>

<TouchableOpacity>

</TouchableOpacity>

   </TouchableOpacity>
  )
}

export default SingleNotification



const styles = StyleSheet.create({
    container : {
    
            width: 335,
            height: 71,
            justifyContent : 'center',
            borderRadius: 10,
            borderColor: '#ffd6c7',
            borderStyle: 'solid',
            borderWidth: 1,
            backgroundColor: '#ffffff',
            flexDirection :'row' ,
    },

    newProducts: {
        color: '#000000',
        fontFamily: 'MuseoSans_700',
        fontSize: 12,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'left',
        width : 150,
       
      },

      checkoutOur: {
        color: '#cccccc',
        fontFamily: 'MuseoSans_300',
        fontSize: 13,
        fontWeight: 'bold',
        fontStyle: 'normal',
        textAlign: 'left',
      },
})