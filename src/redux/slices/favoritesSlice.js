import { createSlice } from "@reduxjs/toolkit";
import { myInitialState } from "../initialState";

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: myInitialState.favorites,
    reducers: {
        addToFavorites: (state, action) => {
            const productInFavorites = state.find(el=>el.id === action.payload)
            if(productInFavorites) {
                productInFavorites.count++;
                return state;
            }
            state.push({
                id: action.payload,
                count: 1
            })
        },
        removeAllFavorites: () => {
            return myInitialState.favorites
        },
        removeFromFavorites: (state, action) => {
            return state.filter(el => el.id === action.payload)
        },

    }
})

export const {addToFavorites, removeFromFavorites, removeAllFavorites} = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;