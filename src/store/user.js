import axios from "axios";
import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

//ruta para registrar un usuario
export const userRegister = createAsyncThunk("register", (user) => {
  return axios.post("/api/register", user).then((res) => res.data);
});

//ruta para loguear un usuario
export const userLogin = createAsyncThunk("login", (user) => {  
  return axios.post("/api/login", user).then((res) => res.data);
});

//¿hacer en otro archivo? --> hacer dos ruta para favoritos (post para crear y get para buscar)

const userReducer = createReducer({}, {
    [userRegister.fulfilled]: (state, action) => action.payload,
    [userLogin.fulfilled]: (state, action) => action.payload,
});

export default userReducer;