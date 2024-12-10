import React, { useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { default as CollectionPage } from './pages/collection/collection.container';
import CollectionsOverview from './components/collection-overview/collection-overview.component';
import Header from './components/header/header.component';
import { checkUserSession } from './redux/user/user.actions';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import { selectCollectionsForPreview, selectLoading } from './redux/shop/shop.selector';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const App = () => {
 const loading = useSelector(selectLoading);
 const currentUser = useSelector(selectCurrentUser);
 const dispatch = useDispatch();
 

//  check if user is stored on our database
  useEffect( () => {
    dispatch(checkUserSession())}, [dispatch]);
    
//   addCollectionAndDocument("collection", collectionsArray.map(({ title, items }) => ({ title, items }))
//   );
      
    return (
      <div>
        <Header />
        <Routes>
          <Route  path="/" element={<HomePage />} />
          <Route  path="/shop" element={<ShopPage />}>
            <Route  path="" element ={ <CollectionsOverview  /> }/>
            <Route  path=":collectionId" element={<CollectionPage />} />
          </Route> 
            <Route exact path="/checkout" element={<CheckoutPage />} /> 
            <Route exact 
            path='/signin' 
            element={
              currentUser ? (
                <Navigate replace to="/" />
              ):(
                <SignInAndSignUp />
              )  
            } 
            />

        </Routes>
      </div>
  );
  
};

const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchtoProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default App; 