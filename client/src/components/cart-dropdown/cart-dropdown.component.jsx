import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';
import { CartDropDownContainer, CartItemsContainer, EmptyMessage, CartCustomButton } from './cart-dropdown.styles';

const CartDropDown = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const navigateToCheckoutPage = () => {
        navigate('/checkout');
        dispatch(toggleCartHidden());
    }

    return(
    <CartDropDownContainer>
        { cartItems.length ? (
            <CartItemsContainer>
                {cartItems.map(cartItem => (
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

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default CartDropDown;
