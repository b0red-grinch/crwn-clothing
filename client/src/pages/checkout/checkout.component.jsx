import React  from 'react';
import { useReactiveVar } from '@apollo/client';

// import { connect } from 'react-redux';
// import { createStructuredSelector} from 'reselect';
// import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutHeaderContainer, CheckoutPageContainer, HeaderBlock, Total, TestWarningBlock, StripeButtonStyled } from './checkout.styles';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import './checkout.styles.scss';
import { calculateTotal, cartItemsVar } from '../../cache';


const stripePromise = loadStripe('pk_test_51LJLxKHat1IclGpV702ENq1hq2LX4RyEUKN1PWgJgSlpuSKqsYDxZmxtOAChssdKaiKcm2axN3ewPhSaTe3mRstf00pZEJW2BT');

const CheckoutPage = (
    // { total }
) => {
    const cartItems = useReactiveVar(cartItemsVar);
    const total = calculateTotal(cartItems);
    return(
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
            <Elements stripe={stripePromise}>
            <StripeButtonStyled price={total} />
            </Elements>
    </CheckoutPageContainer>
    )
}
// const mapStateToProps = createStructuredSelector({
//     total: selectCartTotal
// })

// export default connect(mapStateToProps)(CheckoutPage);
export default CheckoutPage;