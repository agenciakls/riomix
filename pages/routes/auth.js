import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({ signed: false, token: null, user: null });
import signIn from './SignIn';


export function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [signed, setSigned] = useState('');
    const [loading, setLoading] = useState('');

    useEffect(() => {
        async function loadStoragedData() { 
            const storagedUser = await AsyncStorage.getItem('@user');
            const storagedToken = await AsyncStorage.getItem('@token');

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
                setToken(storagedToken);
                setSigned(true);
            }
        }
        loadStoragedData();
    }, []);

    async function login(username, password) {
        const responseLogin = await signIn(username, password);
        if (responseLogin.status) {

            setUser(responseLogin.user);
            setToken(responseLogin.token);
            setSigned(true);

            await AsyncStorage.setItem('@user', JSON.stringify(responseLogin.user));
            await AsyncStorage.setItem('@token', responseLogin.token);
            
            return responseLogin;
        }
        else {
            return false;
        }
    }
    function loginAnonymous() {
        setUser(null);
        setToken(null);
        setSigned(true);
    }
    function loggout() {
        if (user) {
            AsyncStorage.clear().then(() => {
                setUser(null);
                setToken(null);
                setSigned(false);
            });
        }
        else {
            setUser(null);
            setToken(null);
            setSigned(false);
        }
    }
    return (
        <AuthContext.Provider value={{ signed, token, user, login, loginAnonymous, loggout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;