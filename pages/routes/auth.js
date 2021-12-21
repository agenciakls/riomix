import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({ signed: false, token: '', user: {} });
import signIn from './SignIn';


export function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [signed, setSigned] = useState(false);
    const [responseData, setResponseData] = useState(null);
    useEffect(() => {

        async function loadStoragedData () {
            const storagedUser = await AsyncStorage.getItem('@user');
            const storagedToken = await AsyncStorage.getItem('@token');

            if (storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
            }
        }
        loadStoragedData();
    }, []);

    async function login(username, password) {
        const { responseLogin } = await signIn(username, password);
        console.log(responseLogin);
        setResponseData(responseLogin);
        // setUser(response.user);
        // await AsyncStorage.setItem('@user', JSON.stringify(response.user));
        // await AsyncStorage.setItem('@token', response.token);
    }
    function loginAnonimous() {
        setUser(null);
        setToken(null);
        setSigned(true);
    }
    return (
        <AuthContext.Provider value={{ signed, token, user, login, loginAnonimous }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;