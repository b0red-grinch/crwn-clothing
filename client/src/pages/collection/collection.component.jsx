import React from 'react';

// import {useSelector} from 'react-redux';
// import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.css';
import { CollectionContainer, CollectionH2, CollectionItemsDiv} from './collection.styles';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    

    return(
        <CollectionContainer>
            <CollectionH2> { title } </CollectionH2>
            <CollectionItemsDiv>
                {
                    items.map(item =>(
                         <CollectionItem key={item.id} item={item} />
                        )
                    )
                }
            </CollectionItemsDiv>
           
        </CollectionContainer>
    )
}

export default CollectionPage;




