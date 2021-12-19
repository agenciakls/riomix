import React, { createContext, useContext } from 'react';


// const [signed, setSigned] = React.useState(false);
// function signIn() {
//     setSigned(true);
// }

const AuthContext = createContext({ signed: true, token: '', user: {} });

export const signed = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ signed: true }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;