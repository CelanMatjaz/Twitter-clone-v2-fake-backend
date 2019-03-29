import React from 'react';

const ErrorMessage = props => {
	return (
		<div className="message error">
			{props.message}
		</div>
	);
};

export default ErrorMessage;