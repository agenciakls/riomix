import * as React from 'react';
import { View, SafeAreaView, DrawerItems, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../logged/home';
import About from '../logged/about';
import Products from '../logged/listProducts';
import Recicler from '../logged/recicler';
import News from '../logged/listNews';
import Media from '../logged/media';
import Contact from '../logged/contact';


const Drawer = createDrawerNavigator();

const Exit = () => {
  return(
    <Text>Teste</Text>
  );
};
const RouteLogged = ({ navigation }) => {
  return(
    <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
      <Drawer.Screen name="Início" component={Home} />
      <Drawer.Screen name="Quem Somos" component={About} />
      <Drawer.Screen name="Produtos" component={Products} />
      <Drawer.Screen name="Recolhimentos" component={Recicler} />
      <Drawer.Screen name="Notícias" component={News} />
      <Drawer.Screen name="Multimídia" component={Media} />
      <Drawer.Screen name="Contato" component={Contact} />
      <Drawer.Screen name="Sair" component={Exit} />
    </Drawer.Navigator>
  );
}

export default RouteLogged;