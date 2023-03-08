import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';


import { fetchCollectionStart } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const ShopPage = ({fetchCollectionStart}) => {
    useEffect( () => {
        fetchCollectionStart();  
    }, [fetchCollectionStart])

            return(
                <div className='shop-page'> 
                    <Outlet/>
                </div>
            )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
