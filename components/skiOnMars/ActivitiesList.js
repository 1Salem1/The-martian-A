import { View, Text , TouchableOpacity  , StyleSheet , ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const ActivitiesList = ({lat , lon}) => {

  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: 'white' , alignItems:'center' , justifyContent : 'center'}}  >
       <TouchableOpacity style={style.bgCopy}>
<ImageBackground source={require('../../assets/background/bg_button_ski.png')} resizeMode="cover" style={styles.image}>
<Text style={style.skiOn}>
Start{"\n"} 
MY SKI{"\n"}
ACTVITY
</Text>
</ImageBackground>

</TouchableOpacity>
    </View>
  )
}

export default ActivitiesList



const style = StyleSheet.create({
  container : {
    flex : 1,
    paddingHorizontal : 30 ,
    paddingVertical : 30,
    alignItems :'center',
    backgroundColor :'white'
  },
  letS: {
    color: '#666666',
    fontFamily: 'MuseoSans_300',
    fontSize: 13,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 26,
  },
  hiFoulen: {
    color: '#eb5c26',
    fontFamily: 'MuseoSans_700',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bgCopy: {
    width: 334,
    height: 200,
    borderRadius: 15,
  },
  skiOn: {
    color: '#ffffff',
    fontFamily: 'Esoris',
    fontSize: 28,
    fontWeight: '400',
    fontStyle: 'normal',
    textAlign: 'left',
    lineHeight: 28,
    paddingLeft : 20,
  },

})