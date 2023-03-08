import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
    },

    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    }
})

export const { setCurrentUser } = userSlice.actions

export default userSlice.reducer

//const INITIAL_STATE = {
//    currentUser: null
//}

//const userReducer = (state = INITIAL_STATE , action) => {
//    switch (action.type) {
//        case 'SET_CURRENT_USER':
//           return {
//                ...state, 
//                currentUser: action.payload
//            }
//        default:
//            return state;
//    }
//}

//export default userReducer;