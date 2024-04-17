import React from 'react'
import Login from '../components/auth/Login'


const LoginPage = ({ createUser}) => {

  return (
    <Login createUser={createUser} />
  )
}

export default LoginPage
