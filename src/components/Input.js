import React from 'react'

const Input = ({label, input}) => {
  return (
		<div className='field'>
			<label>{label}</label>
			<input {...input} />
		</div>
	);
}

export default Input
