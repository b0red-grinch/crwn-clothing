import React from 'react';
import {Routes, Route, Navigate, useParams} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CollectionPage from './pages/collection/collection.component';
import CollectionsOverview from './components/collection-overview/collection-overview.component';
import Header from './components/header/header.component';
import Directory from './components/directory-menu/directory-menu.component'
import NoMatch from './components/no-match/no-match.component';


import { checkUserSession } from './redux/user/user.actions';


import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { selectCollectionsForPreview } from './redux/shop/shop.selector';

class App extends React.Component {

 unsubscribeFromAuth = null;
  
//  check if user is stored on our database
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
    
//   addCollectionAndDocument("collection", collectionsArray.map(({ title, items }) =>({ title, items }))
//   );
      
}

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render () {

    return (
      <div>
        <Header />
        <Routes>
          <Route  path="/" element={<HomePage />} />

          <Route  path="/shop" element={<ShopPage />}>
            <Route  path="" element={<CollectionsOverview />} />
            <Route  path=":collectionId" element={<CollectionPage />} />
          </Route> 

          <Route exact path="/checkout" element={<CheckoutPage />} />
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
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchtoProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStatetoProps, mapDispatchtoProps)(App); 