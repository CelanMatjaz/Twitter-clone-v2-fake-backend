import {
    login,
    loginSuccess,
    loginFailed,
    logout
} from '../action creators/auth';

import fakeBackend from '../../../fakeBackend';

export const Login = creds => {
    return dispatch => {
        dispatch(login());
        const data = fakeBackend.login(creds);
        if(data.status === 'Login_success')
            dispatch(loginSuccess(data.userInfo, data.token));        
        else
            dispatch(loginFailed(data.errors || []));        
    }
}

export const Logout = () => dispatch => dispatch(logout());