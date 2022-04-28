//creo el contexto para la autenticación de mi user

import { createContext, useState } from "react";

//definir un default state para mi contexto

const initialState = {
    user: null, //info del user
    isAuthenticated: false, //¿está logueado?
    toggleAuth: () => null,
};

export const AuthContext = createContext(initialState)

//componente provider
const AuthContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState({
        user: null,
        isAuthenticated: false,
    });

    const toggleAuth = (user) => {
        setIsLoggedIn({
            user: user,
            isAuthenticated: !isLoggedIn.isAuthenticated,
        });
    };

    const value = { isLoggedIn, toggleAuth };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthContextProvider;