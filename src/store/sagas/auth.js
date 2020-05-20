import { put } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

//* creates a generator - function that can be executed incrementaly, can be paused during execution
function* logout(action) {
    //yield is used to show that the step needs to be executed and it won't move forward until then
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put({
        type: actionTypes.AUTH_LOGOUT
    })
};