import React from 'react'
import { GoogleLogin } from '@react-oauth/google'

export const GoogleAndGitForm = () => {
  const onSuccess = (response) => {
    console.log('Google sign-in successful:', response)
  }

  const onFailure = (response) => {
    console.log('Google sign-in failed:', response)
  }

  return (
    <GoogleLogin
      clientId="YOUR_GOOGLE_CLIENT_ID"
      onSuccess={onSuccess}
      onFailure={onFailure}
      autoLoad={false}
      render={(props, handleLogout) => (
        <button onClick={props.onClick} disabled={props.disabled}>
          <img
            src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png"
            alt="Google sign-in"
            style={{ width: '180px', height: '40px' }}
          />
        </button>
      )}
    />
  )
}
