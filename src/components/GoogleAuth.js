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
          setIsSignedIn(authRef.current.isSignedIn.get())
      }).catch((err) => {
        
      });
		});
  }, []);

  const renderAuthButton = () => {
    if(isSignedIn === null){
      return <div>I dont know if we are signed in</div>
    } else if (isSignedIn) {
      return <div>Signed in</div>
    } else {
      return <div>Im not signed in</div>
    }
  }
  
	return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
