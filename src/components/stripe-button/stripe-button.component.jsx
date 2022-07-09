import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const stripePrice = price * 100;
    const publishableKey = 'pk_test_51LJLxKHat1IclGpV702ENq1hq2LX4RyEUKN1PWgJgSlpuSKqsYDxZmxtOAChssdKaiKcm2axN3ewPhSaTe3mRstf00pZEJW2BT';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return(
    <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={stripePrice}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
    );
};

export default StripeCheckoutButton;