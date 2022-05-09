import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./user";
import userSearchReducer from "./userSearch";

const store = configureStore({
    //middleware para loggear las actualizaciones. 
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

    reducer: {
        user: userReducer,
        userSearch: userSearchReducer,
    },
});

export default store;