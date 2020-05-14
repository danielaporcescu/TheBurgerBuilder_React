import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

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

export function setIngredients(ingredients) {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    };
};

export function fetchIngredientsFailed() {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export function initialIngredients() {
    return dispatch => {
        axios.get('https://react-burger-builder-f17a3.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });
    };
};