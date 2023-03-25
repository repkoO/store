import { createSlice } from "@reduxjs/toolkit";
import { myInitialState } from "../initialState";


const cartSlice = createSlice({
    name: 'cart',
    initialState: myInitialState.cart,
    reducers: {
        addToCart: (state, action) => {
            const productInCart = state.find(el=>el.id === action.payload)
            if(productInCart) {
                productInCart.count++;
                return state;
            }
            state.push({
                _id: action.payload,
                count: 1
            })
        },
        removeAllCart: () => {
            return myInitialState.cart
        }
        // removeFromCart: (state, action) => {
        //     state.cart = action.payload
        // },

    }
})

export const {addToCart, removeFromCart, removeAllCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;