import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';
import { act } from 'react-dom/test-utils';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

function authStart(state, action) {
    return updatedObject(state, { error: null, loading: true });
};

function authSuccess(state, action) {
    return updatedObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    });
};

function authFail(state, action) {
    return updatedObject(state, {
        error: action.error,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default: return state;
    }

};

export default reducer;