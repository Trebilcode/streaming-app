import React, { useEffect, useRef } from 'react';

import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
	let authRef = useRef(null);


	useEffect(() => {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'543771112961-16kfk52agc05jq1a86s4iv1d9cvs4uu3.apps.googleusercontent.com',
					scope: 'email',
				})
				.then(() => {
          authRef.current = window.gapi.auth2.getAuthInstance();
          onAuthChange(authRef.current.isSignedIn.get())
					authRef.current.isSignedIn.listen(onAuthChange);
				})
				.catch(err => {});
		});
	}, []);

	const onAuthChange = isSignedIn => {
		isSignedIn ? signIn(authRef.current.currentUser.get().getId()) : signOut();
	};

	const onSignInClick = () => {
		authRef.current.signIn();
	};
	const onSignOutClick = () => {
		authRef.current.signOut();
	};
	const renderAuthButton = () => {
		if (isSignedIn === null) {
			return null;
		} else if (isSignedIn) {
			return (
				<button onClick={onSignOutClick} className='ui red google button'>
					<i className='google icon' />
					Sign Out
				</button>
			);
		} else {
			return (
				<button onClick={onSignInClick} className='ui red google button'>
					<i className='google icon' />
					Sign In with Google
				</button>
			);
		}
	};

	return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, {
	signIn,
	signOut,
})(GoogleAuth);
