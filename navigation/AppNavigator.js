import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeTabs} from '../screens/Home';
import Cart from '../screens/Cart';
import CustomDrawer from './CustomDrawer';
import Notifications from '../screens/Notifications';
import Store from '../screens/Store';
import Profile from '../screens/Profile';
import Products from '../screens/Products';
import Address from '../screens/Address';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{width: '30%'}}
      drawerType={'slide'}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Store" component={Store_Stack} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export class AppNavigator extends Component {
  render() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Drawer" component={MyDrawer} />
      </Stack.Navigator>
    );
  }
}

const Store_Stack_Navigator = createStackNavigator();

const Store_Stack = () => (
  <Store_Stack_Navigator.Navigator headerMode="none">
    <Store_Stack_Navigator.Screen name="Store" component={Store} />
    <Store_Stack_Navigator.Screen name="Products" component={Products} />
    <Store_Stack_Navigator.Screen name="Address" component={Address} />
  </Store_Stack_Navigator.Navigator>
);
