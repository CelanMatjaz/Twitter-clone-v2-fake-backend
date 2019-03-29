import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//Components
import TweetP from './TweetP';

import fakeBackend from '../../fakeBackend';

class AddTweet extends Component {
    state = {
        title: '',
        body: '',
        error: ''
    }

    handleChange = e => {
        const { title, body } = this.state;
        if(title.length < 31 && body.length < 256)
            this.setState({
                [e.target.id]: e.target.value
            });
    }

    handleSubmit = e => {
        e.preventDefault();        
        const data = fakeBackend.addTweet({title: this.state.title, body: this.state.body}, this.props.id, this.props.username)
        if(data.msg === 'Tweet was added'){
            this.props.history.push(`/profile/${this.props.username}`);
        }
        else{
            this.setState({error: 'Could not post tweet'});
        }
    }

    render() {
        if(this.props.isEmpty) this.props.history.push('/');
        return (
            <TweetP data={{...this.state, btnText: 'Post'}} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.userInfo.username,
    isEmpty: state.auth.isEmpty,
    id: state.auth.userInfo._id
});

export default withRouter(connect(mapStateToProps)(AddTweet));