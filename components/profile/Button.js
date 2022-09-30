import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { COLORS } from '../../styles/Style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({title, color ,iconName,  onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '40%',
        backgroundColor: color,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        
      }}>
   
     <Icon
    name={iconName}
    style={{color: 'white', fontSize: 22, marginRight: 10}}
  />
    
      <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 14}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;