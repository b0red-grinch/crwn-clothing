import React from 'react';
import { Connect } from 'react-redux';
import { CartItemContainer, CartImg, ItemDetail, Name, Price} from './cart-item.styles';

import './cart-item.styles.scss';

const CartItem = ({ item:{imageUrl, price, name, quantity} }) => {
    return(
    <CartItemContainer>
        <CartImg src={imageUrl} alt='cart-item'/>
        <ItemDetail>
            <Name> { name } </Name>
            <Price> {quantity} x ${ price } </Price>
        </ItemDetail>
    </CartItemContainer>
    )
}


export default CartItem;