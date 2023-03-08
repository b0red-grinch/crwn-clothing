import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';
import { CollectionsPreviewContainer, CollectionsPreviewH1, PreviewDiv } from './collection-preview.styles';



const CollectionPreview = ({ title, items }) => {

    return(
        <CollectionsPreviewContainer>
            <CollectionsPreviewH1> {title.toUpperCase()} </CollectionsPreviewH1>
            <PreviewDiv> 
                {items.filter((item, idx) => (idx < 4)).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}

            </PreviewDiv>
        </CollectionsPreviewContainer>
    );
}

export default CollectionPreview;
