import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions';
import Input from '../Input';
import StreamForm from './StreamForm';

const StreamCreate = ({ handleSubmit, createStream }) => {
	const onSubmit = formValues => {
		createStream(formValues);
	};
	return (
		<div>
			<h3>Create a Stream</h3>
			<StreamForm onSubmit={onSubmit}></StreamForm>
		</div>
	);
};

export default connect(null, {
	createStream,
})(StreamCreate);
