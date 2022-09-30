import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap  , TabBar} from 'react-native-tab-view';
import Account from '../profile/Account';
import ActivitiesList from './ActivitiesList';
import ButtonTracker from './ButtonTracker';

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  ActivitiesList: ActivitiesList,
  ButtonTracker: ButtonTracker,

});

export default function TabViewExample() {
  const layout = useWindowDimensions();

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
      initialLayout={{ width: layout.width }}
      renderTabBar={props => <TabBar {...props}  style={{backgroundColor: '#e8500e' }}
      labelStyle={{width : '100%',color: 'white', fontSize: 11, fontFamily:'MuseoSa'}}
      />} 
      />
    
  );
}