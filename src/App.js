import React from "react";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import Login from "./components/Login";
import Nav from "./commons/NavbarOK";
import Home from "./components/Home";
import MovieSearch from "./components/MovieSearch";
import MovieDescription from "./components/Movie";
import Favs from "./components/Favs";


const App = () => {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Favs />} />
        <Route path="/movieSearch" element={<MovieSearch />} />
        <Route path="/movieDescription" element={<MovieDescription />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
