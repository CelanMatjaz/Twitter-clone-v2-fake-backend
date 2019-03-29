import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import TweetP from './TweetP';

import fakeBackend from '../../fakeBackend';

class EditTweet extends Component {
    state = {
        title: '',
        body: ''
    }

    componentDidMount(){
        const tweet = fakeBackend.getTweet(this.props.match.params.id);
        if(tweet && tweet.username === this.props.username){
            this.setState({
                title: tweet.title,
                body: tweet.body
            });
        }
        else{
            this.props.history.push('/');
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = fakeBackend.editTweet({title: this.state.title, body: this.state.body}, this.props.match.params.id);
        if(data.msg === 'Tweet was updated'){
            this.props.history.push(`/profile/${this.props.username}`);
        }
        else{
            this.setState({error: 'Could not edit tweet'});
        }
    }

    render() {
        return (
            <TweetP data={{...this.state, btnText: 'Edit'}} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        );
    }
}

const mapStateToProps = state => ({
    username: state.auth.userInfo.username
});

export default connect(mapStateToProps)(EditTweet);