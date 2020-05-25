import { delay } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';

//import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/index';

//* creates a generator - function that can be executed incrementaly, can be paused during execution
export function* logoutSaga(action) {
    //yield is used to show that the step needs to be executed and it won't move forward until then
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutSucceed());
};

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(action.logout());
};