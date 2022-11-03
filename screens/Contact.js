import { View, Text , StyleSheet, TouchableOpacity , ScrollView , Image , SafeAreaView , TextInput} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../utils/auth-context';


const Weather = ({navigation}) => {

  const [Name, onChangeName] = React.useState(null);
  const [Email, onChangeEmail] = React.useState(null);
  const [Subject, onChangesubject] = React.useState(null);
  const [Message, onChangeMessage] = React.useState(null);
  const [imageUrl , setImageUrl]= useState(null) 

  const Auth = useContext(AuthContext)

  const  handleEmail = () => {
    Communications.email(
        ["salem.d@ogso.eu", "salem.dahmani345@gmail.com"],   //<---- destination emails
        null,                      // <--- CC email
        null,                      // <--- bcc   
        Subject,            //<--- Subject
        
        `From ${Name},
         
        ${Message}`   //<--- Body Text
      );
    }


useEffect(()=>{
},[])




  return (
<View style={{flex : 1 }}>
  <View style={styles.container}>
  <View style={{flexDirection :'row'  , justifyContent : 'space-between'   }}>
        <TouchableOpacity   onPress={()=>navigation.navigate('Home')}>
      <Icon name='chevron-left' style={{ color : 'black' , fontSize: 50 }} />
        </TouchableOpacity>
          
        <TouchableOpacity  onPress={()=>navigation.navigate('profile')}>
        <Avatar.Image 
            source={{
              uri: Auth.getData().image,
            }}
            size={50}
          />
        </TouchableOpacity>

       </View>
     <View>
            <Text style={styles.notification}>Contact us</Text>
          </View>
      
          <ScrollView
             
             Vertical
             height ='100%'
        
             showsVerticalScrollIndicator ={false}
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={{ alignSelf :'center'}}
             >
                <View style={{     justifyContent: 'center',  alignItems: 'center', }}>
                <Image  style={{bottom : 20 , marginTop : 20}} source={require('../assets/Mascot.png')} />
                </View>
          
            <Text style={styles.inOur}>
                In our FAQs section you’ll likely find the answer to most questions. Everything from technical to shipping to OGSO history, philosophy and mission.
              
            </Text>
            <Text style={[styles.inOur , {bottom : 45}]}>
                If you can’t find the answer to your question in our FAQs , please send us a message.

            </Text>
          
                <SafeAreaView style={{bottom : 80 }}>


                    <View style={styles.input}>
                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={onChangeName}
                            placeholder="Your Name"
                            placeholderTextColor='black'
                            value={Name}
                        />
                   
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={onChangeEmail}
                            value={Email}
                            placeholderTextColor='black'
                            placeholder="Your Email"
                        />
                     
                    </View>
                    <View style={styles.input}>

                        <TextInput
                            style={styles.TextStyle}
                            onChangeText={onChangesubject}
                            value={Subject}
                            placeholder="Subject"
                            placeholderTextColor='black'

                        />
                       
                    </View>

                    <View style={[styles.input, { height: 300  ,overflow:'hidden'}]}>
                        <TextInput
                            multiline = {true}
                            numberOfLines = {4}
                            style={[styles.TextStyle, { bottom: 120 }]}
                            onChangeText={onChangeMessage}
                            value={Message}
                            placeholder="Your Message"
                            placeholderTextColor='black'
                        />
                       
                    </View>
                    <View >
                        <TouchableOpacity
                            style={styles.loginScreenButton}
                            onPress={handleEmail}
                            underlayColor='#fff'>
                            <Text style={styles.loginText}>Send</Text>
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
                <View style={{height : 50}}/>
            </ScrollView>


    
          


    </View>

</View>
  )
}

export default Weather



const styles = StyleSheet.create({
    container :{
     flex : 1 ,
     backgroundColor :'white',
     padding : 20
     
    },
    notification: {
      color: '#000000',
      fontFamily: 'Esoris',
      fontSize: 28,
      fontWeight: '400',
      fontStyle: 'normal',
      lineHeight: 36,
      paddingHorizontal : 20,
      marginVertical : 20,
    },
 
    inOur: {
      
        width: 320,
        height: 137,
        color: '#666666',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        textAlign: 'center',
        bottom: 10,
        lineHeight: 23,
    },
    input: {
        width: 345,
        height: 45,
        borderRadius: 5,
        borderColor: '#cccccc',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        marginBottom: 30,
        flexDirection: 'row',
    },
    TextStyle: {
        color: 'black',
        fontFamily: 'Muso',
        fontSize: 13,
        fontWeight: '700',
        fontStyle: 'normal',
        textAlign: 'left',
        left: 30,
        width: 320,
    },
    loginScreenButton: {
        width: 159,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#eb5c26',
        left: 170,
        position :'absolute'
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        alignItems:'center',
        justifyContent :'center',
        fontWeight :'bold',
        top : 12
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        top : 20,
      
      }
})



