import React from 'react';
import { Link } from 'react-router-dom';

const Tweet = props => (
	<div className="tweet">
		<h3 className="tweet-header">{props.data.title}</h3>
		<p className="tweet-text">{props.data.body}</p> <hr/>
		<small>by <Link to={`/profile/${props.data.username}`}>{props.data.username}</Link>, {props.data.date.slice(0, 10)}</small>
		{props.profileView ? 
			<div>
				<button onClick={() => props.edit(props.data._id)}>Edit</button>	
				<button onClick={() => props.delete(props.data._id)}>Delete</button>
			</div>
			: ''
		}
	</div>
);

export default Tweet;