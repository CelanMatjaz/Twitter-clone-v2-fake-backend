import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
 
//Components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = props => {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="left">
					<Link to="/">Twitter clone</Link>
				</div>
				<ul className="right">
					{props.auth.isEmpty ? <SignedOutLinks/> : <SignedInLinks/>}
				</ul>
			</div>
		</nav>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Navbar);