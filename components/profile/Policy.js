import * as React from 'react';
import { ScrollView, View , Text } from 'react-native';
import { List } from 'react-native-paper';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const Policy = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);


        

  return (
    <ScrollView style={{flex : 1  , backgroundColor :'white'}}> 
  <List.Section style={{color : 'blue'}} title="Privacy Policy"  titleStyle={{ color: '#000000', fontFamily: 'MuseoSans_700', fontSize: 18, fontWeight: '400', fontStyle: 'normal', textAlign: 'left', lineHeight: 36,}}>
      <List.Accordion  theme={{ colors: { primary: '#e8500e' } }}  titleStyle={{fontSize:14}} style={{backgroundColor:'white'}}
        title="Personal Data"
        left={props => <List.Icon {...props}  icon="circle"  />}>
      <Text style={{color : 'black' , textAlign:'justify' , lineHeight:20 , marginVertical:20 , right : 30 }}>
      Demographic and other personally identifiable information (such as your name and email address) that you voluntarily give to us when choosing to participate in various activities related to the Application, such as chat, posting messages in comment sections or in our forums, liking posts, sending feedback, and responding to surveys.  If you choose to share data about yourself via your profile, online chat, or other interactive areas of the Application, please be advised that all data you disclose in these areas is public and your data will be accessible to anyone who accesses the Application.
      </Text>
      </List.Accordion>

      <List.Accordion theme={{ colors: { primary: '#e8500e' } }}  titleStyle={{fontSize:14}} style={{backgroundColor:'white'}}
        title="Derivative Data"
        left={props => <List.Icon {...props} icon="circle" />}>
       <Text style={{color : 'black' , textAlign:'justify' , lineHeight:20 , marginVertical:20 , right : 30 }}>
        Information our servers automatically collect when you access the Application, such as your native actions that are integral to the Application, including liking, re-blogging, or replying to a post, as well as other interactions with the Application and other users via server log files.  
      </Text>
      </List.Accordion>
      <List.Accordion  theme={{ colors: { primary: '#e8500e' } }}  titleStyle={{fontSize:14}} style={{backgroundColor:'white'}}
        title="Facebook Permissions"
        left={props => <List.Icon {...props} icon="circle" />}>
        <Text style={{color : 'black' , textAlign:'justify' , lineHeight:20 , marginVertical:20 , right : 30 }}>
         The Application may by default access your Facebook basic account information, including your name, email, gender, birthday, current city, and profile picture URL, as well as other information that you choose to make public. We may also request access to other permissions related to your account, such as friends, checkins, and likes, and you may choose to grant or deny us access to each individual permission. For more information regarding Facebook permissions, refer to the Facebook Permissions Reference page.
      </Text>
      </List.Accordion>
      <List.Accordion theme={{ colors: { primary: '#e8500e' } }}   titleStyle={{fontSize:14}} style={{backgroundColor:'white'}}
        title="Data from Social Networks"
        left={props => <List.Icon {...props} icon="circle" />}>
    <Text style={{color : 'black' , textAlign:'justify' , lineHeight:20 , marginVertical:20 , right : 30 }}>
    User information from social networking sites, such as [Apple’s Game Center, Facebook, Google+ Instagram, Pinterest, Twitter], including your name, your social network username, location, gender, birth date, email address, profile picture, and public data for contacts, if you connect your account to such social networks. This information may also include the contact information of anyone you invite to use and/or join the Application.
      </Text>
      </List.Accordion>
      <List.Accordion theme={{ colors: { primary: '#e8500e' } }}   titleStyle={{fontSize:14}} style={{backgroundColor:'white'}}
        title="Geo-Location Information"
        left={props => <List.Icon {...props} icon="circle" />}>
      <Text style={{color : 'black' , textAlign:'justify' , lineHeight:20 , marginVertical:20 , right : 30 }}>
      We may request access or permission to and track location-based information from your mobile device, either continuously or while you are using the Application, to provide location-based services. If you wish to change our access or permissions, you may do so in your device’s settings.
      </Text>
      </List.Accordion>
      <List.Accordion theme={{ colors: { primary: '#e8500e' } }}   titleStyle={{fontSize:14}} style={{backgroundColor:'white'}}
        title="Mobile Device Access "
        left={props => <List.Icon {...props} icon="circle" />}>
    <Text style={{color : 'black' , textAlign:'justify' , lineHeight:20 , marginVertical:20 , right : 30 }}>
      We may request access or permission to certain features from your mobile device, including your mobile device’s [bluetooth, calendar, camera, contacts, sensors, social media accounts, storage,] and other features. If you wish to change our access or permissions, you may do so in your device’s settings.
      </Text>
      </List.Accordion>

      <List.Accordion theme={{ colors: { primary: '#e8500e' } }}   titleStyle={{fontSize:14}} style={{backgroundColor:'white'}}
        title="Push Notifications "
        left={props => <List.Icon {...props} icon="circle" />}>
   <Text style={{color : 'black' , textAlign:'justify' , lineHeight:20 , marginVertical:20 , right : 30 }}>

    We may request to send you push notifications regarding your account or the Application. If you wish to opt-out from receiving these types of communications, you may turn them off in your device’s settings.      </Text>
      </List.Accordion>

      <List.Accordion theme={{ colors: { primary: '#e8500e' } }}   titleStyle={{fontSize:14}} style={{backgroundColor:'white'}}
        title="Data From Contests, Giveaways, and Surveys "
        left={props => <List.Icon {...props} icon="circle" />}>
   <Text style={{color : 'black' , textAlign:'justify' , lineHeight:20 , marginVertical:20 , right : 30 }}>

Personal and other information you may provide when entering contests or giveaways and/or responding to surveys.</Text>
      </List.Accordion>

    </List.Section>
    </ScrollView>
  )
}

export default Policy