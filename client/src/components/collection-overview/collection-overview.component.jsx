import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

//import './collection-overview.styles.css'
import { CollectionOverviewContainer } from './collection-overview.styles';

const CollectionsOverview = ({ collections }) => (
    <CollectionOverviewContainer>
        {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
    </CollectionOverviewContainer>

)


const mapStatetoProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStatetoProps)(CollectionsOverview);