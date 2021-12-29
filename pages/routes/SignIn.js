import React, {useState} from 'react';

import api from './api';

const signIn = async (username, password) => {
    

    const responseLogin = await api.post('/login', {
        username: username,
        password: password,
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return responseLogin.data;
    
}
export default signIn;