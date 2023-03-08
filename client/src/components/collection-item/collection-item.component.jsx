import React from 'react';
import { connect } from 'react-redux'; 

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.css'
import { CollectionItemContainer, CollectionImage, CustomButtonStyled, CollectionFooter, CollectionName, CollectionPrice } from './collection-item.styles';

import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
    return(
    <CollectionItemContainer>
        <CollectionImage
        style={{ 
            backgroundImage: `url(${imageUrl})` 
            }}
        />
        <CollectionFooter>
            <CollectionName>{name}</CollectionName>
            <CollectionPrice>${price}</CollectionPrice>
        </CollectionFooter>
        <CustomButtonStyled onClick={()=> addItem(item)} inverted> 
            Add to Cart 
        </CustomButtonStyled>
    </CollectionItemContainer>
    )
        };

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);