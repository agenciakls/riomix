import React, { useContext } from 'react';
import { View, SafeAreaView, DrawerItems, TouchableOpacity, Text, Pressable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../logged/home';
import About from '../logged/about';
import ListProducts from '../logged/listProducts';
import Recicler from '../logged/recicler';
import News from '../logged/listNews';
import Media from '../logged/media';
import Contact from '../logged/contact';

import AuthContext from './auth';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Exit = ({navigation}) => {
    const { loggout } = useContext(AuthContext);
    function handleLoggout() {
        loggout();
    }
    function callToBack() {
        navigation.goBack(null);
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Tem certeza que deseja sair?</Text>
            
            <View style={{flexDirection: 'row', marginVertical: 15}}>
                <Pressable style={{padding: 15, backgroundColor: '#1F265B', marginHorizontal: 10, borderRadius: 5}} onPress={callToBack}><Text style={{color: '#efefef'}}>Cancelar</Text></Pressable>
                <Pressable style={{padding: 15, backgroundColor: '#1F265B', marginHorizontal: 10, borderRadius: 5}} onPress={handleLoggout}><Text style={{color: '#efefef'}}>Sair</Text></Pressable>
            </View>
        </View>
    );
};

const RouteLogged = ({ navigation }) => {
    const { user } = useContext(AuthContext);
    return (
        <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
            <Drawer.Screen name="Início" component={Home} />
            <Drawer.Screen name="Quem Somos" component={About} />
            <Drawer.Screen name="Produtos" component={ListProducts} />
            {
                (user) ? <Drawer.Screen name="Recolhimentos" component={Recicler} />: null
            }
            <Drawer.Screen name="Notícias" component={News} />
            <Drawer.Screen name="Multimídia" component={Media} />
            <Drawer.Screen name="Contato" component={Contact} />
            <Drawer.Screen name="Sair" component={Exit} />
        </Drawer.Navigator>
    );
}

export default RouteLogged;