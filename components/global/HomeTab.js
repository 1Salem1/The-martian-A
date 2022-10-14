import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contact from '../../screens/Contact';
import FaqScreen from '../../screens/FaqScreen';
import HomeScreen from '../../screens/HomeScreen';
import Notification from '../../screens/Notification';
import ContactIcon from '../../assets/MenuIcons/ContactIcon';
import NotificationIcon from '../../assets/MenuIcons/NotificationIcon'
import HomeIcon from '../../assets/MenuIcons/HomeIcon';
import FaqIcon from '../../assets/MenuIcons/FaqIcon'
import { SmartOgsoSelector } from '../../screens/SmartOgsoSelector';

const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown : false ,
        showLabel: false,
        
        tabBarStyle: { position: 'absolute', height : 63 },
        tabBarBadgeStyle : {
          color : 'white',
          backgroundColor :'#e8500e',
          fontSize : 12,
        }
      }}
      
   
    
    >
      <Tab.Screen
      
      options={{
        "tabBarShowLabel": false,
        header: () => null,
        animation: "slide_from_right",
       tabBarIcon: ({color , focused} ) => 
      (
         <HomeIcon  color={focused ? '#e8500e' : 'black'} /> )   }} 
      
      
      name="Home" component={HomeScreen} />
      <Tab.Screen 
          options={{
            "tabBarShowLabel": false,
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({color , focused}) =>  
            <NotificationIcon color={focused ? '#e8500e' : 'black'}/>
          }} 
      
      name="Notification" component={Notification} />
      <Tab.Screen 
         options={{
            "tabBarShowLabel": false,
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({color , focused}) => ( <ContactIcon color={focused ? '#e8500e' : 'black'} />)
          }} 
      
      
      name="Contact" component={Contact} />
      <Tab.Screen 
         options={{
            "tabBarShowLabel": false,
            header: () => null,
            animation: "slide_from_right",
            tabBarIcon: ({color ,focused}) =>  <FaqIcon color={focused ? '#e8500e' : 'black'} />
          }} 
      
      name="Faq" component={FaqScreen} />


    </Tab.Navigator>
  );
}

export default HomeTab ;