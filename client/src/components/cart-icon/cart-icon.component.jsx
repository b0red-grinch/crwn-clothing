import React from 'react';
import { connect } from 'react-redux';

import { selectCartItemCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import './cart-icon.styles.scss';
import { CartIconContainer, ShoppingIcon, ItemCount} from './cart-icon.styles';
import { cartHiddenVar, cartItemsVar, getCartCount } from '../../cache';
import { gql, useQuery, useReactiveVar } from '@apollo/client';
import { client } from '../..';

const GET_CART_ITEMS = gql`
    query GetCartItems {
        cartItems @client {
            quantity
        }
    }
`

const CartIcon = (
    // { itemCount }
) => {
    // const cartItem = useReactiveVar(cartItemsVar);

    const { data, loading, error } = useQuery(GET_CART_ITEMS);
    const itemCount = getCartCount(data.cartItems);
    console.log(localStorage.getItem("cartItems"));
    
    return(
        <CartIconContainer onClick={() => cartHiddenVar(!cartHiddenVar())}>
        <ShoppingIcon />
        <ItemCount> {itemCount} </ItemCount>
        </CartIconContainer>
    )
    
}

// const mapStateToProps = createStructuredSelector({
//     itemCount: selectCartItemCount
// });

// export default connect(mapStateToProps)(CartIcon);
export default CartIcon;




