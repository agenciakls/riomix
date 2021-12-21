import React, {useState} from 'react';

import api from './api';

const signIn = async (username, password) => {
    
    const [responseLogin, setResponseLogin ] = useState(null);

    await api.post('/login', {
        username: username,
        password: password,
    }, {
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((responseLogin) => {
        setResponseData(responseLogin.data);
    }).catch((error) => { alert('houve um erro, tente novamente');});
    
}
export default signIn;