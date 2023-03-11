import { createSlice } from "@reduxjs/toolkit";
import { myInitialState } from "../initialState";

const filterSlice = createSlice({
    name: 'filter',
    initialState: myInitialState.filter,
    reducers: {
        changeSearchFilter(state, action) {
            state.search = action.payload
        }
    }
})

export const {changeSearchFilter} = filterSlice.actions;
export const getSearchSelector = (state) => state.filter.search;
export const filterReducer = filterSlice.reducer;