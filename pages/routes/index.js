import React, {useContext} from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthContext, { AuthProvider } from './auth';

import HomeLogin from '../login/Home';
import ForgotPassword from '../login/Forgot';
import Register from '../login/Register';
import MainLogged from '../logged/main';

const Stack = createStackNavigator();

export default function Routes() {
    const {signed} = useContext(AuthContext);
    return (
        <NavigationContainer>
            <AuthProvider>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="Login" component={HomeLogin} />
                    <Stack.Screen name="Conta" component={MainLogged} />
                    <Stack.Screen name="Recuperar" component={ForgotPassword} />
                    <Stack.Screen name="Registrar" component={Register} />
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}