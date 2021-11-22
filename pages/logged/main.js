import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import Home from './home';
import About from './about';
import Products from './listProducts';
import Recicler from './recicler';
import News from './listNews';
import Media from './media';
import Contact from './contact';


const Drawer = createDrawerNavigator();

export default function MainLogged() {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
        <Drawer.Screen name="Início" component={Home} />
        <Drawer.Screen name="Quem Somos" component={About} />
        <Drawer.Screen name="Produtos" component={Products} />
        <Drawer.Screen name="Recolhimentos" component={Recicler} />
        <Drawer.Screen name="Notícias" component={News} />
        <Drawer.Screen name="Multimídia" component={Media} />
        <Drawer.Screen name="Contato" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

