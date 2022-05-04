export const addItemToCart = (cartItems, cartItemToAdd) => {
    //check if the new cart item to be added exists in the list and save it into variable existingCardItem 
    const existingCartItem = cartItems.find(
        (cartItem) => 
            cartItemToAdd.id === cartItem.id
    );
    //create an new cartItems array with changes to the quantity property
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            (cartItemToAdd.id === cartItem.id) ?
            {...cartItem, quantity: cartItem.quantity + 1} 
            :cartItem
        );
    }

    //if cardItem does not exist, add to the list and create a new quantify property
    return [...cartItems, {...cartItemToAdd, quantity:1}];
}