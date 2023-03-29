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
                id: action.payload,
                count: 1
            })
        },
        removeAllCart: () => {
            return myInitialState.cart
        }, 
        incrementProduct: (state, action) => {
            const productInCart = state.find(el=>el.id === action.payload)
            if(productInCart) {
                productInCart.count++;
                return state;
            }
            return state;
        },
        dicrementProduct: (state, action) => {
            const productInCart = state.find(el=>el.id === action.payload)
            if(productInCart) {
                if (productInCart.count === 1) {
                    return state.filter(el => el.id !== action.payload)
                }
                productInCart.count--;
                return state;
            }
            return state;
        },
        removeFromCart: (state, action) => {
            return state.filter(el => el.id !== action.payload)
        },
    }
})

export const {addToCart, removeFromCart, removeAllCart, incrementProduct, dicrementProduct} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;