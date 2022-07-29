import React from 'react';
import { useMatch, Outlet } from 'react-router-dom';

import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = () => {
        return (
            <div className='shop-page'> 
                <CollectionsOverview />
            </div>

        );
}

export default ShopPage;