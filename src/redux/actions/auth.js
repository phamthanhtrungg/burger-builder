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
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('uid');
    return {
        type: ActionTypes.AUTH_LOGOUT,
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
                const expirationTime = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expirationTime', expirationTime);
                localStorage.setItem('uid', res.data.localId);

                dispatch(authSuccess(res.data.idToken, res.data.localId));
                dispatch(checkExpirationTime(res.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFailed(err.response.data.error.message));
            }
            );
    }
}

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(authLogOut());
        }
        else {
            const expirationTime = new Date(localStorage.getItem('expirationTime'));
            if (expirationTime <= new Date()) {
                dispatch(authLogOut())
            } else {
                dispatch(authStart());
                dispatch(authSuccess(token, localStorage.getItem('uid')));
            }
        }
    }
}