import React from 'react';

//Components
import ErrorMessage from '../layout/ErrorMessage';
import Message from '../layout/Message';

const RegisterContainer = props => {
    const { email, username, password, passwordRepeat, registerErrors, message } = props.data;
    const { handleChange, handleSubmit } = props;
    return (
        <div className="form form-auth">
            <form onSubmit={handleSubmit}>                   
                {message ? <Message message={message}/> : ''}
                {registerErrors.map((error, index) => <ErrorMessage key={index} message={error}/>)}
                <h1>Register</h1>
                <label htmlFor="email">Email</label> <br/>
                <input type="email" id="email" value={email} onChange={handleChange} required/><br/>

                <label htmlFor="username">Username</label> <br/>
                <input type="text" id="username" value={username} onChange={handleChange} required/><br/>
                
                <label htmlFor="password">Password</label> <br/>
                <input type="password" id="password" value={password} onChange={handleChange} required/><br/>

                <label htmlFor="passwordRepeat">Repeat password</label> <br/>
                <input type="password" id="passwordRepeat" value={passwordRepeat} onChange={handleChange} required/><br/>

                <button>Register</button>
            </form>
        </div>
    );
};

export default RegisterContainer;