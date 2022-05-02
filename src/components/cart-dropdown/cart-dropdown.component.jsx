import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';


import './cart-dropdown.styles.scss';

const CartDropDown = ({ toogleCartHidden }) => (
    <div className='cart-dropdown' >
        <div className='cart-items'>

        </div>
        <CustomButton> GO TO CHECKOUT </CustomButton>
        
    </div>
);



export default CartDropDown;
