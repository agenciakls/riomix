import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Home from './pages/home';
import About from './pages/about';
import Products from './pages/listProducts';
import Recicler from './pages/recicler';
import News from './pages/listNews';
import Media from './pages/media';
import Contact from './pages/contact';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
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

