import React, { Component } from 'react';
import Routes from '../Routes';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import Navbar from './layout/Navbar';

class App extends Component {
    render() {
        return (
            <>
                <Navbar/>
                <main className="container">
                    <Routes/> 
                </main>
            </>
        );
    }
}

const mapStateToProps = state => ({
    loginCheck: state.auth.loginCheck
});

export default withRouter(connect(mapStateToProps, {  })(App));