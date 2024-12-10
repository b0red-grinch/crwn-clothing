import React from 'react';
// import { connect } from 'react-redux';

// import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import "./checkout-item.styles.scss";
import { CheckOutItemContainer, ImageContainer, Image, Name, Price, Quantity, RemoveButton, Arrow, Value } from './checkout-item.styles';
import { addItemToCart, removeEntireItemFromCart, removeItemFromCart } from '../../cart.utils';
import { cartItemsVar } from '../../cache';
import { useReactiveVar } from '@apollo/client';

const CheckoutItem = ({ cartItem }) => {
    const {imageUrl, name, quantity, price} = cartItem;

    return(
    <CheckOutItemContainer> 
        <ImageContainer>
            <Image src={imageUrl}  alt='item' /> 
        </ImageContainer>
        <Name> {name} </Name>
        <Quantity> 
            <Arrow onClick={
                ()=> {
                    const updatedCart = cartItemsVar(removeItemFromCart(cartItemsVar(), cartItem));
                    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
                    return updatedCart;
                }
                }> &#10094;</Arrow>
            <Value> {quantity} </Value>
            <Arrow onClick={
                ()=> {
                    const updatedCart = cartItemsVar(addItemToCart(cartItemsVar(), cartItem));
                    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
                    return updatedCart;
                }
                }>&#10095;</Arrow>
        </Quantity>
        <Price> ${price} </Price>
        <RemoveButton onClick={
            ()=> {
                const updatedCart = cartItemsVar(removeEntireItemFromCart(cartItemsVar(), cartItem));
                localStorage.setItem("cartItems", JSON.stringify(updatedCart));
                return updatedCart;
            }
        }> &#10005; </RemoveButton>
    </CheckOutItemContainer>
    )
};

// export const mapDispatchtoProps = (dispatch) => ({
//     clearItem: (item) => (dispatch(clearItemFromCart(item))),
//     addItem: (item) => (dispatch(addItem(item))),
//     removeItem: (item) => (dispatch(removeItem(item)))
// })

// export default connect(null, mapDispatchtoProps)(CheckoutItem);

export default CheckoutItem;
