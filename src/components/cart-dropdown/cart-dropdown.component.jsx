import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';
import { CartDropDownContainer, CartItemsContainer, EmptyMessage, CartCustomButton } from './cart-dropdown.styles';

const CartDropDown = ({ cartItems, dispatch }) => {
    let navigate = useNavigate();
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

export default connect(mapStateToProps)(CartDropDown);
