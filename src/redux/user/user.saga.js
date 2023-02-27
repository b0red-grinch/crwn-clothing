import { takeLatest, put, call, all } from 'redux-saga/effects';
import { signInWithPopup,signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {googleProvider, createUserProfileDocument, getCurrentUser, auth} from '../../firebase/firebase.utils';

import userActionTypes from "../user/user.types";
import  { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure, emailSignInStart} from "../user/user.actions";
import { getDoc } from '@firebase/firestore';

function* getSnapshotFromUserAuth ( userAuth, additionalData ) {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapshot = yield getDoc(userRef);
    yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
        
}

function* signInAfterSignUp ({payload:{ user, additionalData}}) {
    yield call(getSnapshotFromUserAuth, user, additionalData)
}

function* signUpAsync ({payload:{displayName, email, password}}) {

    try {
        console.log(displayName);
        const { user } = yield createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        yield put(signUpSuccess({user, additionalData: {displayName}}));

    } catch(error) {
        yield put(signUpFailure(error))
    }
};

export function* signOutAsync () {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());

    } catch (error) {
        yield put(signOutFailure(error));
    }
}

export function* isUserAuthenticated () {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield getDoc(userRef);
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
        yield call(emailSignInStart);
    } catch(error) {
        yield put(signInFailure(error));
    }
}

export function* googleSignInAsync () {
    try {
        const { user } = yield signInWithPopup(auth, googleProvider);
        yield call(getSnapshotFromUserAuth, user);

    } catch(error) {
        yield put(signInFailure(error));
    }  
}

export function* emailSignInAsync ({payload :{email, password}}) {
    try{
        const { user } = yield signInWithEmailAndPassword(auth, email, password);
        yield call(getSnapshotFromUserAuth,user);
    }
    catch (error) {
        yield put(signInFailure(error));
    }
}

function* onSignUpSuccess () {
    yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signInAfterSignUp)
}

export function* onSignUpStart () {
    yield takeLatest(userActionTypes.SIGNUP_START, signUpAsync)
}
export function* onSignOutStart () {
    yield takeLatest(userActionTypes.SIGNOUT_START, signOutAsync)
}

export function* onCheckUserSession () {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onGoogleSignInStart () {
    yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, googleSignInAsync);
}

export function* onEmailSignInStart () {
    yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, emailSignInAsync)
}

export function* userSagas () {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}