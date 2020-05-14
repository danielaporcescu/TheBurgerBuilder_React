import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export function purchaseBurgerSuccess(id, orderData) {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderId: orderData
    };
};
export function purchaseBurgerFail(error) {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export function purchaseBurgerStart() {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export function purchaseBurger(orderData) {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            });
    };
};

export function purchaseInit() {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};
