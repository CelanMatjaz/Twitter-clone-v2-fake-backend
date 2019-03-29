export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT = 'LOGOUT';

export const login = () => ({
    type: LOGIN
});

export const loginSuccess = (userInfo, token) => ({
    type: LOGIN_SUCCESS,
    userInfo,
    token
});

export const loginFailed = errors => ({
    type: LOGIN_FAILED,
    errors
}); 

export const logout = () => ({
    type: LOGOUT
}); 

const types = {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
}

export default types;