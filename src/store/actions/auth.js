import * as actionTypes from './actionTypes';

export function authStart() {
    return {
        type: actionTypes.AUTH_START
    };
};

export function authSuccess(authData) {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export function authFail(error) {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export function auth(email, password) {
    return dispatch => {
        dispatch(authStart());
    };
};