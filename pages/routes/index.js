import * as React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeLogin from '../login/Home';
import MainLogged from '../logged/main';

const Stack = createStackNavigator();


var logged = false;
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={HomeLogin} />
        <Stack.Screen name="Conta" component={MainLogged} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}