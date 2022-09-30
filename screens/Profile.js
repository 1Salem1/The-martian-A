import React, { useContext } from 'react';
import {View, SafeAreaView, StyleSheet , Text} from 'react-native';
import {
  Avatar,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Tab from '../components/global/Tab';
import { AuthContext } from '../utils/auth-context';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native';



const ProfileScreen = ({navigation}) => {
 
  const Auth = useContext(AuthContext)

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
      <TouchableOpacity onPress={ ()=> navigation.goBack() }  style={{top :20, width:'10%'}} >
<Icon name='chevron-left' style={{ color : 'black' , fontSize: 50}} />
</TouchableOpacity>

    
        <View style={{flexDirection: 'row', marginTop: 20 , justifyContent:'center'}}>
  <View style={{backgroundColor :'red'}}>
          <Avatar.Image 
            source={{
              uri: Auth.getData().image,
            }}
            size={150}
          />
        
        <View></View>
          </View>
          
        </View>
        
        <Text style={{textAlign :"center",color: '#000000',fontFamily: 'MuseoSans_700',fontSize: 18,fontWeight: '400',fontStyle: 'normal',textAlign: 'center', lineHeight: 36,}}>Welcome Back</Text>
        <Text style={{textAlign :"center",color: '#e8500e',fontFamily: 'MuseoSans_700',fontSize: 30,fontWeight: '400',fontStyle: 'normal',textAlign: 'center'}}>{capitalizeFirstLetter(Auth.getData().fname) +' ' + capitalizeFirstLetter(Auth.getData().lname)   }</Text>

    
      </View>

      <View style={styles.userInfoSection}>

      </View>
<Tab/>
    
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
  marginBottom:25,
   paddingHorizontal:20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});