import shopActionTypes from './shop.types';

export const fetchCollectionSuccess = ( collectionsMap ) => ({
    type: shopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionFailure = ( errorMessage ) => ({
    type: shopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
})

export const fetchCollectionStart = () => ({
    type: shopActionTypes.FETCH_COLLECTION_START
})

