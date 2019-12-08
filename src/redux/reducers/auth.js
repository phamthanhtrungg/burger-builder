import * as ActionTypes from '../actions/actionTypes'

const initialState = {
    authData: null,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_SUCCESS:
            return {
                ...state,
                authData: action.authData
            }
        case ActionTypes.AUTH_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}