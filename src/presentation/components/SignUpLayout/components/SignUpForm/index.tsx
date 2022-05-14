import React, { useState } from 'react'
import FloatInput from '@/presentation/components/shared/FloatInput'
import { LoginFormButton, LoginFormWrapper } from './styles'

const LoginForm: React.FC = () => {
  const [state, setState] = useState({
    emailOrPhone: '',
    username: '',
    fullName: '',
    password: ''
  })

  return (
    <LoginFormWrapper>
      <FloatInput state={state} setState={setState} type='text' name='emailOrPhone' placeholder='Phone number or email' aria-required="true" />
      <FloatInput state={state} setState={setState} type='text' name='fullName' placeholder='Full Name' aria-required="true" />
      <FloatInput state={state} setState={setState} type='text' name='username' placeholder='Username' aria-required="true" />
      <FloatInput state={state} setState={setState} type='password' name='password' placeholder='Password' aria-required="true" />
      <LoginFormButton>Sign up</LoginFormButton>
    </LoginFormWrapper>
  )
}

export default LoginForm
