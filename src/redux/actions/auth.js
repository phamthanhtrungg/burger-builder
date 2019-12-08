import * as ActionTypes from './actionTypes';
import axios from 'axios';

export const authFailed = (err) => {
    return {
        type: ActionTypes.AUTH_FAILED,
        error: err
    }
}

export const authSuccess = (authData) => {
    return {
        type: ActionTypes.AUTH_SUCCESS,
        authData: authData
    }
}
export const auth = (email, password, isSignUp) => {
    return dispatch => {
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_PmCzD401OYT4ReI9tn1bUziLrorg8Qc';
        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC_PmCzD401OYT4ReI9tn1bUziLrorg8Qc';
        }
        const authData = {
            email,
            password,
            returnSecureToken: true
        }
        axios.post(url, authData)
            .then(res => {
                dispatch(authSuccess(res.data));
            })
            .catch(
                err => dispatch(authFailed(err))
            );
    }
}