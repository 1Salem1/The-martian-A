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
    { key: 'ActivitiesList', title: 'Ski On Mars' },
    { key: 'ButtonTracker', title: 'Recent Ski Activities' },
 
  ]);

  return (
    <TabView
    
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={props => <TabBar {...props} 
      indicatorStyle={{ backgroundColor: '#eb5c26', height: 4  }}
      style={{backgroundColor: 'white' }}
      labelStyle={{ width : '100%',color: '#666666' , fontSize: 14, textTransform :'capitalize' , fontFamily: 'MuseoSans_700'}}
      />} 
      />
    
  );
}