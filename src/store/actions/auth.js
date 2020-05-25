import * as actionTypes from './actionTypes';

export function authStart() {
    return {
        type: actionTypes.AUTH_START
    };
};

export function authSuccess(token, userId) {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export function authFail(error) {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export function logout() {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT
    };
};

export function logoutSucceed() {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export function checkAuthTimeout(expirationTime) {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    };
};

export const auth = (email, password, isSignUp) => {
    return {
        type: actionTypes.AUTH_USER,
        email: email,
        password: password,
        isSignUp: isSignUp
    };
};

export function setAuthRedirectPath(path) {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

export function authCheckState() {
    return {
        type: actionTypes.AUTH_CHECK_STATE
    };
};