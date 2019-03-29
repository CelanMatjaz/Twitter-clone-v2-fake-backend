import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import Tweet from './Tweet';

import fakeBackend from '../../fakeBackend';

class FeedProfile extends Component {
	state = {
		tweets: [],
		error: ''
	}

	componentDidMount(){
		this.fetchTweets();
    }

    componentDidUpdate(prevProps){
        if(prevProps !== this.props){
            this.fetchTweets();
        }
    }

    fetchTweets = () => {
        const username = this.props.match.params.username;
        const tweets = fakeBackend.getTweets(username);
        this.setState({tweets: tweets});
    }
    
    handleEdit = id => {
        this.props.history.push(`/edit-tweet/${id}`);
    }

    handleDelete = id => {
        const data = fakeBackend.deleteTweet(id);
        if(data.msg === 'Tweet was deleted'){
            this.fetchTweets();
        }
        else{
            this.setState({error: 'Could not delete tweet'});
        }
    }

	render(){
		const { error } = this.state;
		const tweets = this.state.tweets.map(tweet => 
            <Tweet 
                key={tweet._id} 
                data={tweet} 
                profileView={this.props.username === tweet.username} 
                edit={this.handleEdit} 
                delete={this.handleDelete}
            />
        );

		return (
			<div className="feed">
				{error ? error : tweets}
			</div>
		);
	}
};

const mapStateToProps = state => ({
    username: state.auth.userInfo.username,
    id: state.auth.userInfo._id
});	

export default connect(mapStateToProps)(FeedProfile);