import { gql } from 'apollo-boost'
import { addItemToCart } from '../cart.utils';

export const typeDefs = gql`
    extend type Mutation { 
    ToggleCartHidden: Boolean! 
}
`;

```
export const resolvers = {
    Mutation: { 
        addToCart: (_root, {cartItems, itemToAdd}, { cache }) => {
            cache.modify({
                id: cache.identify({
                    __typename: 'CartItem',
                    id: itemToAdd.id,
                }),
                fields: {
                    cartItems: addItemToCart(cartItems, itemToAdd)
                },
            });
            return cartItems;
        }
    }
}
``` 

```
export const resolvers = { 
    Mutation : {
        toggleHiddenCart: (_root, _args, { cache }) => {
            const { cartHidden } = cache.readQuery ({ 
                Query: GET_CART_HIDDEN, 
            })

            cache.writeQuery({
                Query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden }
            });

            return !cartHidden; 
        }
    }
}
```
