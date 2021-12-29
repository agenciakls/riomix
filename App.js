import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import {AuthProvider} from './pages/routes/auth';
import Routes from './pages/routes/Routes';

const App = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </NavigationContainer>
    );

};

export default App;