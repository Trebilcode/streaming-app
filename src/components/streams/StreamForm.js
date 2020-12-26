import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from '../Input';

const StreamForm = ({ handleSubmit, createStream, onSubmit }) => {
	const onSubmitForm = formValues => {
		onSubmit(formValues);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmitForm)} className='ui form error'>
				<Field name='title' component={Input} label='Enter Title' />
				<Field name='description' component={Input} label='Enter Desription' />
				<button className='ui button primary'>Submit</button>
			</form>
		</div>
	);
};

const validate = formValues => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}

	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}

	return errors;
};

export default reduxForm({
	form: 'streamForm',
	validate,
})(StreamForm);

