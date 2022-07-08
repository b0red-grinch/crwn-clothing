import React from 'react';
import {useParams, useMatch} from 'react-router-dom';
import {useSelector, connect} from 'react-redux';

import { selectCollection, selectCollections } from '../../redux/shop/shop.selector';


import './collection.styles.css';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = () => {
    const {collectionId} = useParams();
    const collection = useSelector(state => selectCollection(collectionId)(state));

    const { title, items } = collection;

    return(
        <div className='collection-page'>
            <h2 className='title'> { title } </h2>
            <div className='items'>
                {
                    items.map(item =>(
                         <CollectionItem key={item.id} item={item} />
                        )
                    )
                }
            </div>
           
        </div>
    )
}

export default CollectionPage;




