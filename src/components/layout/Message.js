import React from 'react';

const ErrorMessage = props => {
	return (
		<div className="message normal">
			{props.message}
		</div>
	);
};

export default ErrorMessage;