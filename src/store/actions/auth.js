import * as actionTypes from './actionTypes';
import axios from 'axios';

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

export function logOut() {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export function checkAuthTimeout(expirationTime) {
    return dispatch => {
        setTimeout(() => {
            dispatch(logOut());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8O-qsuGBAq-vLtXvdJQ6-GW1QBZQ6ARI';
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD8O-qsuGBAq-vLtXvdJQ6-GW1QBZQ6ARI';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                //localId is taken from the console response in browser, this is it's name
                //response.data is take from azios response and ha sit's propreties like
                //expiresIn and other that can be passed along
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data.error));
            });
    };
};