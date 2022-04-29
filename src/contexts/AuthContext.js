//creo el contexto para la autenticación de mi user

import { createContext, useState } from "react";

//definir un default state para mi contexto

const initialState = {
    user: null, //info del user
    isAuthenticated: false, //¿está logueado?
    toggleAuth: () => null,
    movieSearch: [],
};

export const AuthContext = createContext(initialState)

//componente provider
const AuthContextProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState({
        user: null,
        isAuthenticated: false,
    });
    const [movieSearch, setMovieSearch] = useState([])

    const toggleAuth = (user, movie) => {
        setIsLoggedIn({
            user: user,
            isAuthenticated: !isLoggedIn.isAuthenticated,
        }),
        setMovieSearch(movie); // ver, ¿se hace en uno diferente? ¿en otro mismo archivo?
    };


    const value = { isLoggedIn, toggleAuth, toggleAuth2, movieSearch};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthContextProvider;