import React, { useEffect } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import history from '../../History';
import { deleteStream, fetchStream } from '../../actions';
import { Link } from 'react-router-dom';

const StreamDelete = ({
	match: {
		params: { id },
	},
  fetchStream,
  deleteStream,
	stream,
}) => {
	useEffect(() => {
		fetchStream(id);
	}, []);

	const renderActions = () => {
		return (
			<>
				<button onClick={() => deleteStream(id)} className='ui button negative'>
					Delete
				</button>
				<Link to='/' className='ui button'>
					Cancel
				</Link>
			</>
		);
	};

	const renderContent = () => {
		if (!stream) {
			console.log(stream);

			return 'Are you sure you want to delete this stream?';
		}

		return `Are you sure you want to delete the stream with title: ${stream.title}`;
	};

	return (
		<Modal
			onDismiss={() => history.push('/')}
			title='Delete Stream'
			content={renderContent()}
			actions={renderActions()}
		/>
	);
};

const mapStateToProps = (state, ownProps) => {
	console.log(ownProps);
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, {
	fetchStream,
	deleteStream,
})(StreamDelete);
