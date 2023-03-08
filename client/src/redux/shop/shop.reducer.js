import SHOP_DATA from "./shop.data";
import shopActionTypes from "./shop.types";

const INITIAL_STATE = {
    collections: null,
    isLoading: true
};

const shopReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case shopActionTypes.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                isLoading: false
            }
        default:
            return state;
    }
};


export default shopReducer;