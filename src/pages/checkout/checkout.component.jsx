import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlock, StripeButtonStyled, Total, TestWarningBlock } from './checkout.styles';


import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer> 
            <HeaderBlock className='header-block'>
                <span className='Product'> Product </span>
            </HeaderBlock>
            <HeaderBlock className='header-block'>
                <span className='Decription'> Description </span>
            </HeaderBlock>
            <HeaderBlock className='header-block'>
                <span className='Quantity'> Quantity </span>
            </HeaderBlock>
            <HeaderBlock className='header-block'>
                <span className='Price'> Price </span>
            </HeaderBlock>
            <HeaderBlock className='header-block'>
                <span className='Remove'> Remove </span>
            </HeaderBlock>
        </CheckoutHeaderContainer>
        
            {
                cartItems.map((cartItem) =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
        
        <Total className='total'>
            <span>
                Total: ${total}
            </span>
        </Total>
        <TestWarningBlock>
            *Please use the following test credit card for payment
            <br/>
            4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </TestWarningBlock>
        <StripeButtonStyled price={total} />
    </CheckoutPageContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);