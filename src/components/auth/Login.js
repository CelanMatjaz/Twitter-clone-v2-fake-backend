import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import LoginP from './LoginP';

//Actions
import { Login as login } from '../../store/actions/actions/actions.auth';

export class Login extends Component {
    state = {
        email: '',
        password: ''
    }  

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.login({
            email: this.state.email,
            password: this.state.password
        });
	}	
																																														
    render() {
        const { isEmpty, authError } = this.props.auth;
        
		if(!isEmpty && !authError){
            return <Redirect to={'/'}/>;
        } 
		
        return (
            <LoginP data={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { login })(Login);
