import * as ActionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: ActionTypes.AUTH_START
    }
}

export const authFailed = (err) => {
    return {
        type: ActionTypes.AUTH_FAILED,
        error: err
    }
}

export const authSuccess = (token, uid) => {
    return {
        type: ActionTypes.AUTH_SUCCESS,
        token,
        uid
    }
}

export const authLogOut = () => {
    return {
        type: ActionTypes.AUTH_LOGOUT
    }
}
export const checkExpirationTime = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogOut());
        }, expirationTime * 1000);
    }
}
export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart())
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
                dispatch(authSuccess(res.data.idToken, res.data.localId));
                dispatch(checkExpirationTime(res.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFailed(err.response.data.error.message));
            }
            );
    }
}