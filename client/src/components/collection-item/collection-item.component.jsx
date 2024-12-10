import React from 'react';

import './collection-item.styles.css'
import { CollectionItemContainer, CollectionImage, CustomButtonStyled, CollectionFooter, CollectionName, CollectionPrice } from './collection-item.styles';

import { cartItemsVar } from '../../cache';

import { gql, useMutation, useReactiveVar } from "@apollo/client";
import { client } from '../..';

// const ADD_TO_CART = gql`
//     mutation AddItemToCart($id:Int!) {
//         addItemToCart(id: $id) @client
//     }
// `;

const CollectionItem = ({ item }) => {
    const { id, name, price, imageUrl } = item;

    const cartItems = useReactiveVar(cartItemsVar);

    const isInCart = item.name ? cartItems.some(existingItem => (
        existingItem.name === item.name
    )): false;

    // const [addItemToCart] = useMutation(ADD_TO_CART, { variables: { id }});
   
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
        <CustomButtonStyled 
        
        onClick={ 
            () => { 
                cartItemsVar(
                    isInCart ?
                        cartItems.map(cartItem => { 
                            if (item.id === cartItem.id) {
                                return {...cartItem, quantity: cartItem.quantity + 1} 
                            }
                            return cartItem
                        })
                    : [...cartItems, {...item, quantity:1}]
                );
                localStorage.setItem('cartItems', JSON.stringify(cartItemsVar()));
            }
        }

            inverted> 
            Add to Cart 
        </CustomButtonStyled>
    </CollectionItemContainer>
    )
};

export default (CollectionItem);