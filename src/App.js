import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';



import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { onSnapshot } from 'firebase/firestore';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';


class App extends React.Component {
  
  unsubscribeFromAuth = null;
  
//  check if user is stored on our database
  componentDidMount() {
    const { setCurrentUser } = this.props 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
  
        onSnapshot(userRef, (doc) => {
            setCurrentUser({
              id: doc.id,
              ...doc.data()
          });
        });
     } 
      
  setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route exact path='/checkout' element={<CheckoutPage />} />
          <Route exact 
          path='/signin' 
          element={
            this.props.currentUser ? (
              <Navigate replace to="/" />
            ):(
              <SignInAndSignUp />
            )
            
          } 
          />
        </Routes>
      </div>
  );
  }
  
};

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
)

export default connect(mapStatetoProps, mapDispatchToProps)(App);
