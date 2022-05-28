import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import useAuthStore from '../states'

const Login: React.FC = () => {
  const inputState = useAuthStore(state => state.input)
  return (
    <div>
      {JSON.stringify(inputState)}
      <h1>Staticks CMS</h1>
      <LoginForm />
    </div>
  )
}

export default Login
