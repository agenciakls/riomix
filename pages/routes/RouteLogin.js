import React, {useContext} from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthContext, { AuthProvider } from './auth';

import HomeLogin from '../login/Home';
import ForgotPassword from '../login/Forgot';
import Register from '../login/Register';

const Stack = createStackNavigator();

const RouteLogin = () => {
    const {signed} = useContext(AuthContext);
    return (
        <NavigationContainer>
            <AuthProvider>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}>
                    <Stack.Screen name="Login" component={HomeLogin} />
                    <Stack.Screen name="Recuperar" component={ForgotPassword} />
                    <Stack.Screen name="Registrar" component={Register} />
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}
export default RouteLogin;