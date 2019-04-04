import React from 'react'
import PropTypes from 'prop-types';

export default function Button(props){
	const{type, children, dispatch} = props;
	return (
		<button type={type} onClick={() => dispatch()}>{children}</button>
	)
}

Button.propTypes = {
	type: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired,
	dispatch: PropTypes.func.isRequired,
}