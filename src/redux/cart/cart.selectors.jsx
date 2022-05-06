import { createSelector } from "@reduxjs/toolkit";

const selectCart = state => state.cart;

export const selectCartItems = createSelector( 
    [selectCart],
    (cart) => cart.cartItems)

export const selectCartItemCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedQuantity, cartItems) => accumulatedQuantity + cartItems.quantity,
    0)
)