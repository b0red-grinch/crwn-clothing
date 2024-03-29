import { call, all, takeLatest, put } from 'redux-saga/effects';
import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut () {
    yield put(clearCart());
}

function* onSignOutSuccess () {
    yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas () {
    yield all([call(onSignOutSuccess)])
}

