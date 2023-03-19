import { configureStore } from "@reduxjs/toolkit";
import { getInitialState } from "./initialState";
import { filterReducer } from "./slices/filterSlice";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        user: userReducer,
    },
    preloadedState: getInitialState(),
})

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})