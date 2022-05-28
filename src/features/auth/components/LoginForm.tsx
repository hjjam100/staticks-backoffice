import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthStore from '../states'
const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const inputState = useAuthStore(state => state.input)
  const setInput = useAuthStore(state => state.setInput)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          value={inputState.email}
          {...register('email', {
            required: true,
            onChange: e => setInput('email', e.target.value),
          })}
        />
      </div>

      <div>
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          value={inputState.password}
          {...register('password', {
            required: true,
            onChange: e => setInput('password', e.target.value),
          })}
        />
      </div>

      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

export default LoginForm
