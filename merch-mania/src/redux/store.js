// creating a global store to use in every page and components as well 

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import cartReducer from "./cartRedux";

import {
    persistReducer, // redux tooklit Redux-persist 
    persistStore,
    FLUSH,
    REHYDRATE,
    PURGE,
    PERSIST,
    PAUSE, 
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});


export let persistor = persistStore(store);