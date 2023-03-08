import {takeEvery, call, put, all } from "redux-saga/effects";

import shopActionTypes from "./shop.types";

import { collection, getDocs } from 'firebase/firestore';

import { convertCollectionsSnapshotToMap, db } from '../../firebase/firebase.utils';

import { fetchCollectionSuccess, fetchCollectionFailure } from './shop.actions'

export function* fetchCollectionsAsync() {
    try {
        const collectionsRef = collection(db, "collection");
        const snapshot = yield call(getDocs, collectionsRef);
        const collectionsMap = yield convertCollectionsSnapshotToMap(snapshot);
        yield put(fetchCollectionSuccess(collectionsMap));

    } catch (error) {
        yield put(fetchCollectionFailure(error.message));
    }
}

export function* fetchCollectionStart() {
    yield takeEvery(shopActionTypes.FETCH_COLLECTION_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ])
}