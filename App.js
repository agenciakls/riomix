import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/home'
import News from './screens/news';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notícias" component={News} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}