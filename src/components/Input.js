import React from 'react'

const Input = ({label, input, meta: {error, touched}}) => {

	const renderError = (error, touched) => {
		if(touched && error) {
			return(<div className="ui error message">
				<div className="header">{error}</div>
			</div>)
		}
	}
	const className = `field ${error && touched ? 'error': ''}`
  return (
		<div className={className}>
			<label>{label}</label>
			<input {...input} />
			{renderError(error, touched)}
			
		</div>
	);
}

export default Input
