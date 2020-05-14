import * as actionTypes from './actionTypes';

export function addIngredient(name) {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export function removeIngredient(name) {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};