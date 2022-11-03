import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap  , TabBar} from 'react-native-tab-view';
import Account from '../profile/Account';
import ActivitiesList from './ActivitiesList';
import ButtonTracker from './ButtonTracker';

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);



export default function TabViewExample({lat , lon}) {
  const layout = useWindowDimensions();




const renderScene = SceneMap({
  ActivitiesList: () => <ActivitiesList lat={lat}  lon={lon}/>,
  ButtonTracker:  ButtonTracker

});





  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'ActivitiesList', title: 'Ski on Mars Tracker' },
    { key: 'ButtonTracker', title: 'Recent Ski Activities' },
 
  ]);

  return (
    <TabView
    
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
    
      renderTabBar={props => <TabBar {...props} 
      indicatorStyle={{ backgroundColor: '#eb5c26', height: 3  , width : 50 , marginLeft : 30 }}
      style={{backgroundColor: 'white'  }}
      indicatorContainerStyle={{width : 300 , alignSelf : 'center'}}
      labelStyle={{width : 170,color: '#666666' , fontSize: 14, textTransform :'capitalize' , fontFamily: 'MuseoSans_700' , textAlign : 'center'}}
      tabStyle={{ textAlign : 'left'}}
      
      />} 
      />
    
  );
}