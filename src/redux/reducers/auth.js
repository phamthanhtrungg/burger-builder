import * as ActionTypes from '../actions/actionTypes'

const initialState = {
    token: null,
    uid: null,
    error: null,
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case ActionTypes.AUTH_SUCCESS:
            return {
                ...state,
                token: action.token,
                uid: action.uid,
                loading:false
            }
        case ActionTypes.AUTH_FAILED:
            return {
                ...state,
                error: action.error,
                loading:false
            }
        case ActionTypes.AUTH_LOGOUT:
            return {
                ...state,
                token: null,
                uid: null,
                error: null
            }
        default:
            return state
    }
}