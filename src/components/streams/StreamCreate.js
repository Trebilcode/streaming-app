import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input';

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
				<Field name='title' component={Input} label='Enter Title' />
				<Field
					name='description'
					component={Input}
					label='Enter Desription'
				/>
			</form>
      <br />
      <button className="ui button primary">Submit</button>
		</div>
	);
};

export default reduxForm({
	form: 'streamCreate',
})(StreamCreate);
