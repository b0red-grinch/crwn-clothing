import { createSelector } from "@reduxjs/toolkit";
const selectCart = state => state.cart;

export const selectCartItems = createSelector( 
    [selectCart],
    (cart) => cart.cartItems);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumulatedTotal, cartItem) => accumulatedTotal + cartItem.price * cartItem.quantity,
    0)
)