import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Actions
import { Logout as logout } from '../../store/actions/actions/actions.auth';

const SignedInLinks = props =>{

	const handleLogout = e => {
		e.preventDefault();
		props.logout()
	}

	return (
		<>
			<li>
				<Link to={`/profile/${props.username}`}>Profile</Link>
				<ul>
					<li><Link to="/add-tweet">Post tweet</Link></li>
					<li><a href="/" onClick={handleLogout}>Logout</a></li>
				</ul>
			</li>
		</>
	);
	
};

const mapStateToProps = state => ({
	username: state.auth.userInfo.username
});

export default connect(mapStateToProps, { logout })(SignedInLinks);