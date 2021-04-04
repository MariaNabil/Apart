import React from 'react';
import {View} from 'react-native';
import CustomHeader from '../partial-components/CustomHeader';
import HotNews from './News/HotNews';
import LatestNews from './News/LatestNews';
import SystemNews from './News/SystemNews';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="LatestNews"
        component={LatestNews}
        options={{tabBarLabel: 'Latest news'}}
      />
      <Tab.Screen
        name="HotNews"
        component={HotNews}
        options={{tabBarLabel: 'Hot news'}}
      />
      <Tab.Screen
        name="SystemNews"
        component={SystemNews}
        options={{tabBarLabel: 'System news'}}
      />
    </Tab.Navigator>
  );
}

export default Home = props => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <CustomHeader
        title={'Timeline'}
        navigation={props.navigation}
        isDrawer={true}></CustomHeader>
      <View style={{flex: 1}}>{MyTabs()}</View>
    </View>
  );
};
