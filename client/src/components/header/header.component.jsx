import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { cartHiddenVar } from '../../cache';
import { auth } from '../../firebase/firebase.utils';
import { signOutStart } from '../../redux/user/user.actions';

import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';
import { useReactiveVar } from '@apollo/client';


const Header = ({ currentUser, signOutStart }) => {
    const cartHidden = useReactiveVar(cartHiddenVar);
    return (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo> </Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='shop'>
                SHOP
            </OptionLink>
            <OptionLink  to='contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                <OptionLink as='div'  onClick={signOutStart}> 
                    SIGN OUT  
                </OptionLink>
                ) : (
                <OptionLink  to='/signIn'>
                    SIGN IN
                </OptionLink>
                )
            }
            <CartIcon />
        </OptionsContainer>
        { cartHidden ? null : <CartDropDown /> }
    </HeaderContainer>
)
        }

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);