import * as actionTypes from '../actions/actionTypes';

let initialState = {
    ingredients: {
        salad: { amount: 0, price: 0.5 },
        meat: { amount: 0, price: 0.5 },
        cheese: { amount: 0, price: 0.5 },
        tomato: { amount: 0, price: 0.5 },
    },
    error: null
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
        case actionTypes.SET_INGREDIENT: {
            return {
                ...state,
                ingredients: action.ings

            }
        }
        case actionTypes.FETCH_INGREDIENT_FAILED:
            return {
                ...state,
                error:action.error
            }
        default:
            return state
    }
}