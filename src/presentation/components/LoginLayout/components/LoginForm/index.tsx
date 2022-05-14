import React, { useState } from 'react'
import FloatInput from '@/presentation/components/shared/FloatInput'
import { LoginFormButton, LoginFormWrapper } from './styles'

const LoginForm: React.FC = () => {
  const [state, setState] = useState({
    username: '',
    password: ''
  })

  return (
    <LoginFormWrapper>
      <FloatInput state={state} setState={setState} type='text' name='username' placeholder='Phone number, username, or email' aria-required="true" maxLength={75} />
      <FloatInput state={state} setState={setState} type='password' name='password' placeholder='Password' aria-required="true" />
      <LoginFormButton>Log In</LoginFormButton>
    </LoginFormWrapper>
  )
}

export default LoginForm
