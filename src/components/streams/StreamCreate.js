import React from 'react';
import {connect} from 'react-redux'
import { Field, reduxForm } from 'redux-form';

import {createStream} from '../../actions'
import Input from '../Input';

const StreamCreate = ({ handleSubmit, createStream }) => {	

	const onSubmit = formValues => {
		createStream(formValues)
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)} className='ui form error'>
				<Field name='title' component={Input} label='Enter Title' />
				<Field name='description' component={Input} label='Enter Desription' />
				<button className='ui button primary'>Submit</button>
			</form>
		</div>
	);
};

const validate = (formValues) => {
  const errors = {}
  if(!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if(!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors;
}

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, {
	createStream
})(formWrapped)
