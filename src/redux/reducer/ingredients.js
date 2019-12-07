import * as actionTypes from '../action/action';
import _ from 'lodash';

let initialState = {
    ingredients: {
        salad: { amount: 0, price: 0.5 },
        meat: { amount: 0, price: 0.5 },
        cheese: { amount: 0, price: 0.5 },
        tomato: { amount: 0, price: 0.5 },
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.val]: {
                        ...state.ingredients[action.val],
                        amount: state.ingredients[action.val].amount + 1
                    }
                }
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.val]: {
                        ...state.ingredients[action.val],
                        amount: state.ingredients[action.val].amount - 1
                    }
                }
            }
        default:
            return state
    }
}