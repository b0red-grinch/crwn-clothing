import React from 'react';
import { useQuery, gql } from '@apollo/client';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import Spinner from '../with-spinner/with-spinner.component';

//import './collection-overview.styles.css'
import { CollectionOverviewContainer } from './collection-overview.styles';

const GET_COLLECTIONS = gql`
    query {        
        collections {
        id
        title
        items {
            id 
            name
            price
            imageUrl
        }
    }
    }
`

const CollectionsOverview = ( ) => {
    const { data, loading, error } = useQuery(GET_COLLECTIONS);
    if (loading) return <Spinner/>;
    
    return(
    <CollectionOverviewContainer>
        {
                data.collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
    </CollectionOverviewContainer>
    )

}

export default CollectionsOverview;