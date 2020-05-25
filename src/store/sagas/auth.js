import { delay } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import axios from 'axios';

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

export function* authUserSaga(action) {
    yield put(actions.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8O-qsuGBAq-vLtXvdJQ6-GW1QBZQ6ARI';
    if (!action.isSignUp) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8O-qsuGBAq-vLtXvdJQ6-GW1QBZQ6ARI';
    }
    try {
        const response = yield axios.post(url, authData);

        const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);
        //localId is taken from the console response in browser, this is it's name
        //response.data is take from azios response and ha sit's propreties like
        //expiresIn and other that can be passed along
        yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
        yield put(actions.authFail(error.response.data.error));
    };
};

export function* authCheckStateSaga(action) {
    const token = yield localStorage.getItem('token');
    if (!token) {
        put(actions.logout());
    } else {
        //what we receive is a string but with new Date it will be converted to a date object
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            put(actions.logout());
        } else {
            const userId = yield localStorage.getItem('userId');
            yield put(actions.authSuccess(token, userId));
            yield put(
                actions.checkAuthTimeout(
                    (expirationDate.getTime() - new Date().getTime()) / 1000));
        }
    }
};