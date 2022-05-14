import React from 'react'
import { ForgotPassword, LoginLogo, LoginSocial, LoginWrapper } from './styles'
import { MainLogo } from '@/presentation/assets/logos'
import { Divider } from '@/presentation/components/shared/styles'
import { IconFacebook } from '@/presentation/assets/icons'
import { LoginForm, SignUp, Apps } from './components/'

const Loginlayout: React.FC = () => {
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

export default Loginlayout
