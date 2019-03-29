import React from 'react';
import { connect } from 'react-redux';

//Components
import ErrorMessage from '../layout/ErrorMessage';

const Login = props => {
    const { email, password } = props.data;
    const { handleChange, handleSubmit, loginErrors } = props;
    return (
        <div className="form form-auth">
            <form onSubmit={handleSubmit}>  
                {loginErrors.map((error, index) => <ErrorMessage key={index} message={error}/>)}

                <h1>Login</h1>
                <label htmlFor="email">Email</label> <br/>
                <input type="email" id="email" value={email} onChange={handleChange} required/> <br/>

                <label htmlFor="password">Password</label> <br/>
                <input type="password" id="password" value={password} onChange={handleChange} required /> <br/>
                <button>Login</button> 

            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    loginErrors: state.auth.loginErrors
});

export default connect(mapStateToProps)(Login);
