import React from 'react';

import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router-dom';
import { cartHiddenVar, cartItemsVar } from '../../cache';

import './cart-dropdown.styles.scss';
import { CartDropDownContainer, CartItemsContainer, EmptyMessage, CartCustomButton } from './cart-dropdown.styles';
import { useReactiveVar } from '@apollo/client';

import { gql, useQuery } from '@apollo/client';
import Spinner from '../with-spinner/with-spinner.component';

const GET_CART_ITEMS = gql`
query GetCartItems { 
    cartItems @client 
}
`;

const CartDropDown = () => {
    let navigate = useNavigate();
    
    const { data, loading, error } = useQuery(GET_CART_ITEMS);
    // const cartItems = useReactiveVar(cartItemsVar);

    if (loading) return < Spinner/>;
    if (error) return <p>ERROR: {error.message}</p>;

    const navigateToCheckoutPage = () => {
        navigate('/checkout');
        cartHiddenVar(!cartHiddenVar());
    }

    return(
    <CartDropDownContainer>
        { data.cartItems.length ? (
            <CartItemsContainer>
                {data.cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))}
            </CartItemsContainer>
            ) : (
                <EmptyMessage> Your cart is empty</EmptyMessage>
            ) 
        }
        <CartCustomButton onClick={navigateToCheckoutPage}> GO TO CHECKOUT </CartCustomButton>
        
    </CartDropDownContainer>
    )
};


export default CartDropDown;
