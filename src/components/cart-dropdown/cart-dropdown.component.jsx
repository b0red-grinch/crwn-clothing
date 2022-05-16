import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { useNavigate } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, dispatch }) => {
    let navigate = useNavigate();
    const navigateToCheckoutPage = () => {
        navigate('/checkout');
        dispatch(toggleCartHidden());
    }

    return(
    <div className='cart-dropdown' >
        { cartItems.length ? (
            <div className='cart-items'>
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))}
            </div>
            ) : (
                <span className='empty-message'> Your cart is empty</span>
            ) 
        }
        <CustomButton onClick={navigateToCheckoutPage}> GO TO CHECKOUT </CustomButton>
        
    </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CartDropDown);
