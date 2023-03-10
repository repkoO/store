import { configureStore } from "@reduxjs/toolkit";
import { myInitialState } from "./initialState";
import { filterReducer } from "./slices/filterSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer
    },
    preloadedState: myInitialState,
})