import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const selectShop = state => state.collection;

export const selectCollections = createSelector( 
    [selectShop],
    shop => shop.collections
);
export const selectLoading = createSelector( 
    [selectShop],
    shop => shop.isLoading
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection =  memoize((collectionUrlParam)  => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
));
