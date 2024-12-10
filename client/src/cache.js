import { makeVar, InMemoryCache, ApolloClient, gql, Reference } from "@apollo/client";

const cache = JSON.parse(localStorage.getItem("cartItems"));

export const cartHiddenVar = makeVar(true);
export const cartItemsVar = makeVar(cache ?? []);
export const clientVar = makeVar();
export const persistorVar = makeVar();

export const calculateTotal = (cartItems) =>(
    cartItems.reduce(
        (accumulatedTotal, cartItem) => accumulatedTotal + cartItem.price * cartItem.quantity,
    0)
);

export const getCartCount = (cartItems) => (
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0)
);
