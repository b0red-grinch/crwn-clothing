import React from 'react';
import { Connect } from 'react-redux';

import './cart-item.styles.scss';

const CartItem = ({ item:{imageUrl, price, name, quantity} }) => {
    return(
    <div className='cart-item'>
        <img src={imageUrl} alt='cart-item'/>
        <div className='item-detail'>
            <span className='name'> { name } </span>
            <span className='price'> {quantity} x ${ price } </span>
        </div>
    </div>
    )
}


export default CartItem;