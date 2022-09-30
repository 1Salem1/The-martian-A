import { View, Text  , Switch} from 'react-native'
import React , {useState} from 'react'

const Notification = () => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{flex : 1 , backgroundColor:'white' }}>
      <Text style={{left : 20 , marginTop: 20, color: '#000000', fontFamily: 'MuseoSans_700', fontSize: 18, fontWeight: '400', fontStyle: 'normal', textAlign: 'left', lineHeight: 36,}}>Notification</Text>
     <Text style={{left : 20 , color: '#666666',fontFamily: 'MuseoSans_700',fontSize: 12,fontWeight: '400',fontStyle: 'normal', lineHeight: 14, marginVertical: 10,
     }}>NOTIFICATION SETTINGS</Text>
     <View style={{flexDirection :'row' , justifyContent:'space-between' , padding : 20}}>
        <Text style={{ color: '#666666', fontFamily: 'Museo', fontSize: 12,  fontWeight: '400', fontStyle: 'normal',lineHeight: 14}}
        
        >Allow The MARTIAN to send notifications</Text>
          <Switch style={{bottom : 5}}
        trackColor={{ false: "#767577", true: "#eb5c26" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        
      />
        
        
        </View>
    </View>
    
  )
}

export default Notification