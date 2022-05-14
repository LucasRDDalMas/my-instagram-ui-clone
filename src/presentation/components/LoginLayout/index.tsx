import React from 'react'
import { ForgotPassword, LoginLogo, LoginSocial, LoginWrapper } from './styles'
import { MainLogo } from '@/presentation/assets/logos'
import { Divider } from '@/presentation/components/shared/styles'
import { IconFacebook } from '@/presentation/assets/icons'
import { LoginForm, SignUp } from './components/'
import Apps from '@/presentation/components/shared/Apps'

const LoginLayout: React.FC = () => {
  return (
    <>
      <LoginWrapper>
        <LoginLogo>
          <img src={MainLogo} alt='' />
        </LoginLogo>

        <LoginForm />

        <Divider>Or</Divider>

        <LoginSocial>
          <IconFacebook size='24' color='#385184' />
          <span>Log in with Facebook</span>
        </LoginSocial>

        <ForgotPassword>
          Forgot password?
        </ForgotPassword>
      </LoginWrapper>

      <SignUp />
      <Apps />
    </>
  )
}

export default LoginLayout
