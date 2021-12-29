import React, {useContext} from 'react';
import 'react-native-gesture-handler';


import { createStackNavigator } from '@react-navigation/stack';

import AuthContext from './auth';

import HomeLogin from '../login/Home';
import ForgotPassword from '../login/Forgot';
import Register from '../login/Register';

const Stack = createStackNavigator();

const RouteLogin = () => {
    const {signed} = useContext(AuthContext);
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Login" component={HomeLogin} />
            <Stack.Screen name="Recuperar" component={ForgotPassword} />
            <Stack.Screen name="Registrar" component={Register} />
        </Stack.Navigator>
    );
}
export default RouteLogin;