import React from 'react';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
	return (
		<>
			<li><Link to="/register">Register</Link></li>	
			<li><Link to="/login">Login</Link></li>
		</>
	);
};

export default SignedOutLinks;