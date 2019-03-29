import types from '../actions/action creators/auth';

const initState = {
    isEmpty: false,
	userInfo: {
		username: '123',
		id: 1,
		email: 'email1@email.com'
	},
	loginErrors: [],
	loginCheck: true
}

const authReducer = (state = initState, action) => {
	switch(action.type){
		case types.LOGIN:
			return {
				...state,
				loginErrors: []
			}
		
		case types.LOGIN_SUCCESS:
			localStorage.setItem('token', action.token);
			return {
				...state,
				userInfo: action.userInfo,
				loginErrors: [],
				isEmpty: false
			}

		case types.LOGIN_FAILED:
			return {
				...state,
				userInfo: {},
				loginErrors: action.errors
			}

		case types.LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				userInfo: {},
				isEmpty: true
			}

		default: 
			return state;
	}
}

export default authReducer;