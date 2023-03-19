import { createSlice } from "@reduxjs/toolkit";
import { myInitialState } from "../initialState";

const userSlice = createSlice({
    name: 'user',
    initialState: myInitialState.user,
    reducers: {
        setUser (_, action) {
            return action.payload
        },
        removeUser () {
            localStorage.clear()
           return myInitialState.user
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;
export const getUserInfoSelector = (state) => state.user;
export const userReducer = userSlice.reducer;