import { configureStore } from "@reduxjs/toolkit";
import { getInitialState } from "./initialState";
import { cartReducer } from "./slices/cartSlice";
import { favoritesReducer } from "./slices/favoritesSlice";
import { filterReducer } from "./slices/filterSlice";
import { userReducer } from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        filter: filterReducer,
        user: userReducer,
        cart: cartReducer,
        favorites: favoritesReducer
    },
    preloadedState: getInitialState(),
})

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})