import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import "./checkout-item.styles.scss";
import { CheckOutItemContainer, ImageContainer, Image, Name, Price, Quantity, RemoveButton, Arrow, Value } from './checkout-item.styles';

const CheckoutItem = ({ cartItem , clearItem, addItem, removeItem }) => {
    const {imageUrl, name, quantity, price} = cartItem;

    return(
    <CheckOutItemContainer> 
        <ImageContainer>
            <Image src={imageUrl}  alt='item' /> 
        </ImageContainer>
        <Name> {name} </Name>
        <Quantity> 
            <Arrow onClick={()=> removeItem(cartItem)}> &#10094;</Arrow>
            <Value> {quantity} </Value>
            <Arrow onClick={()=> addItem(cartItem)}>&#10095;</Arrow>
        </Quantity>
        <Price> ${price} </Price>
        <RemoveButton onClick={()=> clearItem(cartItem)}> &#10005; </RemoveButton>
    </CheckOutItemContainer>
    )
};

export const mapDispatchtoProps = (dispatch) => ({
    clearItem: (item) => (dispatch(clearItemFromCart(item))),
    addItem: (item) => (dispatch(addItem(item))),
    removeItem: (item) => (dispatch(removeItem(item)))
})

export default connect(null, mapDispatchtoProps)(CheckoutItem);
