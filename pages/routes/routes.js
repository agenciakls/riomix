import React from 'react';
import signIn from '../login/Home';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={signIn} />
  </AuthStack.Navigator>
);