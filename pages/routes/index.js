import * as React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeLogin } from '../login/Home';
import ForgotPassword from '../login/Forgot';
import Register from '../login/Register';
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
                <Stack.Screen name="Recuperar" component={ForgotPassword} />
                <Stack.Screen name="Registrar" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}