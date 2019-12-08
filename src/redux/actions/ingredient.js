import * as ActionTypes from './actionTypes';
import axios from '../../axios-instance';

//#region Action creator
export const addIngredient = (igType) => {
    return {
        type: ActionTypes.ADD_INGREDIENT,
        val: igType
    }
}
export const removeIngredient = (igType) => {
    return {
        type: ActionTypes.REMOVE_INGREDIENT,
        val: igType
    }
}
export const fetchIngredientFailed = (err) => {
    return {
        type: ActionTypes.FETCH_INGREDIENT_FAILED,
        error: err
    }
}

export const setIngredient = (ingredients) => {
    return {
        type: ActionTypes.SET_INGREDIENT,
        ings: ingredients
    }
}
export const fetchIngredient = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(res => {
                dispatch(setIngredient(res.data));
            })
            .catch(err => {
                dispatch(fetchIngredientFailed(err));
            });
    }
}
//#endregion