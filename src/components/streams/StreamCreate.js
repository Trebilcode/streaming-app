import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamCreate = ({ handleSubmit }) => {
	const renderInput = ({ input, label }) => {
		return (
			<div className='field'>
				<label>{label}</label>
				<input {...input} />
			</div>
		);
	};

	const onSubmit = formValues => {
		console.log(formValues);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className='ui form'>
				<Field name='title' component={renderInput} label='Enter Title' />
				<Field
					name='description'
					component={renderInput}
					label='Enter Desription'
				/>
			</form>
		</div>
	);
};

export default reduxForm({
	form: 'streamCreate',
})(StreamCreate);
