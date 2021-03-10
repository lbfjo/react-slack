import React from 'react'
import { LoginContainer, LoginInnerContainer } from './Login-styled'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'

function Login() {
  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithPopup(provider).catch((error) => alert(error.message))
  }
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src='https://logodownload.org/wp-content/uploads/2014/05/accenture-logo-1-1.png'
          alt=''
        />
        <h1>Sign in to the Community</h1>
        <p>#Join Up</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login
