import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'

const Login: React.FC = () => {
  return (
    <div>
      <h1>Staticks CMS</h1>
      <div>
        <h2>로그인</h2>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
