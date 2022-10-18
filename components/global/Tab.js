import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap  , TabBar} from 'react-native-tab-view';
import Account from '../profile/Account';
import Policy from '../profile/Policy';
import Notification from '../profile/Notification';
import ActivitiesList from '../skiOnMars/ActivitiesList';





export default function TabViewExample({ShowP, visible , handleClose , handleSignOut}) {

console.log(visible)

  const renderScene = SceneMap({
    account: () => <Account ShowP={ShowP
    } handleClose={handleClose} handleSignOut={handleSignOut} visible={visible} />,
    activities: ActivitiesList,
    notification: Notification,
    policy: Policy,
  });







  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'account', title: 'Account' },
    { key: 'activities', title: 'Activities' },
    { key: 'notification', title: 'Notification' },
    { key: 'policy', title: 'Policy' },
  ]);

  return (
    <TabView
       
      navigationState={{ index, routes }}
      renderScene={renderScene}
      activeColor={"#e8599e"}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => <TabBar {...props} 
      indicatorStyle={{ backgroundColor: '#eb5c26', height: 4  }}
      style={{backgroundColor: 'white' , padding : 0 , margin : 0  }}
      labelStyle={{    width : '100%' ,color: '#666666' , fontSize: 13, textTransform :'capitalize'  , fontFamily : 'MuseoSans_700'}}
      
    
      />} 
      />
    
  );
}