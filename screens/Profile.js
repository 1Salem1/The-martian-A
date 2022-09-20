import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileTab from '../components/global/Tab';



const ProfileScreen = () => {



  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View></View>
        <View style={{flexDirection: 'row', marginTop: 15 , justifyContent:'center'}}>

          <Avatar.Image 
            source={{
              uri: 'https://lh3.googleusercontent.com/a/ALm5wu0dk6SraGxK8BBhA5zPq4Wm5pr7KpZgY2fkq_U5=s96-c',
            }}
            size={180}
          />
   
        </View>
      </View>

      <View style={styles.userInfoSection}>

      </View>

    
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
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