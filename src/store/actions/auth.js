import * as actionTypes from './actionTypes';
import axios from 'axios';

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

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD8O-qsuGBAq-vLtXvdJQ6-GW1QBZQ6ARI', authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    };
};