import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import Tweet from './Tweet';

import fakeBackend from '../../fakeBackend';

class Feed extends Component {
	state = {
		tweets: [],
		error: ''
	}

	componentDidMount(){
		this.fetchTweets();
	}

	fetchTweets = () => {
		const tweets = fakeBackend.getTweets();
        this.setState({tweets: tweets});
    }

	render(){
		const { error } = this.state;
		const tweets = this.state.tweets.map(tweet => <Tweet key={tweet._id} data={tweet}/>);
		return (
			<div className="feed">
				{error  ? error : tweets}
			</div>
		);
	}
};

const mapStateToProps = state => ({
	username: state.auth.userInfo.username
});	

export default connect(mapStateToProps)(Feed);
