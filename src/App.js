import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./commons/Navbar";
import Nav from "./commons/NavbarOK";
import Home from "./components/Home";
import MovieSearch from "./components/MovieSearch";
import MovieDescription from "./components/Movie";
import { useNavigate } from "react-router";
import Favs from "./components/Favs";

import AuthContextProvider from "./contexts/AuthContext";

const App = () => {

    const navigate = useNavigate();

    return (
        <>
            <AuthContextProvider>
                <Nav/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/me" element={<Favs />} />
                    <Route path="/movieSearch" element={<MovieSearch />} />
                    <Route path="/movieDescription" element={<MovieDescription />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </AuthContextProvider>
        </>
    );
}

export default App;