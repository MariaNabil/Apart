import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from '../screens/Onboarding';
import {SafeAreaView} from 'react-native';
import Login from '../screens/Login';
import {AppNavigator} from './AppNavigator';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          headerStyle={{
            color: 'white',
          }}>
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerStyle: {
                backgroundColor: '#F5FCFF',
              },
              headerTitleStyle: {
                alignSelf: 'center',
              },
            }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={AppNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
