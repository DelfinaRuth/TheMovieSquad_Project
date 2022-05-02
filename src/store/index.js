import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import userReducer from "./user";

const store = configureStore({
    //middleware para loggear las actualizaciones. Ver qué loggea exactamente --> aparece el pending/fulfilled en la consola si saco este middleware?
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

    reducer: {
        user: userReducer,
    },
});

export default store;