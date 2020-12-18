import React, { useEffect, useState, useRef } from 'react';

const GoogleAuth = () => {
  let authRef = useRef(null);

  const [isSignedIn, setIsSignedIn] = useState(null);

	useEffect(() => {
		window.gapi.load('client:auth2', () => {
			window.gapi.client.init({
				clientId:
					'543771112961-16kfk52agc05jq1a86s4iv1d9cvs4uu3.apps.googleusercontent.com',
				scope: 'email',
			}).then(() => {
          authRef.current = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(authRef.current.isSignedIn.get());
          authRef.current.isSignedIn.listen(onAuthChange)
      }).catch((err) => {
        
      });
		});
  }, []);

  const onAuthChange = () => {
    setIsSignedIn(authRef.current.isSignedIn.get())
  }

  const onSignInClick = () => {
    authRef.current.signIn()
  }
  const onSignOutClick = () => {
    authRef.current.signOut()
  }
  const renderAuthButton = () => {
    if(isSignedIn === null){
      return null
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui red google button">
          <i className="google icon"/>
          Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button">
          <i  className="google icon"/>
          Sign In with Google
        </button>
      )    }
  }
  
	return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
